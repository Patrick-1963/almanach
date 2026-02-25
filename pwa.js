// ═══════════════════════════════════════════════════════
// ALMANACH DU JOUR — PWA Manager (pwa.js)
//
// Gère :
//   1. Enregistrement du Service Worker
//   2. Prompt d'installation sur l'écran d'accueil
//   3. Bannière de mise à jour disponible
//   4. Indicateur de statut réseau (hors-ligne)
// ═══════════════════════════════════════════════════════

(function () {
    "use strict";

    // ── 1. SERVICE WORKER ──────────────────────────────
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", async () => {
            try {
                const reg = await navigator.serviceWorker.register("./sw.js", {
                    scope: "./"
                });
                console.log("[PWA] Service Worker enregistré :", reg.scope);

                // Détection d'une mise à jour disponible
                reg.addEventListener("updatefound", () => {
                    const newWorker = reg.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener("statechange", () => {
                        if (newWorker.state === "installed" &&
                            navigator.serviceWorker.controller) {
                            // Nouveau SW installé, l'ancien est encore actif
                            showUpdateBanner(newWorker);
                        }
                    });
                });

                // Vérifier les mises à jour toutes les 60 minutes
                setInterval(() => reg.update(), 60 * 60 * 1000);

            } catch (err) {
                console.error("[PWA] Échec enregistrement SW :", err);
            }
        });

        // Rechargement après mise à jour du SW
        let refreshing = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload();
            }
        });
    }

    // ── 2. BANNIÈRE DE MISE À JOUR ─────────────────────
    function showUpdateBanner(newWorker) {
        const banner = document.getElementById("pwa-update-banner");
        const btn    = document.getElementById("pwa-update-btn");
        const close  = document.getElementById("pwa-update-close");
        if (!banner) return;

        banner.hidden = false;

        btn.addEventListener("click", () => {
            newWorker.postMessage({ type: "SKIP_WAITING" });
            banner.hidden = true;
        });

        close.addEventListener("click", () => {
            banner.hidden = true;
        });
    }

    // ── 3. PROMPT D'INSTALLATION ───────────────────────
    let deferredPrompt = null;

    window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        deferredPrompt = e;

        // Attendre un peu avant de montrer la bannière (UX)
        setTimeout(() => showInstallBanner(), 3000);
    });

    function showInstallBanner() {
        // Ne pas montrer si déjà installé
        if (window.matchMedia("(display-mode: standalone)").matches) return;
        if (sessionStorage.getItem("pwa-install-dismissed")) return;

        const banner = document.getElementById("pwa-install-banner");
        const btn    = document.getElementById("pwa-install-btn");
        const close  = document.getElementById("pwa-install-close");
        if (!banner) return;

        banner.hidden = false;

        btn.addEventListener("click", async () => {
            banner.hidden = true;
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log("[PWA] Installation :", outcome);
            deferredPrompt = null;
        });

        close.addEventListener("click", () => {
            banner.hidden = true;
            sessionStorage.setItem("pwa-install-dismissed", "1");
        });
    }

    // Confirmation d'installation réussie
    window.addEventListener("appinstalled", () => {
        console.log("[PWA] Application installée avec succès !");
        deferredPrompt = null;
        const banner = document.getElementById("pwa-install-banner");
        if (banner) banner.hidden = true;
    });

    // ── 4. INDICATEUR HORS-LIGNE ───────────────────────
    function updateOnlineStatus() {
        const offline = !navigator.onLine;
        document.body.classList.toggle("offline", offline);

        // Injecter/retirer l'indicateur hors-ligne dans le header
        let indicator = document.getElementById("offline-indicator");

        if (offline && !indicator) {
            indicator = document.createElement("div");
            indicator.id = "offline-indicator";
            indicator.className = "offline-indicator";
            indicator.innerHTML = "📡 Hors-ligne — Les calculs fonctionnent normalement";
            document.querySelector(".site-header")?.appendChild(indicator);
        } else if (!offline && indicator) {
            indicator.remove();
        }
    }

    window.addEventListener("online",  updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Vérification initiale
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateOnlineStatus);
    } else {
        updateOnlineStatus();
    }

})();