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

const mainDBName = 'appDB';
const mainImageName = 'mainImage';

export type FileUniqueID = string;  // generated by the storage layer
export type Timestamp = number;

export type FileMetadata = {
  filename: string;
  mimeType: string;
  title?: string;
}

export type FileRecord = {
  id: FileUniqueID;
  metadata: FileMetadata;
  added: Timestamp;
  blobModified: Timestamp;
  metadataModified: Timestamp;
};

export type FileRecordReady = {
  fileRecord: FileRecord;
  ready: Promise<void>;
}

interface LlamaDB extends DBSchema {
  blob: {
    key: string;
    value: Blob;
  };
  metadata: {
    key: string;
    value: FileRecord;
  };
}

export default class LlamaStorage {
  private db: IDBPDatabase<LlamaDB>;

  private constructor(db: IDBPDatabase<LlamaDB>) {
    console.log('Database initialized');
    this.db = db;
  }

  static async create() {
    return new LlamaStorage(await openDB(mainDBName, undefined /* version */, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log(`DB update request`);
        db.createObjectStore('blob');
        db.createObjectStore('metadata');
      },
      // blocked()
      // blocking()
      // terminated()
    }));
  }

  add(file: Blob, metadata: FileMetadata): FileRecordReady {
    const id: FileUniqueID = mainImageName /* TODO: generate unique IDs */;
    const now = Date.now();
    const record: FileRecord = {
      id: id,
      metadata: metadata,
      added: now,
      blobModified: now,
      metadataModified: now,
    };

    const promises = [
      this.db.put('blob', file, id),
      this.db.put('metadata', record, id),
    ];

    const ready = new Promise<void>(async (resolve, reject) => {
        await Promise.allSettled(promises);
        console.log(`successfully added '${id}'`);
        resolve();
    });

    return { fileRecord: record, ready: ready };
  }

  async list(): Promise<FileRecord[]> {
    // TODO: https://github.com/jakearchibald/idb#async-iterators
    throw 'list() is unimplemented';
  }

  async getFile(id: FileUniqueID): Promise<Blob> {
    const blob = await this.db.get('blob', id);
    if (!blob) throw `no blob found for id '${id}'`;
    console.log(`successfully retrieved blob for '${id}'`);
    return blob;
  }

  async get(id: FileUniqueID): Promise<FileRecord> {
    const record = await this.db.get('metadata', id);
    if (!record) throw `no record found for id '${id}'`;
    console.log(`successfully retrieved metadata for '${id}'`);
    return record;
  }

  // At least one of |file| and |metadata| must be provided.
  async update(id: FileUniqueID, file?: Blob, metadata?: FileMetadata): Promise<FileRecord> {
    if (!file && !metadata) throw 'neither |file| nor |metadata| was provided';

    // don't "await" yet, so that we can kick off the blob "put" (if applicable)
    // first.
    const recordPromise = this.db.get('metadata', id);

    const now = Date.now();
    let blobModified: number | null = null;
    let promises: Promise<any>[] = [];
    if (file) {
      blobModified = now;
      promises.push(this.db.put('blob', file, id));
    }

    let record = await recordPromise;
    if (!record) throw `no record found for id '${id}'`; // TODO: this does kind of leave use in a bad state - maybe the optimization isn't worth it
    if (blobModified) record.blobModified = blobModified;
    if (metadata) {
      record.metadata = metadata;
      record.metadataModified = now;
    }
    promises.push(this.db.put('metadata', record, id));

    await Promise.allSettled(promises);
    console.log(`successfully updated '${id}'`);
    return record;
  }
}
