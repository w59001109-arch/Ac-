const CACHE_VER = 'v6-nocache';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // 清掉所有舊的 cache
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // 完全不 cache，全部走網路
  e.respondWith(fetch(e.request));
});

/* cache-bump tailscale-https 2026-05-08T14:48:26.769605 */

/* cache-bump v62 endpoint migration */
