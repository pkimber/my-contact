'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');

module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');
  const { setConfig } = await import('@warp-drive/build-config');
  let app = new EmberApp(defaults, {});

  setConfig(app, __dirname, {
    compatWith: '99.0',
  });

  return compatBuild(app, buildOnce);
};
