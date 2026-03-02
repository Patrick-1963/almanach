// ═══════════════════════════════════════════════════════
// ALMANACH DU JOUR — PWA Manager v2.2
// 25/02/2026 V1.6 Amélioration des recettes.
// 01/03/2026 v1.7 Ajout dune partie Vins (catalogue_vins.html + vins.js). 01/03/2026
// 02/03/2026 v1.9 Correction d'un bug d'affichage des recettes sur smartphone.
// 02/03/2026 v2.0 Correction d'un bug d'affichage des fiches vins sur smartphone.
// 02/03/2026 v2.1 Correction d'un bug d'affichage des fiches vins sur smartphone.
// 02/03/2026 v2.2 affiche splash screen personnalisé au lancement depuis l'icône (iOS 15+ et Android 12+).
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
                console.log("[PWA] SW enregistré :", reg.scope);

                reg.addEventListener("updatefound", () => {
                    const newWorker = reg.installing;
                    if (!newWorker) return;
                    newWorker.addEventListener("statechange", () => {
                        if (newWorker.state === "installed" &&
                            navigator.serviceWorker.controller) {
                            showUpdateBanner(newWorker);
                        }
                    });
                });

                setInterval(() => reg.update(), 60 * 60 * 1000);

            } catch (err) {
                console.error("[PWA] Échec SW :", err);
            }
        });

        let refreshing = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
            if (!refreshing) { refreshing = true; window.location.reload(); }
        });
    }

    // ── 2. BANNIÈRE MISE À JOUR ────────────────────────
    function showUpdateBanner(newWorker) {
        const banner = document.getElementById("pwa-update-banner");
        if (!banner) return;
        banner.hidden = false;

        // onclick remplace tout listener précédent — pas d'accumulation
        document.getElementById("pwa-update-btn").onclick = () => {
            newWorker.postMessage({ type: "SKIP_WAITING" });
            banner.hidden = true;
        };
        document.getElementById("pwa-update-close").onclick = () => {
            banner.hidden = true;
        };
    }

    // ── 3. PROMPT D'INSTALLATION ───────────────────────
    let deferredPrompt    = null;
    let installBannerShown = false;

    // Nettoyage des refus expirés (> 7 jours)
    const dismissedUntil = parseInt(localStorage.getItem("pwa-install-dismissed") || "0");
    if (dismissedUntil && Date.now() > dismissedUntil) {
        localStorage.removeItem("pwa-install-dismissed");
    }

    window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        deferredPrompt = e;

        if (installBannerShown) return;
        if (localStorage.getItem("pwa-install-dismissed")) return;
        if (window.matchMedia("(display-mode: standalone)").matches) return;

        setTimeout(showInstallBanner, 4000);
    });

    function showInstallBanner() {
        if (installBannerShown) return;
        installBannerShown = true;

        const banner = document.getElementById("pwa-install-banner");
        if (!banner) return;
        banner.hidden = false;

        document.getElementById("pwa-install-btn").onclick = async () => {
            dismissInstallBanner();
            if (!deferredPrompt) return;
            try {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log("[PWA] Installation :", outcome);
            } catch (err) {
                console.warn("[PWA] prompt() échoué :", err);
            }
            deferredPrompt = null;
        };

        document.getElementById("pwa-install-close").onclick = () => {
            dismissInstallBanner();
            // Mémoriser le refus 7 jours
            localStorage.setItem("pwa-install-dismissed",
                String(Date.now() + 7 * 24 * 3600 * 1000));
        };
    }

    function dismissInstallBanner() {
        const banner = document.getElementById("pwa-install-banner");
        if (banner) banner.hidden = true;
    }

    window.addEventListener("appinstalled", () => {
        console.log("[PWA] Installée !");
        deferredPrompt = null;
        dismissInstallBanner();
        localStorage.removeItem("pwa-install-dismissed");
    });

    // ── 4. INDICATEUR HORS-LIGNE ───────────────────────
    function updateOnlineStatus() {
        const offline = !navigator.onLine;
        document.body.classList.toggle("offline", offline);
        let indicator = document.getElementById("offline-indicator");
        if (offline && !indicator) {
            indicator = document.createElement("div");
            indicator.id        = "offline-indicator";
            indicator.className = "offline-indicator";
            indicator.textContent = "📡 Hors-ligne — Les calculs fonctionnent normalement";
            document.querySelector(".site-header")?.appendChild(indicator);
        } else if (!offline && indicator) {
            indicator.remove();
        }
    }

    window.addEventListener("online",  updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateOnlineStatus);
    } else {
        updateOnlineStatus();
    }

})();