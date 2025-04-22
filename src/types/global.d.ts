// global.d.ts ou mongoClient.d.ts
import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }

  interface Global {
    _mongoClientPromise?: Promise<MongoClient>;
  }
}

export {};
