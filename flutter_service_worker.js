'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "879d7fdb14cdf833e1a9898ac616b91c",
"version.json": "d54a6c6fc655489c9268139f39aec489",
"index.html": "b0489cde4e0f206a1fd50bf21bf2ccca",
"/": "b0489cde4e0f206a1fd50bf21bf2ccca",
"main.dart.js": "7e238fd0198784a95f93bdaa577d689c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "1f4b925a9590b9bcf103f35318f5f162",
"icons/Icon-192.png": "ca8541707576ca3f138d6af266868b5d",
"icons/Icon-maskable-192.png": "ca8541707576ca3f138d6af266868b5d",
"icons/Icon-maskable-512.png": "792cde1ec230710cbdc22d66ed31f334",
"icons/Icon-512.png": "792cde1ec230710cbdc22d66ed31f334",
"manifest.json": "486f73c5e3d4ab339794ea558a873733",
".git/config": "fccb3a43fd20401c728b3639ff7b5249",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/57/60013d7953a311f630b8640704b589e95ee63a": "656464652665a37cf529fd4c2ffb696a",
".git/objects/9b/81d2f6f850431c2c13abb3e700e8ccedaacc89": "8caee497bfe651be41622e348cec27a6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/05/55604d1317bad80cdb4773cf528d00abc5bc60": "de5594baa78c4d5cafa9aef7d7356779",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/pack/pack-dc3706c8c5422516d719ecf88602c1a92fc5fd9d.pack": "7cdbe5479030959bd8a74a6d6159e6fa",
".git/objects/pack/pack-dc3706c8c5422516d719ecf88602c1a92fc5fd9d.idx": "a0a905d677326003537bf1c486d6d6c0",
".git/objects/pack/pack-dc3706c8c5422516d719ecf88602c1a92fc5fd9d.rev": "f856947a22314077f345029652b01d34",
".git/objects/1f/30d21319701066c0113febaaffd04a083ac82f": "78e5fab47cab4d01f3fc1fac3355fa59",
".git/objects/17/2b884a579b58466f6f1ed2e6851d734b8616fb": "48efbea0f9e4b4ca6a1398c1689bd970",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/81/9b741552a48c836cd7cebf2957270eb2406835": "33fbf1b7aa455e4ecbd4cf177d177b83",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/2f/f4c25d9ce4805ed4958b851943346e452b547c": "40d8849409db3ca12f183a858cc68318",
".git/objects/43/325dc8952a4cdba2263bd6ecd4fdfdeb9fe39a": "3e03d3eb81216cdb31e5f2e9438bea3a",
".git/objects/07/dad4b2f57e033a7f21681425dea529c3f5024d": "9bd1c1b39172bd4c6bd62eaf8a6b725e",
".git/objects/6e/39136d7fc0b508da9d5fadec0df6e0cf17f2ff": "24dbdc78a8ac3a39fbe5b015d5a93423",
".git/objects/36/b50a56377ea6fa578e663435110fd0892aac8f": "8989aa918f6a6547f15948b889705e15",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/30/fdf63d973821ad69afea663378b2f6b6387d15": "952de7ee296d7231470de145382c409b",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/d3/05ac9cf5229c51c4398ba911463f6b32fbadbf": "29b5d9a6b0924bcfb515c6fbf56acc5b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/3c59ca2fa15555ee54ec4594138b538187a81f": "708e8989b981e7d8f63b2c2e06a9ffc5",
".git/objects/d5/52fcea0f048619d0e547be7cc925ff32ac4fce": "c045461afce87b34524fb463e9ea88d8",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/ef/86c8e94e70d5e65057401afc077daf7b16a470": "69e27916311f7dc55cf255e59d9eea1c",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/71/fb5faa17f6a85c385265c2788b6a9bc8960737": "5ba38f30ec2ca3b5cf8e63306d77ea5f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/14/49a24dd4bc08be22041f245da29ecfefd8ca5d": "a3ea3866207a066e1dfe11c4623579a1",
".git/objects/14/a98c67b9f9866f661d29e9c9140e2903733848": "a6d045f941218f4de0cbea010bdad7b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b59177b841ecbb639248d2f8fbcf90be",
".git/logs/refs/heads/main": "b59177b841ecbb639248d2f8fbcf90be",
".git/logs/refs/remotes/origin/HEAD": "86418246e354ccb7d54ebaa8b52c74dd",
".git/logs/refs/remotes/origin/main": "e93c59df07ea2a81848503232e60f145",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cbe2d2149b426e51799b22e64237545e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "cbe2d2149b426e51799b22e64237545e",
".git/index": "776b86cd24119868d837ce6be2218a06",
".git/packed-refs": "b030b97c59f0cebc8388f90e6f92cd4e",
".git/COMMIT_EDITMSG": "9bb6342b544ae73543008edc53525cb8",
"assets/AssetManifest.json": "af8dca085cae096701e4b65af28d2d47",
"assets/NOTICES": "9dae3bfb531b806299aff83e1482b00d",
"assets/FontManifest.json": "d7266237a95d15602862054c788dea8b",
"assets/AssetManifest.bin.json": "8672780b335da25f4e078763648a548e",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3ba055c9984565fb2252e888c90237ea",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_phosphor_icons/fonts/Phosphor.ttf": "ae434202ddb6730654adbf02f8f3bc5d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b3e653e65ea488ffc951ab587b38fcb8",
"assets/fonts/MaterialIcons-Regular.otf": "b6b9fb2b0ced514698bdd376aa2cc70a",
"assets/assets/images/background/background_app.png": "baa3e5e8687dc087bcf2d25571690e1f",
"assets/assets/images/e-wallet/ovo_logo.png": "1a62aa1c175a7bb8ce2aaeb1aef6b2c4",
"assets/assets/images/e-wallet/linkaja_logo.png": "4d80c5835551bb0e0a0cf0b0fbaa9503",
"assets/assets/images/e-wallet/qris_logo.png": "cd1b3535ab5c0248b0cd38f1ea11b397",
"assets/assets/images/e-wallet/shopeepay_logo.png": "ce0617bd49956eb1e3065f604cdc2a59",
"assets/assets/images/e-wallet/dana_logo.jpeg": "dc4b1fd98721b8dca283668f7f585920",
"assets/assets/images/logo/logo_app.png": "21589b55a07797daf04fab0e230d91bc",
"assets/assets/images/logo/setara_load.gif": "2113d451418662e34ceb89174923c9c9",
"assets/assets/images/logo/icon_app.png": "8993b082f7013ec8ed570c6f9c2b6846",
"assets/assets/images/logo/logo_app_outline.png": "015a3d8691d0e9a69337722982ac10b8",
"assets/assets/images/vector/nft_comming_soon.gif": "e03711de5fbe62863777023a53260b79",
"assets/assets/images/vector/check_anim.gif": "2d8442209861bdd630e780fe9f07c749",
"assets/assets/images/vector/closed.png": "f12359122640a0bf86162f34a0148bb4",
"assets/assets/images/vector/nft.png": "b390c5b0fbcb29631e8d468bbae17ce8",
"assets/assets/images/vector/bg_faq.png": "bd2744d88ebcbe7101d3ea50288eedcc",
"assets/assets/images/vector/adult_image.png": "948c29ae2b04fcfcca387b5e5aa9c896",
"assets/assets/images/vector/bg_maintenance.png": "e1774d8dac28bd9ed7cf68181538a9f4",
"assets/assets/images/vector/sold_out.png": "e2c419ede3bc5dcf95b06b52db9d01d9",
"assets/assets/images/vector/bg_login.png": "8819d8d531f29ace0f6a085a385d0081",
"assets/assets/images/vector/no_data.png": "adc81dc476905a850be6e58b4ae1ad53",
"assets/assets/images/vector/bg_payment.gif": "bfb087f54479a965882475226daaf3ff",
"assets/assets/audio/event_channel.mp3": "9a2c6a602024f50f53644a106fae4632",
"assets/assets/audio/transaction_channel.mp3": "f728c96a3c453aeb61bb8b4b83d16338",
"assets/assets/audio/info_channel.mp3": "3cc4bba66e6b9360006fec55c6f63746",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
