// ═══════════════════════════════════════════════════════
// ALMANACH DU JOUR — Service Worker v1.11
//
// Stratégie :
//   • Installation  → mise en cache de tous les assets
//   • Navigation    → Cache First (fonctionne hors-ligne)
//   • Mise à jour   → détection silencieuse + notification
//
// Le cache est versionné : changer CACHE_VERSION force
// la mise à jour chez tous les utilisateurs.
// ═══════════════════════════════════════════════════════

const CACHE_VERSION  = "almanach-v1.1";
const STATIC_CACHE   = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE  = `${CACHE_VERSION}-dynamic`;

// Assets à mettre en cache à l'installation
const STATIC_ASSETS = [
    "./",
    "./index.html",
    "./almanach.js",
    "./style.css",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    // Polices Google (si disponibles en ligne au premier chargement)
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap",
];

// ── INSTALLATION ────────────────────────────────────────
self.addEventListener("install", event => {
    console.log(`[SW] Installation ${CACHE_VERSION}`);

    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                // On met en cache les assets critiques
                // Les polices Google peuvent échouer hors-ligne — on l'ignore
                return Promise.allSettled(
                    STATIC_ASSETS.map(url =>
                        cache.add(url).catch(err =>
                            console.warn(`[SW] Cache miss pour ${url}:`, err)
                        )
                    )
                );
            })
            .then(() => {
                console.log("[SW] Assets mis en cache");
                // Activation immédiate sans attendre la fermeture des onglets
                return self.skipWaiting();
            })
    );
});

// ── ACTIVATION ──────────────────────────────────────────
self.addEventListener("activate", event => {
    console.log(`[SW] Activation ${CACHE_VERSION}`);

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name =>
                            name.startsWith("almanach-") &&
                            name !== STATIC_CACHE &&
                            name !== DYNAMIC_CACHE
                        )
                        .map(name => {
                            console.log(`[SW] Suppression ancien cache : ${name}`);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

// ── INTERCEPTION DES REQUÊTES ───────────────────────────
self.addEventListener("fetch", event => {
    const { request } = event;
    const url = new URL(request.url);

    // On ne gère que les requêtes HTTP/HTTPS
    if (!request.url.startsWith("http")) return;

    // Stratégie pour les assets statiques de l'app :
    // Cache First → réseau si absent → cache dynamique
    if (isStaticAsset(url)) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Pour les polices Google : Cache First (très stable)
    if (url.hostname === "fonts.googleapis.com" ||
        url.hostname === "fonts.gstatic.com") {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Pour tout le reste : Network First avec fallback cache
    event.respondWith(networkFirst(request));
});

// ── STRATÉGIES ──────────────────────────────────────────

/**
 * Cache First : sert depuis le cache, sinon réseau.
 * Idéal pour les assets qui ne changent pas souvent.
 */
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        // Hors-ligne et pas en cache : page de fallback
        return offlineFallback(request);
    }
}

/**
 * Network First : essaie le réseau d'abord.
 * Si hors-ligne, sert depuis le cache.
 */
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await caches.match(request);
        if (cached) return cached;
        return offlineFallback(request);
    }
}

/**
 * Fallback hors-ligne : retourne index.html si disponible.
 */
async function offlineFallback(request) {
    // Pour les navigations, servir index.html depuis le cache
    if (request.mode === "navigate") {
        const cached = await caches.match("./index.html");
        if (cached) return cached;
    }

    // Fallback générique
    return new Response(
        `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
         <title>Almanach — Hors-ligne</title>
         <style>body{font-family:Georgia,serif;background:#1a1f2e;color:#f7f2e8;
         display:flex;align-items:center;justify-content:center;min-height:100vh;
         text-align:center;padding:2rem;}h1{color:#c9a84c;font-size:2rem;}
         p{opacity:.7;max-width:400px;}</style></head>
         <body><div>
           <h1>✦ Almanach du Jour</h1>
           <p>Vous êtes hors-ligne. L'almanach fonctionne entièrement en local —
           rechargez la page, les calculs astronomiques ne nécessitent aucune connexion.</p>
           <p style="margin-top:1.5rem"><a href="/" style="color:#c9a84c">↩ Retour à l'almanach</a></p>
         </div></body></html>`,
        {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" }
        }
    );
}

// ── HELPERS ─────────────────────────────────────────────

function isStaticAsset(url) {
    return (
        url.pathname.endsWith(".js")   ||
        url.pathname.endsWith(".css")  ||
        url.pathname.endsWith(".html") ||
        url.pathname.endsWith(".json") ||
        url.pathname.endsWith(".png")  ||
        url.pathname.endsWith(".svg")  ||
        url.pathname.endsWith(".ico")  ||
        url.pathname === "/" ||
        url.pathname === ""
    );
}

// ── MESSAGES (depuis la page) ───────────────────────────
self.addEventListener("message", event => {
    if (event.data?.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
    if (event.data?.type === "GET_VERSION") {
        event.ports[0].postMessage({ version: CACHE_VERSION });
    }
});