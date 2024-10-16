'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "08f91d2da9e45e48ee5ae43909a476ed",
"version.json": "225b111c61236d998504aa8de03fd11f",
"index.html": "653492d48761202a666459e74071fdcd",
"/": "653492d48761202a666459e74071fdcd",
"main.dart.js": "77b2693cfd56ad4dedb3a369ef66ce55",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "8932e5bb4909814347faa12367384812",
"icons/Icon-192.png": "27ab335722372c385484229aaa6ddb89",
"icons/Icon-maskable-192.png": "27ab335722372c385484229aaa6ddb89",
"icons/Icon-maskable-512.png": "47c2a58ddb2ca1f5a959843b55780cdf",
"icons/Icon-512.png": "47c2a58ddb2ca1f5a959843b55780cdf",
"manifest.json": "e26263aeac2312530ec834ee6ba7af91",
".git/config": "b815f906af837b0d027c1864ce4b27f0",
".git/objects/0c/2bcba94abf310c9ff61554ee123f94d3d5d61a": "253a5d02906feec147340ba84d2f93e8",
".git/objects/9e/61b037ecaa7ea5d2c0946a1f505ee43fec87f0": "af6cc18ad28231d68a668a78b6e3e999",
".git/objects/69/58cc948d474a7651679a44896efebaa9923cb9": "ac9244e8252ab7cfd9aa434b4b5a68b4",
".git/objects/d9/aa55e9baa533d4c6ae5f446c409d1b16340f1e": "553b70df5f8fcd27c6eb5fef5ef9dc5e",
".git/objects/e5/08516003c1a350a0f899b19a2873938a918540": "67eda0a279d892f9d928ae4bb0360717",
".git/objects/e3/cd5f188bc8a57c84422d4a8404da2a904084f4": "125dbad987ddd4b5d2cdb39881dcc484",
".git/objects/pack/pack-775e8250dfc0428f92bec26b4c04af2c0698d9fe.pack": "a3cd0a45b6cc0409034fe846419b8265",
".git/objects/pack/pack-775e8250dfc0428f92bec26b4c04af2c0698d9fe.idx": "d2fee2d42d0691e78b2cd735dd0eeba0",
".git/objects/pack/pack-775e8250dfc0428f92bec26b4c04af2c0698d9fe.rev": "78fef9e7ab51f3417d7307e16b543ab7",
".git/objects/16/079a30f38c30aff6b2f0616c315eab23e16179": "9e079bd8c79749cec3fd89f9bb8c8612",
".git/objects/1a/a534b9c409ffc426ac337e950eb42128c5d27d": "58c6157bb8a103bb2c8e46fd89e7e3c2",
".git/objects/17/d17904bcbf2e6b3c8703cef58e2f6474c30074": "a5be3094c9cc5e26e329802dbd0715f7",
".git/objects/7e/df0f514c3116ac391bf37159d67510b17664bd": "779be97d28ea636e894537d1dd78b823",
".git/objects/26/a02d30f72e5e2812c3a64dffc7b9d5987b7740": "d4e99e9b0f0a72c39969d0caffa87ee6",
".git/objects/44/89ef8d894996fecac372225e48658e4ee7b195": "d11be33b49667ee6e3d0139ef6af9dda",
".git/objects/98/1187b81aefe02dbb38263baddc4aa72b54c887": "f577f67b703f3efab6e7862aad9a4c6a",
".git/objects/30/ce4381547c6946c0fddd6142cb5714ba88d4d9": "8280594995ba013f8695651920f52ecd",
".git/objects/6d/67f837c8aad3df5e58f806b454b2925a8fcccf": "4a0670db4fb2ea05e8ec35a4279baad0",
".git/objects/bf/825ccbfacf74a37d9cb0c8d06224867775e79d": "50d9d2f6fa75d7d92dff215fc77b65e5",
".git/objects/dc/8f5db0502ad63b43fdad3fed1d511c71e530ab": "7ff81107ccd2ca946b00338e6e7277ec",
".git/objects/d2/8e1413200603743aa578edd9a4e813bfee0766": "1f97f4b2d111da767372995fae4f6dea",
".git/objects/cb/c73067ccd95a8380dc91fe13ec477f2b9a9189": "2a84a58a91334c0f6ced52a327d0bd87",
".git/objects/f8/7a728088c44b84dc9174be1a7ab14897a17488": "c1c606b59b71c94cbdf2a7d66db21426",
".git/objects/83/dddf3bf51204e9a65689998125bb79da50f5bb": "bc16e137b67b10acd27a88847867ff5d",
".git/objects/8d/1de5252d122202704028e7cde4facf394075c1": "d0976ab0ac10f0e6541809982884d1e4",
".git/objects/12/f51fc05e2fb9c6fb0699f8326bd845b7619ba2": "0987fe02232f54fdcf03f0c6af607270",
".git/objects/85/63e941530b525d2a3c9f1f8794e9f0563c03e2": "7f5dc7d0699de32268311dd0f7c11828",
".git/objects/22/260b1b73c9a6c2cda8495df642d1983fb79f5e": "499b55887bc661cf426defc0a9694a7d",
".git/objects/25/be8f3007ebaaa47ec0f59b13130b93db2e39f3": "9ed70e45230ecc306d493ff642b67874",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ebc5f2149a18e41c2ad31cda88da31b",
".git/logs/refs/heads/main": "7ebc5f2149a18e41c2ad31cda88da31b",
".git/logs/refs/remotes/origin/HEAD": "c7323c879f2b194851d58c91b773059b",
".git/logs/refs/remotes/origin/main": "dd89e581fb8bd15cb4ddaca6dd3e64bc",
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
".git/refs/heads/main": "ad3f8d0ba44cc2cef2828dc99169ca4c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ad3f8d0ba44cc2cef2828dc99169ca4c",
".git/index": "08719967e72801b11c3181be8818ead6",
".git/packed-refs": "6ee359be6a70f2825940a30d2f64fe9e",
".git/COMMIT_EDITMSG": "1abd12a0613c543ad29d036e06af8db7",
"assets/AssetManifest.json": "07d2528abf0a3cb231d78cd7e81b532a",
"assets/NOTICES": "d67327afcc5d118a03beaaad35f671ee",
"assets/FontManifest.json": "d7266237a95d15602862054c788dea8b",
"assets/AssetManifest.bin.json": "dd8403427aa6a9848c40ac617bc1194a",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3ba055c9984565fb2252e888c90237ea",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_phosphor_icons/fonts/Phosphor.ttf": "ae434202ddb6730654adbf02f8f3bc5d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f84edf62ace8c04e917bf72ef5c6a61a",
"assets/fonts/MaterialIcons-Regular.otf": "2b18d7c54d515f3504aef4e09a879fa0",
"assets/assets/images/background/back_app.png": "baa3e5e8687dc087bcf2d25571690e1f",
"assets/assets/images/background/back_event.jpg": "6c5031aa41f4c17b8754d0e5e65ba042",
"assets/assets/images/e-wallet/ovo_logo.png": "1a62aa1c175a7bb8ce2aaeb1aef6b2c4",
"assets/assets/images/e-wallet/linkaja_logo.png": "4d80c5835551bb0e0a0cf0b0fbaa9503",
"assets/assets/images/e-wallet/qris_logo.png": "cd1b3535ab5c0248b0cd38f1ea11b397",
"assets/assets/images/e-wallet/shopeepay_logo.png": "ce0617bd49956eb1e3065f604cdc2a59",
"assets/assets/images/e-wallet/dana_logo.jpeg": "dc4b1fd98721b8dca283668f7f585920",
"assets/assets/images/logo/logo_app.png": "5ffcce16df44ba5c9c57f6011d7e7a44",
"assets/assets/images/logo/setara_load.gif": "b80f0773eb0eee7101dcccdaabb27ceb",
"assets/assets/images/logo/icon_app.png": "5ffcce16df44ba5c9c57f6011d7e7a44",
"assets/assets/images/logo/logo_app_outline.png": "5ffcce16df44ba5c9c57f6011d7e7a44",
"assets/assets/images/vector/vect_sold_out.png": "e2c419ede3bc5dcf95b06b52db9d01d9",
"assets/assets/images/vector/vect_maintenance.png": "e1774d8dac28bd9ed7cf68181538a9f4",
"assets/assets/images/vector/vect_faq.png": "bd2744d88ebcbe7101d3ea50288eedcc",
"assets/assets/images/vector/vect_adult.png": "948c29ae2b04fcfcca387b5e5aa9c896",
"assets/assets/images/vector/vect_login.png": "8819d8d531f29ace0f6a085a385d0081",
"assets/assets/images/vector/vect_nft.png": "b390c5b0fbcb29631e8d468bbae17ce8",
"assets/assets/images/vector/vect_empty.png": "adc81dc476905a850be6e58b4ae1ad53",
"assets/assets/images/vector/vect_closed.png": "f12359122640a0bf86162f34a0148bb4",
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
