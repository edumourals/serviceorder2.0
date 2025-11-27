
const CACHE_NAME = 'service-os-v16';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Força o SW a ativar imediatamente
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Assume o controle da página imediatamente
  );
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  // Em ambiente de desenvolvimento/preview, priorizamos a rede para ver mudanças
  // Mas mantemos a estratégia de cache para arquivos estáticos
  const url = new URL(event.request.url);
  
  // Se for requisição de API ou Supabase, nunca cacheia
  if (url.hostname.includes('supabase')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
