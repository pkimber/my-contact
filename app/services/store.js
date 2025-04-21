import BaseStore, { CacheHandler } from '@ember-data/store';
import Fetch from '@ember-data/request/fetch';
import JSONAPICache from '@ember-data/json-api';
import RequestManager from '@ember-data/request';
import { instantiateRecord, teardownRecord } from '@warp-drive/schema-record';
import { register as registerMyModels } from 'my-contact/schemas/contact';
import { registerDerivations, SchemaService } from '@warp-drive/schema-record';

export default class Store extends BaseStore {
  requestManager = new RequestManager().use([Fetch]).useCache(CacheHandler);

  createCache(capabilites) {
    return new JSONAPICache(capabilites);
  }

  createSchemaService() {
    const schema = new SchemaService();
    registerDerivations(schema);
    registerMyModels(schema);
    return schema;
  }

  instantiateRecord(identifier, createRecordArgs) {
    return instantiateRecord(this, identifier, createRecordArgs);
  }

  teardownRecord(record) {
    teardownRecord(record);
  }
}
