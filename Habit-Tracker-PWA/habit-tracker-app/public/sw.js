import { precacheAndRoute } from 'workbox-precaching';

self.skipWaiting();
self.clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);
