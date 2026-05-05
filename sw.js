const CACHE_NAME = 'carbon-v1';
const urls = ['/Ac-/','/Ac-/index.html','/Ac-/manifest.json','/Ac-/icon-192.png','/Ac-/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urls))) });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))) });
