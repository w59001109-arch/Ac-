
const CACHE_VER = 'v5nocc';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  // 完全不 cache，全部走網路
  e.respondWith(fetch(e.request));
});
