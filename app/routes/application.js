import Route from '@ember/routing/route';
import { findRecord, query } from '@ember-data/json-api/request';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    return {
      contactRequest: this.store.request(query('contact'))
    };
  }
}
