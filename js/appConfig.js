/**
 * Copyright 2016, Sourcepole AG.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Proj4js = require('proj4');
const SearchProviders = require('./SearchProviders');
const renderHelp = require('./Help');

Proj4js.defs("EPSG:21781", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs");
Proj4js.defs("EPSG:2056", "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");
Proj4js.defs("EPSG:25832", "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

module.exports = {
    initialState: {
        defaultState: {
            mousePosition: {
                enabled: true
            },
            mapInfo: {
                enabled: true
            }
        },
        mobile: {}
    },
    pluginsDef: {
        plugins: {
            MapPlugin: require('../qwc2/QWC2Components/plugins/Map'),
            LocateButtonPlugin: require('../qwc2/QWC2Components/plugins/LocateButton'),
            ZoomInPlugin: require('../qwc2/QWC2Components/plugins/ZoomButtons'),
            ZoomOutPlugin: require('../qwc2/QWC2Components/plugins/ZoomButtons'),
            BackgroundSwitcherPlugin: require('../qwc2/QWC2Components/plugins/BackgroundSwitcher'),
            TopBarPlugin: require('../qwc2/QWC2Components/plugins/TopBar')(SearchProviders),
            BottomBarPlugin: require('../qwc2/QWC2Components/plugins/BottomBar'),
            MeasurePlugin: require('../qwc2/QWC2Components/plugins/Measure'),
            ThemeSwitcherPlugin: require('../qwc2/QWC2Components/plugins/ThemeSwitcher'),
            LayerTreePlugin: require('../qwc2/QWC2Components/plugins/LayerTree'),
            IdentifyPlugin: require('../qwc2/QWC2Components/plugins/Identify'),
            MapTipPlugin: require('../qwc2/QWC2Components/plugins/MapTip'),
            SharePlugin: require('../qwc2/QWC2Components/plugins/Share'),
            MapCopyrightPlugin: require('../qwc2/QWC2Components/plugins/MapCopyright'),
            PrintPlugin: require('../qwc2/QWC2Components/plugins/Print'),
            HelpPlugin: require('../qwc2/QWC2Components/plugins/Help')(renderHelp),
            DxfExportPlugin: require('../qwc2/QWC2Components/plugins/DxfExport')
        },
        requires: {}
    },
    supportedLocales: {
         "it": {
             code: "it-IT",
             description: "Italiano"
         },
         "en": {
            code: "en-US",
            description: "English"
         },
         "fr": {
           code: "fr-FR",
           description: "Français"
       },
       "de": {
           code: "de-DE",
           description: "Deutsch"
       }
   }
};
