//importScripts('/cache-polyfill.js');
//self.addEventListener('install', function(e) {
    //e.waitUntil(caches.open('mallzones').then(function(cache) {
      //return cache.addAll(['/', '/index.css', '/index.js', '/js/jquery.min.js', '/js/touch.min.js', '/js/finger.min.js']);
    //}));
//});
self.addEventListener('fetch', function(event) {
    //console.log(event.request.url);
    event.respondWith(caches.match(event.request).then(function(response) { return response || fetch(event.request); }));
});


(global => {
  'use strict';
  importScripts('/js/sw-toolbox/sw-toolbox.js');
  //toolbox.router.get('/', global.toolbox.fastest);
  //toolbox.router.get('/assets/(.*)', global.toolbox.fastest);
  //toolbox.router.get('/js/(.*)', global.toolbox.fastest);
  //toolbox.router.get('/css/(.*)', global.toolbox.fastest);
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
})(self)
