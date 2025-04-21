import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import config from './config/environment';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';
import { setBuildURLConfig } from '@ember-data/request-utils';

setBuildURLConfig({
  host: "http://localhost:8000",
  namespace: 'api/0.1',
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(compatModules);
}

loadInitializers(App, config.modulePrefix, compatModules);
