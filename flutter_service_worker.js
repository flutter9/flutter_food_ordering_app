'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "c9d31afd75a13ea22da0c301ad6eaff5",
"/assets/LICENSE": "259dc2e608dacdf5b8f977d2498f2b45",
"/assets/AssetManifest.json": "dba71abb70ee236eb68c199b6ed065a7",
"/assets/FontManifest.json": "cdeb3da7104e2a2a75466eb40ad31f7a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"/assets/fonts/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"/assets/fonts/Montserrat-SemiBold.ttf": "bbcd5bbb5993808a92df01a5dfef77cd",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/icon-favorite.png": "c74a148f43525c2c6dd7ee148c8d3d8e",
"/assets/assets/menu-3-prato-sushi.png": "daea9f21ee6ab7fc7b0b568c3a3a1659",
"/assets/assets/resturant-1-sushi-den.png": "205a202e8732df716d54aec7382daf07",
"/assets/assets/icon-back-arrow-white.png": "2db4fa15048d2fb01d06f9eae06d0cb1",
"/assets/assets/icon-chat-notification.png": "0bf84ab8b383344615992c57913391f8",
"/assets/assets/icon-messages.png": "325608734a78cbdf5e3ebfd3186c1d76",
"/assets/assets/icon-home.png": "6d620e6c27367c5ce469490d75d1c10d",
"/assets/assets/menu-1-yoshimasa-sushi.png": "3581780293fb148fc0d8e56e7bac359f",
"/assets/assets/icon-search-white.png": "b641c87e3d6992555d8ce86c5fdcc9ab",
"/assets/assets/menu-2-yoshimasa-sushi.png": "37b13f84763b07825c6c677bc3b0bb26",
"/assets/assets/resturant-2-hatsuhana-shushi.png": "feb67b91870992387203b27966437220",
"/assets/assets/icon-back-arrow-black.png": "a6de358f6a553af40a1da3b150a73072",
"/assets/assets/icon-mentors.png": "53b8b09d0934db7490da91286c6a63d5",
"/assets/assets/icon-search-black.png": "9e8d472b13b9a6e916bc72b86549c996",
"/assets/assets/resturant-3-shushi-maki.png": "a0b85e371e191cebcd097a0b822b1618",
"/assets/assets/icon-selected-rating-star.png": "17620767781dd8e667df984f4b45f1f7",
"/assets/assets/icon-unselected-rating-star.png": "4e03d60976a922834132ba85ba4c6052",
"/assets/assets/icon-settings.png": "d629434df97209a9daa6539f71b13581"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
