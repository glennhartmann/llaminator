/*
 * Copyright 2021 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import '@material/mwc-top-app-bar-fixed';

import './components/llama-select-fab';
import './llaminator.css';
import * as storage from './storage';

if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
} else {
  // TODO display error message and fail gracefully
}

window.addEventListener('load', () => {
  const fileInput = document.querySelector('#input') as HTMLElement;
  const imgElement = document.querySelector('img') as HTMLImageElement;
  const shareBtn = document.querySelector('#share') as HTMLButtonElement;

  if (!window.indexedDB || !window.URL) { /* TODO: display error message */ }

  const dbPromise = storage.LlamaStorage.create();
  dbPromise.then((db) => onDBOpenSuccess(db, imgElement, shareBtn));

  fileInput.addEventListener('fileselected', (e) => onFileInputChange(e as CustomEvent, dbPromise, imgElement, shareBtn));

  shareBtn.addEventListener('click', async () => {
    const f = await fileFromID(await dbPromise, storage.mainImageName /* TODO: support multiple */);
    navigator.share({files: [f]});
  });
});

async function onDBOpenSuccess(db: storage.LlamaStorage, imgElement: HTMLImageElement, shareBtn: HTMLButtonElement) {
  try {
    const b = await db.getFile(storage.mainImageName /* TODO: support multiple */);
    imgElement.src = window.URL.createObjectURL(b);
    displayIfShareEnabled(shareBtn, db);
  } catch {}
}

async function onFileInputChange(e: CustomEvent, dbPromise: Promise<storage.LlamaStorage>, imgElement: HTMLImageElement, shareBtn: HTMLButtonElement) {
  const db = await dbPromise;
  const f = e.detail as File;
  const b = new Blob([await f.arrayBuffer()], { type: f.type });
  // TODO: perhaps prompt before silently replacing old image, if one exists?
  imgElement.src = window.URL.createObjectURL(b);
  const recordReady = db.add(b, {
    filename: f.name,
    mimeType: f.type,
    // title: '',
  }); // TODO: or update()
  console.log(`storing image as id ${recordReady.fileRecord.id} (may not be finished saving yet)`)
  recordReady.ready.then(() => displayIfShareEnabled(shareBtn, db));
  // TODO: add option to remove from storage
}

async function displayIfShareEnabled(target: HTMLElement, db: storage.LlamaStorage): Promise<void> {
  const f = await fileFromID(db, storage.mainImageName /* TODO: support multiple */);
  if ('share' in navigator && 'canShare' in navigator &&
      navigator.canShare({files: [f]})) {
    target.style.display = 'block';
  }
}

async function fileFromID(db: storage.LlamaStorage, id: storage.FileUniqueID): Promise<File> {
  const record = await db.get(id);
  const blob = await db.getFile(id);
  return new File([blob], record.metadata.filename,
    {type: record.metadata.mimeType});
}
