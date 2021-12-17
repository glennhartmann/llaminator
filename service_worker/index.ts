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

import { StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import * as storage from '../src/storage'; // TODO: move this to a more common place?

const cacheName = 'app-cache';

const mainDBName = 'appDB';
const objStoreName = 'imageStore';
const mainImageName = 'mainImage';

declare var self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => url.pathname.endsWith('/share-target'),
  async ({request}) => {
    const data = await request.formData();

    if (!indexedDB) { /* TODO: display error message */ }

    // TODO: handle invalid share
    storeFile(data.get('image') as File, await storage.LlamaStorage.create());
    return Response.redirect('/', 302);
  },
  'POST'
);

async function storeFile(f: File, db: storage.LlamaStorage) {
  const b = new Blob([await f.arrayBuffer()], { type: f.type });
  // TODO: perhaps prompt before silently replacing old image, if one exists?
  const recordReady = db.add(b, {
    filename: f.name,
    mimeType: f.type,
    // title: '',
  }); // TODO: or update()
  // TODO: display "saving..." message/spinner?
  console.log(`storing image as id ${recordReady.fileRecord.id} (may not be finished saving yet)`)
  await recordReady.ready;
}

registerRoute(
  ({url}) => true,
  new StaleWhileRevalidate({
    cacheName: cacheName
  })
);
