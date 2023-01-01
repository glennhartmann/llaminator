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

import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes, UploadMetadata, UploadResult } from 'firebase/storage';
import { firebaseStorage } from './firebase';

const kMainDBName = 'appDB';

export type FileUniqueID = string; // generated by the storage layer

// TimestampUnixMillis is the number of milliseconds since Unix Epoch (midnight
// Jan 1, 1970 UTC), as generated by Date.now()
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now).
export type TimestampUnixMillis = number;

export type FileMetadata = {
  filename: string;
  mimeType: string;
  title?: string;
}

export type FileRecord = {
  id: FileUniqueID;
  metadata: FileMetadata;
  added: TimestampUnixMillis;
  blobModified: TimestampUnixMillis;
  metadataModified: TimestampUnixMillis;
};

interface LlamaDB extends DBSchema {
  blob: {
    key: FileUniqueID;
    value: Blob;
  };
  metadata: {
    key: FileUniqueID;
    value: FileRecord;
  };

  // miscStringVals is for any one-off string-type state that we don't want to
  // make a whole new store for.
  // TODO: consider removing this unless we come up with another purpose for it
  miscStringVals: {
    key: string;
    value: string;
  };
}

export class LlamaStorage {
  private db: IDBPDatabase<LlamaDB>;

  private constructor(db: IDBPDatabase<LlamaDB>) {
    console.log('Database initialized');
    this.db = db;
  }

  static async create() {
    return new LlamaStorage(await openDB(kMainDBName, undefined /* version */, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log(`DB update request`);
        db.createObjectStore('blob');
        db.createObjectStore('metadata');
        db.createObjectStore('miscStringVals');
      },
      // blocked()
      // blocking()
      // terminated()
    }));
  }

  async add(file: Blob, metadata: FileMetadata): Promise<FileRecord> {
    const id: FileUniqueID = uuidv4();
    const now = Date.now();
    const record: FileRecord = {
      id: id,
      metadata: metadata,
      added: now,
      blobModified: now,
      metadataModified: now,
    };

    const tx = this.db.transaction(['blob', 'metadata'], 'readwrite');

    let uploadTask: Promise<UploadResult> | null = null;
    if (firebaseStorage) {
      // Note that as bad as this looks, security-wise, there will be server-side protection
      // against the user modifying unintended locations.
      const storageRef = ref(firebaseStorage, 'public/' + metadata.filename);
      const firebaseMeta: UploadMetadata = {
        contentType: metadata.mimeType,
        customMetadata: metadata,
      };
      uploadTask = uploadBytes(storageRef, file, firebaseMeta);
    }

    await Promise.allSettled([
      tx.objectStore('blob').put(file, id),
      tx.objectStore('metadata').put(record, id),
      tx.done,
    ]);
    if (uploadTask) {
      // TODO: we should allow this in the background, not have it block (and also handle errors,
      // etc)
      await uploadTask;
    }
    console.log(`successfully added '${id}'`);
    return record;
  }

  async list(): Promise<FileRecord[]> {
    return this.db.getAll('metadata');
  }

  async getFile(id: FileUniqueID): Promise<Blob | undefined> {
    const blob = await this.db.get('blob', id);
    if (!blob) {
      console.log(`no blob found for id '${id}'`);
      return undefined;
    }
    console.log(`successfully retrieved blob for '${id}'`);
    return blob;
  }

  async get(id: FileUniqueID): Promise<FileRecord | undefined> {
    const record = await this.db.get('metadata', id);
    if (!record) {
      console.log(`no record found for id '${id}'`);
      return undefined;
    }
    console.log(`successfully retrieved metadata for '${id}'`);
    return record;
  }

  // At least one of |file| and |metadata| must be provided.
  async update(id: FileUniqueID, file?: Blob, metadata?: FileMetadata): Promise<FileRecord> {
    if (!file && !metadata) throw new TypeError('neither |file| nor |metadata| was provided');

    const tx = this.db.transaction(['blob', 'metadata'], 'readwrite');

    const now = Date.now();
    const record = await tx.objectStore('metadata').get(id);
    if (!record) throw new ReferenceError(`no record found for id '${id}'`);
    if (metadata) {
      record.metadata = metadata;
      record.metadataModified = now;
    }

    if (file) {
      record.blobModified = now;
      await tx.objectStore('blob').put(file, id);
    }

    await tx.objectStore('metadata').put(record, id);
    await tx.done;
    console.log(`successfully updated '${id}'`);

    return record;
  }

  /**
   * Deletes an image and its metadata from storage.
   *
   * @param {FileUniqueID} id - the file identifier.
   */
  async delete(id: FileUniqueID): Promise<void> {
    const tx = this.db.transaction(['blob', 'metadata'], 'readwrite');

    await Promise.allSettled([
      await tx.objectStore('blob').delete(id),
      await tx.objectStore('metadata').delete(id),
      await tx.done,
    ]);
    console.log(`deleted '${id}'`);
  }
}
