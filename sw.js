const CACHE = 'absensi-v5';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.webmanifest',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

// App shell cache-first; CDN (Tailwind, Font Awesome, Firebase, fonts) default network biar selalu fresh.
self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    if (url.origin !== location.origin) return;
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
            return res;
        }))
    );
});