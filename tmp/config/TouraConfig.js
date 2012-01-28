dojo.provide('toura.app.TouraConfig');

var toura = toura || {};
toura.app = toura.app || {};

toura.app._Config = {
  id     : 'bober',
  locale : 'en-US',
  buildDate : 1327779976,
  appVersion : '4.1.0',

  updateUrl  : '',
  versionUrl : '',

  device : {
    os   : 'android',        // android || ios
    type : 'phone' // phone   || tablet
  }
};

// force all images to come from S3. this
// is mainly used by MAP for the preview window.
toura.forceLocal = false;
toura.forceStreaming = false;

// change where the app should look for
// its initial data. this should be a file
// on your local system; default if false
// is './data/tour.json'
toura.localDataUrl = false;

// skips checking for newer remote version.
// useful for speeding up non-data dev.
toura.skipVersionCheck = false;

// these are documented at https://github.com/Toura/toura_map/wiki/APP-Feature-Flags
toura.features = {
  multiLineChildNodes : false,
  sharing : true,
  favorites : true,
  fontSize : true,
  siblingNav : true,
  debugToolbar : true,
  debugPage : true
};
