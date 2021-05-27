// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"22mA1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "2b38bdf0da5b88b4cdd7a19cf5dd1943";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"1hsgO":[function(require,module,exports) {
//framework for setting up frames
//reference for framework: 
//github riversun link
const jsFrame = new JSFrame();

//references for checking if windows exist so you can't have more than one window of each type open at once
//Task List frame check references
var tlFrame;
var tlWindowExists;

//Covey Quad refs
var cqFrame;
var cqWindowExists;

//Stopwatch refs
var swFrame;
var swWindowExists;

//Pomodoro refs
var pFrame;
var pWindowExists;

//Stream Selection refs
var sFrame;
var sWindowExists;

//Music Controller refs
var cFrame;
var cWindowExists;

//Reading List folder refs
var fFrame;
var fWindowExists;

//Reading List links refs
var lFrame;
var lWindowsExists;


//Task List frame open via Task List Button

function taskListFrameFunc(){
    {
        //making resize area larger
        // const appearance1 = jsFrame.createFrameAppearance();

        // appearance1.resizeAreaVisible = true;

        // //The offset distance between the resize area and the window border.
        // appearance1.resizeAreaOffset = -20;// default is -10

        // //Thickness of the horizontal resizing area
        // appearance1.resizeAreaWidth = 40;// default is 20

        // //Thickness of the vertical resize area
        // appearance1.resizeAreaHeight = 40;// default is 20
        const taskListFrame = jsFrame.create({
            name: `Task List`,
            title: `Task List`,
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden',
                html: '<button id="bt_open" type="button" class="btn btn-primary" style="font-size:16px;width:200px;height:100px;color:black;">Add Task</button>'
            },
            // html: '<div id="message" style="padding:10px;font-size:16px;color:darkgray;">You can adjust the sensitivity (fine-tune the size of the resizing area) when resizing with the mouse or touch.</div>',
            resizable: true,
            // appearance: appearance1
        }).show();
        taskListFrame.setPosition(50, 100);

    }
}

document.querySelector('#task').addEventListener('click', (e) => {
    const tl = 'Task List';
    tlFrame = jsFrame.getWindowByName(tl);
    tlWindowExists = jsFrame.containsWindowName(tl);
    
    if (!tlWindowExists){
        taskListFrameFunc();
    } else {
        console.log('Already Exists');
    }
    
});

//Covey Quadrant frame opened by Covey Quadrant Button

function coveyQuadFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const coveyQuadFrame = jsFrame.create({
            name: 'Covey Quadrants',
            title: 'Covey Quadrants',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        coveyQuadFrame.setPosition(50, 100);
    
    }
}

document.querySelector('#covey').addEventListener('click', (e) => {
    const cq = 'Covey Quadrants';
    cqFrame = jsFrame.getWindowByName(cq);
    cqWindowExists = jsFrame.containsWindowName(cq);
        
    if (!cqWindowExists){
        coveyQuadFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});
    
//Stopwatch frame opened by Stopwatch Button

function stopWatchFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;
        const stopWatchFrame = jsFrame.create({
            name: 'Stopwatch',
            title: 'Stopwatch',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        stopWatchFrame.setPosition(100, 200);
    }

}

document.querySelector('#stopwatch').addEventListener('click', (e) => {
    const sw = 'Stopwatch';
    swFrame = jsFrame.getWindowByName(sw);
    swWindowExists = jsFrame.containsWindowName(sw);
        
    if (!swWindowExists){
        stopWatchFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Pomodoro triggered by Pomodoro Button

function pomodoroFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const pomodoroFrame = jsFrame.create({
            name: 'Pomodoro Timer',
            title: 'Pomodoro Timer',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        pomodoroFrame.setPosition(600, 200);
        
    }

}

document.querySelector('#pomodoro').addEventListener('click', (e) => {
    const p = 'Pomodoro Timer';
    pFrame = jsFrame.getWindowByName(p);
    pWindowExists = jsFrame.containsWindowName(p);
        
    if (!pWindowExists){
        pomodoroFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Music Stream Selector triggered by Stream Button

function musicSelectFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const musicStreams = jsFrame.create({
            name: 'Lofi Streams',
            title: 'Lofi Streams',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        musicStreams.setPosition(100, 200);
    }
}

document.querySelector('#stream').addEventListener('click', (e) => {
    const s = 'Lofi Streams';
    sFrame = jsFrame.getWindowByName(s);
    sWindowExists = jsFrame.containsWindowName(s);
        
    if (!sWindowExists){
        musicSelectFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

function musicControlFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const musicPlayer = jsFrame.create({
            name: 'Music Controller',
            title: 'Music Controller',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
        resizable: true,
        // appearance: appearance1
        }).show();
        musicPlayer.setPosition(600, 200);
    }

}

document.querySelector('#control').addEventListener('click', (e) => {
    const c = 'Music Controller';
    cFrame = jsFrame.getWindowByName(c);
    cWindowExists = jsFrame.containsWindowName(c);
        
    if (!cWindowExists){
        musicControlFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});

//Reading List Folders
function folderFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const folders = jsFrame.create({
            name: 'Folders',
            title: 'Folders',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
        folders.setPosition(100, 200);
    }
}

document.querySelector('#folder').addEventListener('click', (e) => {
    const f = 'Folders';
    fFrame = jsFrame.getWindowByName(f);
    fWindowExists = jsFrame.containsWindowName(f);
        
    if (!fWindowExists){
        folderFrameFunc();
    } else {
        console.log('Already Exists');
    }
        
});


//Reading List Folders
function linkFrameFunc(){
    {
        // const appearance1 = jsFrame.createFrameAppearance();
        // appearance1.resizeAreaOffset = -20;
        // appearance1.resizeAreaWidth = 40;
        // appearance1.resizeAreaHeight = 40;

        const readLinks = jsFrame.create({
            name: 'Links',
            title: 'Links',
            left: 20, top: 140, width: 400, height: 320, minWidth: 200, minHeight: 110,
            style: {
                backgroundColor: 'rgba(255,255,255,1.0)',
                overflow: 'hidden'
            },
            resizable: true,
            // appearance: appearance1
        }).show();
            readLinks.setPosition(600, 200);
        }

    }

    document.querySelector('#link').addEventListener('click', (e) => {
        const l = 'Links';
        lFrame = jsFrame.getWindowByName(l);
        lWindowExists = jsFrame.containsWindowName(l);
            
        if (!fWindowExists){
            linkFrameFunc();
        } else {
            console.log('Already Exists');
        }
            
    });
    

},{}]},["22mA1","1hsgO"], "1hsgO", "parcelRequirec526")

//# sourceMappingURL=index.f5dd1943.js.map
