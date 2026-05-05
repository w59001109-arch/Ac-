const CACHE_NAME = 'carbon-v2';
const urls = ['/Ac-/','/Ac-/index.html','/Ac-/manifest.json','/Ac-/icon-192.png','/Ac-/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urls))) });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))) });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(v=>v!=='carbon-v2').map(v=>caches.delete(v))))) });
