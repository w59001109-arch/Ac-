const CACHE_VER = 'v3';
const urls = ['/Ac-/index.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_VER).then(c => c.addAll(urls))) });
self.addEventListener('fetch', e => {
  if (e.request.url.includes('index.html')) {
    e.respondWith(fetch(e.request).then(r => { caches.open(CACHE_VER).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(v=>v!==CACHE_VER).map(v=>caches.delete(v))))) });
