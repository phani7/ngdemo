importScripts('ngsw-worker.js');

self.addEventListener('install', (event) => {
    console.log('service worker installed!!');
    self.skipWaiting();
})

self.addEventListener('activate', (event) => {
    console.log('service worker activated!!');
})

self.addEventListener('fetch', (event) => {
    console.log('service worker fetch!!');
})

self.addEventListener('notificationclick', (event) => {
    console.log('sw notification click!!');
})

self.addEventListener('notificationclose', (event) => {
    console.log('sw notification close!!');
})

self.addEventListener('push', (event) => {
    console.log('sw push!!');
})