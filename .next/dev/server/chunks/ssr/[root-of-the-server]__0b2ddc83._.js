module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POPUP_MESSAGES",
    ()=>POPUP_MESSAGES,
    "POPUP_TYPES",
    ()=>POPUP_TYPES,
    "WindowsPopup",
    ()=>WindowsPopup,
    "default",
    ()=>__TURBOPACK__default__export__,
    "usePopupManager",
    ()=>usePopupManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const POPUP_TYPES = {
    UPDATE: {
        title: "Windows Update",
        icon: "🔄",
        color: "#0078d4",
        urgent: true
    },
    SECURITY: {
        title: "Windows Security",
        icon: "🛡️",
        color: "#d13438",
        urgent: true
    },
    EDGE: {
        title: "Microsoft Edge",
        icon: "🌐",
        color: "#0078d4",
        urgent: false
    },
    OFFICE: {
        title: "Microsoft Office",
        icon: "📄",
        color: "#d24726",
        urgent: false
    },
    ONEDRIVE: {
        title: "OneDrive",
        icon: "☁️",
        color: "#0078d4",
        urgent: false
    },
    STORE: {
        title: "Microsoft Store",
        icon: "🛒",
        color: "#0078d4",
        urgent: false
    },
    CORTANA: {
        title: "Cortana",
        icon: "🔵",
        color: "#00bcf2",
        urgent: false
    },
    DEFENDER: {
        title: "Windows Defender",
        icon: "🛡️",
        color: "#107c10",
        urgent: true
    }
};
const POPUP_MESSAGES = [
    // UPDATE
    {
        type: "UPDATE",
        message: "Des mises à jour sont disponibles. Redémarrage requis dans 10 minutes.",
        buttons: [
            "Redémarrer maintenant",
            "Me rappeler plus tard"
        ]
    },
    {
        type: "UPDATE",
        message: "Mise à jour des fonctionnalités vers Windows 11 24H2. Temps estimé : 4 heures.",
        buttons: [
            "Installer",
            "Planifier"
        ]
    },
    {
        type: "UPDATE",
        message: "Votre PC redémarrera automatiquement pour terminer la mise à jour.",
        buttons: [
            "Redémarrer",
            "Différer"
        ]
    },
    {
        type: "UPDATE",
        message: "⚠️ Mise à jour critique KB5034441 - Correction de 147 vulnérabilités",
        buttons: [
            "Installer maintenant",
            "Reporter (dangereux)"
        ]
    },
    {
        type: "UPDATE",
        message: "Windows a besoin de plus d'espace pour les mises à jour. 15 GB requis.",
        buttons: [
            "Libérer de l'espace",
            "Ignorer"
        ]
    },
    {
        type: "UPDATE",
        message: "⏰ Redémarrage planifié dans 5 minutes. Enregistrez votre travail !",
        buttons: [
            "Redémarrer",
            "Reporter de 15 min"
        ]
    },
    // SECURITY
    {
        type: "SECURITY",
        message: "Action recommandée : Activez la protection en temps réel.",
        buttons: [
            "Activer",
            "Ignorer"
        ]
    },
    {
        type: "SECURITY",
        message: "Analyse de sécurité requise. 47 menaces potentielles détectées.",
        buttons: [
            "Analyser",
            "Plus tard"
        ]
    },
    {
        type: "SECURITY",
        message: "🚨 ALERTE ! Votre pare-feu a bloqué 234 tentatives d'intrusion aujourd'hui.",
        buttons: [
            "Voir les détails",
            "OK"
        ]
    },
    {
        type: "SECURITY",
        message: "⚠️ SmartScreen a bloqué un fichier. Ce fichier pourrait endommager votre PC.",
        buttons: [
            "Exécuter quand même",
            "Ne pas exécuter"
        ]
    },
    {
        type: "SECURITY",
        message: "Votre mot de passe Microsoft expire dans 3 jours. Changez-le maintenant.",
        buttons: [
            "Changer",
            "Me rappeler"
        ]
    },
    // EDGE
    {
        type: "EDGE",
        message: "Microsoft Edge est 3x plus rapide que Chrome ! Faites-en votre navigateur par défaut.",
        buttons: [
            "Définir par défaut",
            "Non merci"
        ]
    },
    {
        type: "EDGE",
        message: "Vos onglets vous attendent dans Edge ! Importez vos favoris maintenant.",
        buttons: [
            "Importer",
            "Ignorer"
        ]
    },
    {
        type: "EDGE",
        message: "🎁 Gagnez des points Microsoft Rewards en utilisant Edge ! Jusqu'à 500€/an",
        buttons: [
            "Commencer",
            "Non merci"
        ]
    },
    {
        type: "EDGE",
        message: "Edge protège mieux votre vie privée que les autres navigateurs. Essayez !",
        buttons: [
            "Essayer Edge",
            "Ignorer"
        ]
    },
    {
        type: "EDGE",
        message: "📍 Edge peut remplir automatiquement vos adresses et mots de passe.",
        buttons: [
            "Activer",
            "Non"
        ]
    },
    // OFFICE
    {
        type: "OFFICE",
        message: "Votre abonnement Microsoft 365 expire dans 3 jours. Renouvelez pour 99€/an.",
        buttons: [
            "Renouveler",
            "Fermer"
        ]
    },
    {
        type: "OFFICE",
        message: "Nouveau ! Essayez Copilot dans Word pour 30€/mois supplémentaires.",
        buttons: [
            "Essayer",
            "Non"
        ]
    },
    {
        type: "OFFICE",
        message: "📊 Excel a détecté des erreurs dans votre feuille de calcul. Voulez-vous corriger ?",
        buttons: [
            "Corriger",
            "Ignorer"
        ]
    },
    {
        type: "OFFICE",
        message: "🔄 OneNote synchronise 847 notes... Cela peut prendre plusieurs minutes.",
        buttons: [
            "OK",
            "Annuler"
        ]
    },
    {
        type: "OFFICE",
        message: "Teams se lance au démarrage pour ne rien manquer ! Voulez-vous le désactiver ?",
        buttons: [
            "Garder activé",
            "Désactiver"
        ]
    },
    // ONEDRIVE
    {
        type: "ONEDRIVE",
        message: "Votre espace OneDrive est presque plein. Passez à 1TB pour 2€/mois.",
        buttons: [
            "Mettre à niveau",
            "Gérer"
        ]
    },
    {
        type: "ONEDRIVE",
        message: "Sauvegardez vos fichiers automatiquement dans le cloud Microsoft.",
        buttons: [
            "Activer",
            "Plus tard"
        ]
    },
    {
        type: "ONEDRIVE",
        message: "☁️ OneDrive a détecté 2,847 photos à sauvegarder. Upload en cours...",
        buttons: [
            "Voir la progression",
            "Annuler"
        ]
    },
    {
        type: "ONEDRIVE",
        message: "⚠️ Conflit de synchronisation : 15 fichiers n'ont pas pu être synchronisés.",
        buttons: [
            "Résoudre",
            "Ignorer"
        ]
    },
    // STORE
    {
        type: "STORE",
        message: "🎮 Candy Crush Saga GRATUIT ! Installez maintenant !",
        buttons: [
            "Installer",
            "Non merci"
        ]
    },
    {
        type: "STORE",
        message: "Découvrez les jeux Xbox Game Pass sur PC ! 1€ le premier mois.",
        buttons: [
            "S'abonner",
            "Ignorer"
        ]
    },
    {
        type: "STORE",
        message: "🔔 Disney+ est disponible sur le Microsoft Store ! Regardez Mandalorian.",
        buttons: [
            "Télécharger",
            "Plus tard"
        ]
    },
    {
        type: "STORE",
        message: "TikTok pour Windows est arrivé ! Installez-le depuis le Store.",
        buttons: [
            "Installer",
            "Non"
        ]
    },
    {
        type: "STORE",
        message: "📱 Instagram pour Windows - Restez connecté avec vos amis !",
        buttons: [
            "Obtenir",
            "Ignorer"
        ]
    },
    // CORTANA
    {
        type: "CORTANA",
        message: "Cortana peut vous aider ! Activez l'assistant vocal.",
        buttons: [
            "Activer",
            "Non merci"
        ]
    },
    {
        type: "CORTANA",
        message: "👋 Bonjour ! Cortana peut vous rappeler vos rendez-vous. Activez les rappels ?",
        buttons: [
            "Activer",
            "Non"
        ]
    },
    // DEFENDER
    {
        type: "DEFENDER",
        message: "Protection désactivée ! Votre PC est en danger.",
        buttons: [
            "Activer maintenant",
            "Risquer"
        ]
    },
    {
        type: "DEFENDER",
        message: "🔍 Analyse rapide terminée. 0 menaces trouvées (mais restez vigilant).",
        buttons: [
            "Voir le rapport",
            "OK"
        ]
    },
    {
        type: "DEFENDER",
        message: "⚠️ Protection cloud désactivée. Activez-la pour une protection optimale.",
        buttons: [
            "Activer",
            "Ignorer"
        ]
    },
    {
        type: "DEFENDER",
        message: "🛡️ Windows Defender a mis en quarantaine : suspicious_file.exe",
        buttons: [
            "Supprimer",
            "Restaurer"
        ]
    }
];
function WindowsPopup({ id, message, type = "UPDATE", x, y, onClose, onInteract, zIndex = 100, isGlitching = false }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x,
        y
    });
    const [isHanging, setIsHanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const popupInfo = POPUP_TYPES[type] || POPUP_TYPES.UPDATE;
    const messageData = typeof message === "object" ? message : {
        message,
        buttons: [
            "OK",
            "Annuler"
        ]
    };
    // Simulation de freeze aléatoire
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Math.random() > 0.7) {
            const hangTimeout = setTimeout(()=>{
                setIsHanging(true);
                setTimeout(()=>setIsHanging(false), 1500 + Math.random() * 2000);
            }, 1000);
            return ()=>clearTimeout(hangTimeout);
        }
    }, []);
    const handleButtonClick = (e)=>{
        e.stopPropagation();
        if (isHanging) return;
        onInteract?.();
    };
    const handleClose = (e)=>{
        e.stopPropagation();
        if (isHanging) return;
        onClose?.(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute bg-white rounded-lg shadow-2xl overflow-hidden animate-popIn select-none
        ${isHanging ? "opacity-50 cursor-wait" : ""}
        ${isGlitching ? "animate-glitch" : ""}
        ${popupInfo.urgent ? "ring-2 ring-red-500" : ""}
      `,
        style: {
            left: `${position.x}%`,
            top: `${position.y}%`,
            minWidth: "320px",
            maxWidth: "400px",
            zIndex: zIndex
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 flex items-center justify-between cursor-move",
                style: {
                    backgroundColor: popupInfo.color
                },
                onMouseDown: ()=>setIsDragging(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: popupInfo.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-sm font-medium",
                                children: popupInfo.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "text-white hover:bg-white/20 w-7 h-7 flex items-center justify-center rounded transition-colors",
                                disabled: isHanging,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "text-white hover:bg-red-500 w-7 h-7 flex items-center justify-center rounded transition-colors",
                                disabled: isHanging,
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed",
                        children: messageData.message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2 justify-end flex-wrap",
                        children: messageData.buttons.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleButtonClick,
                                className: `px-4 py-1.5 rounded text-sm font-medium transition-colors
                ${i === 0 ? "bg-[#0078d4] text-white hover:bg-[#106ebe]" : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"}
                ${isHanging ? "cursor-wait opacity-50" : ""}
              `,
                                disabled: isHanging,
                                children: btn
                            }, i, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            isHanging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-white/80 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: "Ne répond pas..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                    lineNumber: 393,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                lineNumber: 392,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
function usePopupManager(isActive, onTriggerCrash, playSound) {
    const [popups, setPopups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [interactionCount, setInteractionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const CRASH_THRESHOLD = 7; // Nombre d'interactions avant crash possible
    // Stocker la ref pour éviter les re-renders
    const crashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onTriggerCrash);
    crashRef.current = onTriggerCrash;
    // Timer de 30 secondes avant crash automatique
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) return;
        const maxTimeBeforeCrash = setTimeout(()=>{
            crashRef.current?.();
        }, 30000); // 30 secondes
        return ()=>clearTimeout(maxTimeBeforeCrash);
    }, [
        isActive
    ]);
    // Générer des popups périodiquement - PLUS FRÉQUENT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) return;
        const spawnPopup = ()=>{
            const messageData = POPUP_MESSAGES[Math.floor(Math.random() * POPUP_MESSAGES.length)];
            const newPopup = {
                id: Date.now() + Math.random(),
                type: messageData.type,
                message: messageData,
                x: Math.random() * 60 + 5,
                y: Math.random() * 60 + 5,
                zIndex: 100 + popups.length
            };
            setPopups((prev)=>[
                    ...prev,
                    newPopup
                ]);
            playSound?.();
        };
        // Premier popup après 2 secondes
        const initialTimeout = setTimeout(spawnPopup, 2000);
        // Deuxième popup après 4 secondes
        const secondTimeout = setTimeout(spawnPopup, 4000);
        // Troisième popup après 6 secondes
        const thirdTimeout = setTimeout(spawnPopup, 6000);
        // Puis toutes les 3-5 secondes (plus de popups!)
        const interval = setInterval(()=>{
            spawnPopup();
            // 30% de chance de spawn 2 popups d'un coup
            if (Math.random() > 0.7) {
                setTimeout(spawnPopup, 500);
            }
        }, 3000 + Math.random() * 2000);
        return ()=>{
            clearTimeout(initialTimeout);
            clearTimeout(secondTimeout);
            clearTimeout(thirdTimeout);
            clearInterval(interval);
        };
    }, [
        isActive,
        playSound
    ]);
    const closePopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setInteractionCount((prev)=>{
            const newCount = prev + 1;
            // 40% de chance de crash après le seuil
            if (newCount >= CRASH_THRESHOLD && Math.random() > 0.6) {
                crashRef.current?.();
            }
            return newCount;
        });
        setPopups((prev)=>prev.filter((p)=>p.id !== id));
    }, []);
    const handleInteract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setInteractionCount((prev)=>{
            const newCount = prev + 1;
            // Crash garanti si on dépasse le seuil + 2
            if (newCount >= CRASH_THRESHOLD + 2) {
                crashRef.current?.();
            }
            return newCount;
        });
    }, []);
    return {
        popups,
        closePopup,
        handleInteract,
        interactionCount
    };
}
const __TURBOPACK__default__export__ = WindowsPopup;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESKTOP_ICONS",
    ()=>DESKTOP_ICONS,
    "DesktopIcon",
    ()=>DesktopIcon,
    "WindowsDesktop",
    ()=>WindowsDesktop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DESKTOP_ICONS = [
    {
        name: "Candy Crush",
        icon: "🍬",
        bloatware: true
    },
    {
        name: "Microsoft Edge",
        icon: "🌐",
        bloatware: true
    },
    {
        name: "Cortana",
        icon: "🔵",
        bloatware: true
    },
    {
        name: "OneDrive",
        icon: "☁️",
        bloatware: true
    },
    {
        name: "Xbox Console",
        icon: "🎮",
        bloatware: true
    },
    {
        name: "Publicités",
        icon: "📢",
        bloatware: true
    },
    {
        name: "Skype",
        icon: "💬",
        bloatware: true
    },
    {
        name: "Microsoft Store",
        icon: "🛒",
        bloatware: true
    },
    {
        name: "Solitaire",
        icon: "🃏",
        bloatware: true
    },
    {
        name: "Groove Music",
        icon: "🎵",
        bloatware: true
    },
    {
        name: "Films & TV",
        icon: "🎬",
        bloatware: true
    },
    {
        name: "3D Builder",
        icon: "🔷",
        bloatware: true
    },
    {
        name: "Mixed Reality",
        icon: "🥽",
        bloatware: true
    },
    {
        name: "Your Phone",
        icon: "📱",
        bloatware: true
    },
    {
        name: "Task Manager",
        icon: "📊",
        bloatware: false
    },
    {
        name: "Feedback Hub",
        icon: "💭",
        bloatware: true
    },
    {
        name: "Tips",
        icon: "💡",
        bloatware: true
    },
    {
        name: "Weather",
        icon: "🌤️",
        bloatware: true
    },
    {
        name: "Paramètres",
        icon: "⚙️",
        bloatware: false
    },
    {
        name: "Get Help",
        icon: "❓",
        bloatware: true
    }
];
// --- SUB-COMPONENTS (Visual Only) ---
function Taskbar() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setTime(new Date()), 1000);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 w-full h-10 bg-[#101010]/95 backdrop-blur-md flex items-center justify-between z-50 select-none border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            className: "w-5 h-5 fill-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 3.449L9.25 2.15v9.332H0V3.449zm9.25 10.848l-9.25 1.282v7.972h9.25v-9.254zm1.5 0v9.45l13.25 1.802V14.15l-13.25.147zm13.25-12l-13.25 1.76v9.404h13.25V2.297z"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center bg-white h-full w-64 px-3 border-y-4 border-[#101010]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 text-sm",
                            children: "Type here to search"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-lg",
                            children: "○"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-lg",
                            children: "□"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center h-full px-2 gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 h-full flex items-center hover:bg-white/10 cursor-default text-xs text-white",
                        children: "^"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end justify-center h-full hover:bg-white/10 px-2 cursor-default text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] leading-tight",
                                children: time.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] leading-tight",
                                children: time.toLocaleDateString([], {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-full border-l border-gray-600 ml-2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DesktopIcon({ name, icon, onClick, isLoading = false, bloatware = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        group flex flex-col items-center justify-start p-2 w-[86px] h-[100px]
        border border-transparent hover:bg-white/10 hover:border-white/5 
        active:bg-white/20 active:border-white/10 rounded-[2px]
        cursor-default transition-all mb-2
        ${isLoading ? "animate-pulse" : ""}
        ${bloatware ? "opacity-90" : ""}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-4xl drop-shadow-2xl filter",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-[11px] text-center leading-tight drop-shadow-md line-clamp-2 px-1 text-shadow-sm shadow-black group-hover:line-clamp-none",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-6 bg-white rounded-[2px] w-3 h-3 flex items-center justify-center shadow-sm pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-3 h-3 text-blue-900 fill-current -rotate-45",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function WindowsDesktop({ onIconClick, isLagging = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden font-sans select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center pointer-events-none z-0",
                style: {
                    backgroundImage: `url('https://4kwallpapers.com/images/wallpapers/windows-10-hero-dark-blue-stock-official-original-3840x2160-2527.jpg')`
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
            absolute inset-0 p-2 flex flex-col flex-wrap content-start items-start gap-1 pb-12
            ${isLagging ? "pointer-events-none cursor-wait grayscale-[0.5]" : ""}
        `,
                children: DESKTOP_ICONS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopIcon, {
                        name: item.name,
                        icon: item.icon,
                        bloatware: item.bloatware,
                        onClick: ()=>onIconClick?.(item)
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-14 right-4 text-white/30 text-right pointer-events-none font-sans z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-normal",
                        children: "Activate Windows"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        children: "Go to Settings to activate Windows."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Taskbar, {}, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            isLagging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-white/20 backdrop-blur-[1px] z-50 flex items-center justify-center cursor-wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 border border-gray-400 shadow-xl rounded-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl",
                                children: "⏳"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-sm",
                                        children: "Windows Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Microsoft Windows is not responding"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                        lineNumber: 174,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = WindowsDesktop;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WindowsTaskbar",
    ()=>WindowsTaskbar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function WindowsTaskbar({ time, cpuUsage = 98, isResponding = true }) {
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(time || new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-0 right-0 h-12 bg-[#1f1f1f]/95 backdrop-blur-sm flex items-center px-2 z-50 border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-12 h-10 bg-transparent hover:bg-white/10 rounded flex items-center justify-center text-white text-2xl transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-6 h-6 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex items-center bg-[#2d2d2d] rounded px-3 py-1.5 w-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50 text-sm",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50 text-sm ml-2",
                        children: "Rechercher..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ml-2 gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "📁",
                        tooltip: "Explorateur"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "🌐",
                        tooltip: "Edge",
                        active: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "📧",
                        tooltip: "Mail"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "🛒",
                        tooltip: "Store",
                        notification: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/70 text-xs",
                    children: "^"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-white text-xs px-3 py-1 hover:bg-white/10 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrayIcon, {
                        icon: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrayIcon, {
                        icon: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cpuUsage > 80 ? "text-red-400" : "text-white",
                                children: "🔋"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/70",
                                children: [
                                    100 - Math.floor(cpuUsage / 10),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-end px-3 py-1 hover:bg-white/10 rounded text-white text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: currentTime.toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/70",
                        children: currentTime.toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-full bg-white/20 hover:bg-white/40 cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            !isResponding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/30 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xs",
                    children: "Ne répond pas..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function TaskbarIcon({ icon, tooltip, active = false, notification = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      relative w-10 h-10 flex items-center justify-center rounded
      hover:bg-white/10 cursor-pointer transition-colors
      ${active ? "bg-white/10" : ""}
    `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
function TrayIcon({ icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-base hover:opacity-80 cursor-pointer",
        children: icon
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = WindowsTaskbar;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlueScreenOfDeath",
    ()=>BlueScreenOfDeath,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function BlueScreenOfDeath({ onHackerReady }) {
    const [showHacker, setShowHacker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hackerText, setHackerText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [glitch, setGlitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Simulation of stuck progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setProgress((prev)=>{
                if (prev >= 21) return 21; // Stuck at 21%
                return prev + Math.random() * 3;
            });
        }, 400);
        return ()=>clearInterval(interval);
    }, []);
    // Trigger Hacker Sequence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout = setTimeout(()=>{
            setGlitch(true); // Trigger screen glitch before terminal appears
            setTimeout(()=>{
                setShowHacker(true);
                setGlitch(false);
                typeHackerMessage();
            }, 400);
        }, 500);
        return ()=>clearTimeout(timeout);
    }, []);
    const typeHackerMessage = ()=>{
        const messages = [
            "root@rescue-sys:~$ CONNECTION ESTABLISHED.",
            "root@rescue-sys:~$ ANALYZING SYSTEM FAILURE...",
            "> ERROR: PLANNED_OBSOLESCENCE DETECTED.",
            "> HARDWARE STATUS: HEALTHY.",
            "> OS STATUS: CRITICAL BLOATWARE.",
            "root@rescue-sys:~$ INITIALIZING LINUX KERNEL...",
            "root@rescue-sys:~$ GENDARMERIE_PROTOCOL_V2.0 ACTIVATED.",
            "root@rescue-sys:~$ SAVING 2 MILLION EUROS/YEAR...",
            "root@rescue-sys:~$ READY FOR USER INPUT."
        ];
        let fullText = "";
        let msgIndex = 0;
        let charIndex = 0;
        const typeInterval = setInterval(()=>{
            if (msgIndex < messages.length) {
                if (charIndex < messages[msgIndex].length) {
                    fullText += messages[msgIndex][charIndex];
                    setHackerText(fullText);
                    charIndex++;
                } else {
                    fullText += "\n";
                    setHackerText(fullText);
                    msgIndex++;
                    charIndex = 0;
                    if (msgIndex === messages.length) {
                        setTimeout(()=>setShowButton(true), 200);
                    }
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 5);
        return ()=>clearInterval(typeInterval);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full bg-[#0078D7] font-sans overflow-hidden select-none cursor-wait",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[size:100%_2px,3px_100%] pointer-events-none opacity-40"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] z-40 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full h-full flex flex-col items-start p-8 sm:p-20 pt-16 sm:pt-32",
                animate: glitch ? {
                    x: [
                        -5,
                        5,
                        -5,
                        5,
                        0
                    ],
                    filter: [
                        "hue-rotate(0deg)",
                        "hue-rotate(90deg)",
                        "hue-rotate(0deg)"
                    ]
                } : {},
                transition: {
                    duration: 0.2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-white text-[8rem] sm:text-[10rem] leading-none font-light mb-8 font-mono",
                        children: ":("
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white max-w-4xl space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl sm:text-3xl font-light",
                                children: "Votre ordinateur a rencontré un problème et doit redémarrer. Nous collectons simplement des informations relatives aux erreurs, puis nous redémarrerons l'ordinateur pour vous."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-xl sm:text-2xl mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-light",
                                    children: [
                                        Math.floor(progress),
                                        "% effectués"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start gap-8 mt-12 pt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-2 w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=LinuxIsBetter')] bg-cover rendering-pixelated"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm sm:text-base font-light space-y-2 opacity-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Pour plus d'informations sur ce problème et les solutions possibles, consultez https://www.windows.com/stopcode"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Si vous contactez l'assistance, transmettez ces informations :"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs sm:text-sm mt-2",
                                                children: [
                                                    "Code d'arrêt :",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: "CRITICAL_PLANNED_OBSOLESCENCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs sm:text-sm",
                                                children: [
                                                    "Éléments ayant échoué :",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: "win32k.sys (Too Old For Windows 11)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                        lineNumber: 147,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showHacker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: "100%",
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 15
                    },
                    className: "absolute bottom-0 left-0 right-0 sm:bottom-12 sm:left-12 sm:right-12 z-50 flex justify-center items-end sm:items-center pointer-events-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-3xl bg-[#0c0c0c]/95 backdrop-blur-xl rounded-t-xl sm:rounded-xl border border-green-500/30 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-xs font-mono uppercase tracking-widest",
                                        children: "Rescue_Shell_v1.0.4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 font-mono text-sm sm:text-base min-h-[300px] flex flex-col relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 text-green-400 whitespace-pre-line leading-relaxed shadow-green-400/10 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]",
                                        children: [
                                            hackerText,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    opacity: [
                                                        1,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    repeat: Infinity
                                                },
                                                className: "inline-block w-2.5 h-5 bg-green-400 ml-1 align-middle"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this),
                                    showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "mt-auto pt-6 flex justify-center w-full z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onHackerReady,
                                            className: "group relative px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-bold font-mono rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🚀"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                            lineNumber: 206,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "INITIALIZE_NIRD_PROTOCOL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                            lineNumber: 207,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-white/20 skew-x-12 opacity-0 group-hover:animate-ping"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                                    lineNumber: 210,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                            lineNumber: 201,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = BlueScreenOfDeath;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTaskManager",
    ()=>LinuxTaskManager,
    "WindowsTaskManager",
    ()=>WindowsTaskManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// --- HELPERS FOR REALISM ---
// Returns the Windows Task Manager heatmap color based on usage %
const getHeatmapColor = (value, threshold1 = 20, threshold2 = 60)=>{
    if (value >= 90) return "bg-[#e04f44] text-white"; // Critical Red
    if (value >= threshold2) return "bg-[#e68a45] text-white"; // High Orange
    if (value >= threshold1) return "bg-[#cca856] text-black"; // Med Yellow
    return "text-gray-200"; // Normal
};
// Generates a random path for the SVG graph
const generateGraphPath = (points, height)=>{
    if (points.length === 0) return "";
    const stepX = 100 / (points.length - 1);
    let path = `M 0 ${height - points[0] / 100 * height}`;
    points.forEach((p, i)=>{
        path += ` L ${i * stepX} ${height - p / 100 * height}`;
    });
    return path;
};
// --- DATA ---
const WINDOWS_PROCESSES = [
    {
        name: "System Interrupts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMicrochip"],
        baseCpu: 15,
        baseMem: 200,
        status: "Running",
        gpu: 0
    },
    {
        name: "Antimalware Service Executable",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShieldAlt"],
        baseCpu: 25,
        baseMem: 650,
        status: "Running",
        gpu: 12
    },
    {
        name: "Desktop Window Manager",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDesktop"],
        baseCpu: 8,
        baseMem: 400,
        status: "Running",
        gpu: 45
    },
    {
        name: "Google Chrome (24)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChrome"],
        baseCpu: 35,
        baseMem: 3200,
        status: "Running",
        gpu: 15
    },
    {
        name: "Windows Explorer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWindows"],
        baseCpu: 5,
        baseMem: 180,
        status: "Not Responding",
        gpu: 2
    },
    {
        name: "Microsoft Teams",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaServer"],
        baseCpu: 12,
        baseMem: 890,
        status: "Running",
        gpu: 5
    },
    {
        name: "Search Indexer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"],
        baseCpu: 18,
        baseMem: 250,
        status: "Indexing",
        gpu: 0
    },
    {
        name: "OneDrive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCloud"],
        baseCpu: 9,
        baseMem: 150,
        status: "Syncing",
        gpu: 0
    },
    {
        name: "Registry",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWindows"],
        baseCpu: 2,
        baseMem: 80,
        status: "Running",
        gpu: 0
    },
    {
        name: "Service Host: NetworkService",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaNetworkWired"],
        baseCpu: 10,
        baseMem: 120,
        status: "Running",
        gpu: 0
    },
    {
        name: "Microsoft Word",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFileWord"],
        baseCpu: 0,
        baseMem: 450,
        status: "Suspended",
        gpu: 0
    },
    {
        name: "Xbox Game Bar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGamepad"],
        baseCpu: 4,
        baseMem: 210,
        status: "Running",
        gpu: 8
    }
];
function WindowsTaskManager({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("processes");
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(WINDOWS_PROCESSES);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(40).fill(50)); // For graph
    const [isHanging, setIsHanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Global Stats
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        cpu: 92,
        mem: 88,
        disk: 100,
        net: 45,
        gpu: 24
    });
    // Simulation Loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const interval = setInterval(()=>{
            // 1. Update Processes with jitter
            setProcesses((prev)=>prev.map((p)=>({
                        ...p,
                        cpu: Math.max(0, Math.min(100, p.baseCpu + (Math.random() * 20 - 5))),
                        mem: Math.max(0, p.baseMem + (Math.random() * 50 - 25)),
                        disk: Math.random() * 15,
                        net: Math.random() * 5
                    })));
            // 2. Update Global Stats
            const newCpu = 85 + Math.random() * 15;
            setStats({
                cpu: newCpu,
                mem: 85 + Math.random() * 10,
                disk: 95 + Math.random() * 5,
                net: 20 + Math.random() * 30,
                gpu: 30 + Math.random() * 20
            });
            // 3. Update Graph History
            setHistory((prev)=>[
                    ...prev.slice(1),
                    newCpu
                ]);
            // 4. Random Freeze Effect
            if (Math.random() > 0.92) {
                setIsHanging(true);
                setTimeout(()=>setIsHanging(false), 800);
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.95,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: 0.95,
                opacity: 0
            },
            className: "absolute z-[100] bg-[#202020] text-white/90 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden border border-[#333] font-sans text-sm select-none",
            style: {
                width: "900px",
                height: "600px",
                top: "40%",
                left: "45%",
                transform: "translate(-50%, -50%)",
                backdropFilter: "blur(20px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 flex items-center justify-between px-3 bg-[#202020]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 rounded-sm bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMicrochip"], {
                                        className: "text-[10px] text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium",
                                    children: "Task Manager"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-8 flex items-center justify-center hover:bg-[#333] text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdMinimize"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-8 flex items-center justify-center hover:bg-[#333] text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdCropSquare"], {
                                        className: "text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-10 h-8 flex items-center justify-center hover:bg-[#c42b1c] hover:text-white text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-[calc(100%-40px)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 bg-[#202020] flex flex-col items-center py-2 gap-1 border-r border-[#333]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarBtn, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdMenu"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarBtn, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdGridView"],
                                    active: activeTab === "processes",
                                    onClick: ()=>setActiveTab("processes")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarBtn, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdShowChart"],
                                    active: activeTab === "performance",
                                    onClick: ()=>setActiveTab("performance")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarBtn, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdHistory"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarBtn, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWindows"]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 bg-[#272727] overflow-hidden flex flex-col relative ${isHanging ? "cursor-progress opacity-80 grayscale-[0.5]" : ""}`,
                            children: [
                                isHanging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 w-full h-8 bg-white/80 z-50 text-black text-xs flex items-center px-4 border-b border-blue-400",
                                    children: "Task Manager (Not Responding)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                activeTab === "processes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px bg-[#202020] border-b border-[#333] text-[11px] text-gray-400 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "CPU",
                                                    active: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "Memory"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "Disk"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCell, {
                                                    text: "GPU"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-y-auto custom-scrollbar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px bg-[#2d2d2d] text-xs font-semibold border-b border-[#333] sticky top-0 z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 flex items-center text-gray-300",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 299,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 bg-[#e04f44] text-white",
                                                            children: [
                                                                stats.cpu.toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 bg-[#e68a45] text-white",
                                                            children: [
                                                                stats.mem.toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 bg-[#e04f44] text-white",
                                                            children: [
                                                                stats.disk.toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 bg-[#cca856] text-black",
                                                            children: [
                                                                stats.net.toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 bg-[#cca856] text-black",
                                                            children: [
                                                                stats.gpu.toFixed(0),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                processes.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-px text-[11px] hover:bg-[#353535] group items-center border-b border-[#333]/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-1.5 pl-3 flex items-center gap-2 truncate text-gray-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        onClick: ()=>{},
                                                                        className: "text-gray-500 cursor-pointer",
                                                                        children: ">"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                        lineNumber: 327,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(p.icon, {
                                                                        className: `text-sm ${p.status === "Not Responding" ? "text-red-400" : "text-blue-400"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                        lineNumber: 333,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: p.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                        lineNumber: 340,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 326,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 truncate ${p.status === "Not Responding" ? "text-red-400" : "text-gray-400"}`,
                                                                children: p.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 342,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 text-right ${getHeatmapColor(p.cpu || 0, 10, 30)}`,
                                                                children: [
                                                                    (p.cpu || 0).toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 351,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 text-right ${getHeatmapColor(p.mem / 100, 20, 50)}`,
                                                                children: [
                                                                    (p.mem || 0).toFixed(1),
                                                                    " MB"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 text-right ${getHeatmapColor(p.disk, 5, 20)}`,
                                                                children: [
                                                                    (p.disk || 0).toFixed(1),
                                                                    " MB/s"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 369,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 text-right ${getHeatmapColor(p.net, 5, 15)}`,
                                                                children: [
                                                                    (p.net || 0).toFixed(1),
                                                                    " Mbps"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 378,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 text-right ${getHeatmapColor(p.gpu, 10, 40)}`,
                                                                children: [
                                                                    (p.gpu || 0).toFixed(1),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 387,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 322,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                activeTab === "performance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-64 bg-[#202020] border-r border-[#333] flex flex-col overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PerfItem, {
                                                    title: "CPU",
                                                    label: "100% Usage",
                                                    sub: "4.20 GHz",
                                                    active: true,
                                                    color: "bg-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PerfItem, {
                                                    title: "Memory",
                                                    label: "15.8/16.0 GB (99%)",
                                                    sub: "Slots used: 2 of 4",
                                                    color: "bg-purple-500",
                                                    warning: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PerfItem, {
                                                    title: "Disk 0 (C:)",
                                                    label: "100% Active",
                                                    sub: "HDD",
                                                    color: "bg-green-500",
                                                    warning: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 421,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PerfItem, {
                                                    title: "Wi-Fi",
                                                    label: "Sending...",
                                                    sub: "IPv4",
                                                    color: "bg-cyan-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 428,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PerfItem, {
                                                    title: "GPU 0",
                                                    label: "35%",
                                                    sub: "NVIDIA RTX",
                                                    color: "bg-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-6 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-xl font-light",
                                                                    children: "CPU"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                    lineNumber: 446,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Intel(R) Core(TM) i9-12900K"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                    lineNumber: 447,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-3xl font-light text-blue-400",
                                                                children: [
                                                                    stats.cpu.toFixed(0),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                lineNumber: 452,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 border border-[#444] bg-[#1a1a1a] rounded relative overflow-hidden p-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 grid grid-cols-10 grid-rows-5 pointer-events-none",
                                                            children: [
                                                                ...Array(50)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border-r border-b border-[#333]/30"
                                                                }, i, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                    lineNumber: 462,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 460,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-full h-full",
                                                            preserveAspectRatio: "none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: generateGraphPath(history, 100),
                                                                    fill: "none",
                                                                    stroke: "#3b82f6",
                                                                    strokeWidth: "2",
                                                                    vectorEffect: "non-scaling-stroke",
                                                                    className: "drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                    lineNumber: 469,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: `${generateGraphPath(history, 100)} V 100 H 0 Z`,
                                                                    fill: "rgba(59,130,246,0.1)",
                                                                    stroke: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                                    lineNumber: 477,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-4 mt-6 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Utilization",
                                                            value: `${stats.cpu.toFixed(0)}%`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 487,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Speed",
                                                            value: "4.81 GHz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 491,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Processes",
                                                            value: "342"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 492,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Threads",
                                                            value: "5621"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 493,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Handles",
                                                            value: "128453"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBox, {
                                                            label: "Up time",
                                                            value: "0:04:21:12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 495,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 486,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
            lineNumber: 211,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
// --- SUB-COMPONENTS ---
function SidebarBtn({ icon: Icon, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `w-10 h-10 rounded-md flex items-center justify-center transition-colors mb-1 ${active ? "bg-[#333] text-blue-400" : "text-gray-400 hover:bg-[#333]"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "text-lg"
        }, void 0, false, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
            lineNumber: 517,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 511,
        columnNumber: 5
    }, this);
}
function HeaderCell({ text, active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-2 pl-3 flex items-center hover:bg-[#333] cursor-pointer ${active ? "bg-[#2d2d2d]" : ""}`,
        children: text
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 524,
        columnNumber: 5
    }, this);
}
function PerfItem({ title, label, sub, active, color, warning }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 border-b border-[#333] hover:bg-[#333] cursor-pointer border-l-4 ${active ? "bg-[#2d2d2d] border-l-blue-400" : "border-l-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this),
                    warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-400 text-[10px] font-bold",
                        children: "HIGH"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 h-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-light",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 549,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-full border border-[#444] bg-[#101010] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-0 left-0 w-full ${color} opacity-40`,
                                style: {
                                    height: active ? "90%" : "40%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-0 left-0 w-full border-t-2 ${color.replace("bg-", "border-")}`,
                                style: {
                                    height: active ? "90%" : "40%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 547,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 536,
        columnNumber: 5
    }, this);
}
function StatBox({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500 mb-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-base font-light",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 575,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 573,
        columnNumber: 5
    }, this);
}
function LinuxTaskManager({ isOpen, onClose }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 20
        },
        className: "absolute z-[100] bg-[#333333] text-white rounded-xl shadow-2xl overflow-hidden font-sans border border-black/50",
        style: {
            width: "500px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#2d2d2d] px-4 py-3 flex justify-between items-center border-b border-black/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold tracking-wide text-sm",
                        children: "System Monitor"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 603,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#404040] rounded-lg p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 uppercase tracking-widest mb-2",
                                        children: "CPU History"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 615,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-light text-green-400",
                                                children: "4%"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 619,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-8 bg-black/20 rounded overflow-hidden flex items-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-[4%] bg-green-400/50 border-t border-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 621,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 620,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 618,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 614,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#404040] rounded-lg p-4 border border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 uppercase tracking-widest mb-2",
                                        children: "Memory"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 626,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-light text-purple-400",
                                                children: [
                                                    "1.2",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm",
                                                        children: "GB"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 631,
                                                        columnNumber: 20
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 630,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-8 bg-black/20 rounded overflow-hidden flex items-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-[15%] bg-purple-400/50 border-t border-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 634,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 629,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 625,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 p-2 text-xs font-bold text-gray-500 bg-[#252525] border-b border-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Process Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "CPU"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "Mem"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 644,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 645,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: [
                                    {
                                        n: "gnome-shell",
                                        c: "1.2%",
                                        m: "145 MB",
                                        id: "1042"
                                    },
                                    {
                                        n: "Xorg",
                                        c: "0.8%",
                                        m: "89 MB",
                                        id: "892"
                                    },
                                    {
                                        n: "firefox",
                                        c: "0.5%",
                                        m: "210 MB",
                                        id: "2145"
                                    },
                                    {
                                        n: "systemd",
                                        c: "0.1%",
                                        m: "12 MB",
                                        id: "1"
                                    },
                                    {
                                        n: "terminal",
                                        c: "0.0%",
                                        m: "24 MB",
                                        id: "3412"
                                    }
                                ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 p-2 border-b border-white/5 hover:bg-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: row.n
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 659,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-gray-400",
                                                children: row.c
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-gray-400",
                                                children: row.m
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-gray-600",
                                                children: row.id
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 662,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mt-4 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLeaf"], {
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Eco-friendly Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Load average: 0.12, 0.08, 0.04"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 673,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 668,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 612,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 586,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = WindowsTaskManager;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESKTOP_FILES",
    ()=>DESKTOP_FILES,
    "DOCK_APPS",
    ()=>DOCK_APPS,
    "LinuxDesktop",
    ()=>LinuxDesktop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const DOCK_APPS = [
    {
        name: "Firefox",
        icon: "🦊",
        color: "bg-orange-500/10"
    },
    {
        name: "Terminal",
        icon: "💻",
        color: "bg-gray-500/10"
    },
    {
        name: "VS Code",
        icon: "📝",
        color: "bg-blue-500/10"
    },
    {
        name: "Files",
        icon: "📁",
        color: "bg-blue-400/10"
    },
    {
        name: "Spotify",
        icon: "🎧",
        color: "bg-green-500/10"
    }
];
const DESKTOP_FILES = [
    {
        name: "project_nird",
        icon: "📁",
        type: "folder"
    },
    {
        name: "main.rs",
        icon: "🦀",
        type: "file"
    },
    {
        name: "passwords.txt",
        icon: "📄",
        type: "file"
    },
    {
        name: "config.json",
        icon: "⚙️",
        type: "config"
    },
    {
        name: "screenshot.png",
        icon: "🖼️",
        type: "image"
    },
    {
        name: "Trash",
        icon: "🗑️",
        type: "trash"
    }
];
// --- SUB-COMPONENTS ---
function TopBar() {
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setDate(new Date()), 1000);
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-8 w-full bg-[#1a1b26]/90 backdrop-blur-md text-gray-200 flex items-center justify-between px-4 text-xs font-medium select-none z-50 border-b border-white/5 relative shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group cursor-pointer flex items-center gap-2 hover:bg-white/10 px-3 py-1 rounded-full transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🐧"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold tracking-wide",
                                children: "Activities"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50",
                        children: "Terminal"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 -translate-x-1/2 font-bold tracking-wide cursor-pointer hover:bg-white/10 px-4 py-1 rounded-full transition-colors",
                children: [
                    date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-2 opacity-50",
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-3 py-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: "FR"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-3 py-1 hover:bg-white/10 rounded-full cursor-pointer transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📡"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔈"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔋"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1",
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function ConkyWidget() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute right-10 top-20 text-white/60 font-mono text-[10px] sm:text-xs pointer-events-none select-none text-right leading-relaxed z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block",
                        children: "SYSTEM"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "OS: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400",
                                children: "NIRD Linux 24.04"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "KERNEL: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400",
                                children: "6.8.0-generic"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 89,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "UPTIME: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400",
                                children: "12d 4h 21m"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                                lineNumber: 92,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block",
                        children: "CPU"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "USAGE: [|||.......] 12%"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "FREQ: 3.2GHz"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "TEMP: 42°C"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-sm border-b border-white/20 pb-1 mb-2 inline-block",
                        children: "MEMORY"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "RAM: [||||......] 4.2G"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "SWAP: [..........] 0%"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function Dock({ onIconClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end gap-2 px-3 py-2 bg-[#1a1b26]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl",
            children: [
                DOCK_APPS.map((app, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                        app: app,
                        onClick: ()=>onIconClick(app)
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px h-8 bg-white/10 mx-2 self-center"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DockIcon, {
                    app: {
                        name: "App Grid",
                        icon: "⋮⋮⋮",
                        color: "bg-transparent"
                    },
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function DockIcon({ app, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.2,
            y: -5
        },
        whileTap: {
            scale: 0.95
        },
        onClick: onClick,
        className: "group relative flex flex-col items-center cursor-pointer p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg border border-white/5 ${app.color} transition-all duration-300 group-hover:bg-white/20`,
                children: app.icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-12 px-2 py-1 bg-[#1a1b26] text-white text-[10px] rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                children: app.name
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-1 w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function DesktopFile({ item, isSelected, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: (e)=>{
            e.stopPropagation();
            onClick();
        },
        className: `
                flex flex-col items-center justify-center w-24 p-2 rounded-lg cursor-pointer border border-transparent
                ${isSelected ? "bg-blue-500/30 border-blue-400/50 backdrop-blur-sm" : "hover:bg-white/5 hover:border-white/5"}
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl mb-2 drop-shadow-xl",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `
                text-[11px] text-center px-1.5 py-0.5 rounded leading-tight
                ${isSelected ? "text-white" : "text-gray-200 text-shadow"}
            `,
                children: item.name
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
function LinuxDesktop({ onIconClick }) {
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full bg-[#0f0f12] overflow-hidden font-sans select-none",
        onClick: ()=>setSelectedFile(null),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-80",
                style: {
                    backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TopBar, {}, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConkyWidget, {}, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-6 flex flex-col flex-wrap content-start gap-4 h-[calc(100%-4rem)] max-w-[500px]",
                children: DESKTOP_FILES.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopFile, {
                        item: item,
                        isSelected: selectedFile === i,
                        onClick: ()=>{
                            setSelectedFile(i);
                            onIconClick && onIconClick(item);
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dock, {
                onIconClick: onIconClick
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LinuxDesktop;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTopBar",
    ()=>LinuxTopBar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LinuxTopBar() {
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>setCurrentTime(new Date()), 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-sm flex items-center justify-between px-4 text-white text-sm z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-orange-400",
                        children: "Activités"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: "📂 Fichiers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: "🦊 Firefox"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: "⬛ Terminal"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 -translate-x-1/2 text-sm",
                children: [
                    currentTime.toLocaleDateString("fr-FR", {
                        weekday: "short",
                        day: "numeric",
                        month: "short"
                    }),
                    " ",
                    currentTime.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 p-1 rounded cursor-pointer",
                        children: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 p-1 rounded cursor-pointer",
                        children: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔋"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "100%"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 p-1 rounded cursor-pointer",
                        children: "⏻"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LinuxTopBar;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTerminal",
    ()=>LinuxTerminal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const INTERACTIVE_SCENARIOS = [
    {
        id: "update",
        title: "🔄 Mise à jour système",
        initialOutput: [
            "user@linux:~$ sudo apt update",
            "Atteint:1 http://archive.ubuntu.com/ubuntu jammy InRelease",
            "Atteint:2 http://security.ubuntu.com/ubuntu jammy-security InRelease",
            "Lecture des listes de paquets... Fait",
            "Construction de l'arbre des dépendances... Fait",
            "",
            "142 paquets peuvent être mis à jour. Exécutez « apt list --upgradable »",
            ""
        ],
        question: "Exécuter la mise à jour ? [O/n]",
        hasProgressAnimation: true,
        packages: [
            {
                name: "firefox",
                size: "67.2 MB",
                version: "120.0"
            },
            {
                name: "libssl3",
                size: "2.1 MB",
                version: "3.0.11"
            },
            {
                name: "linux-image-6.5.0",
                size: "89.4 MB",
                version: "6.5.0-14"
            },
            {
                name: "nodejs",
                size: "31.8 MB",
                version: "20.10.0"
            },
            {
                name: "python3",
                size: "5.6 MB",
                version: "3.11.6"
            }
        ],
        choices: [
            {
                key: "o",
                label: "Oui, mettre à jour",
                triggerAnimation: true,
                finalResponse: [
                    "",
                    "✅ 142 paquets mis à jour avec succès !",
                    "",
                    "# 🎉 VOUS contrôlez vos mises à jour",
                    "# Pas de redémarrage forcé à 3h du matin !",
                    "# Votre système est à jour et sécurisé."
                ]
            },
            {
                key: "n",
                label: "Non, pas maintenant",
                response: [
                    "Abandon.",
                    "",
                    "# ✨ C'est VOTRE choix !",
                    "# Mettez à jour quand VOUS le décidez",
                    "# Pas quand Microsoft le décide."
                ]
            }
        ]
    },
    {
        id: "install",
        title: "📦 Installation de logiciels",
        initialOutput: [
            "user@linux:~$ apt search office",
            "libreoffice - Suite bureautique complète",
            "onlyoffice - Suite collaborative",
            "calligra - Suite KDE",
            ""
        ],
        question: "Installer LibreOffice gratuitement ? [O/n]",
        choices: [
            {
                key: "o",
                label: "Oui, installer",
                response: [
                    "user@linux:~$ sudo apt install libreoffice",
                    "Téléchargement de libreoffice...",
                    "████████████████████ 100%",
                    "Installation...",
                    "✅ LibreOffice installé !",
                    "",
                    "# 💰 Économie : 150€/an de licence Office",
                    "# 🔓 100% compatible avec les fichiers Microsoft"
                ]
            },
            {
                key: "n",
                label: "Non merci",
                response: [
                    "D'accord, pas de problème !",
                    "",
                    "# 📝 Vous pouvez aussi essayer :",
                    "# - OnlyOffice (gratuit)",
                    "# - Google Docs (en ligne)",
                    "# - Cryptpad (chiffré)"
                ]
            }
        ]
    },
    {
        id: "customize",
        title: "🎨 Personnalisation",
        initialOutput: [
            "user@linux:~$ ls /usr/share/themes/",
            "Adwaita  Arc-Dark  Dracula  Nord  Catppuccin",
            "",
            "user@linux:~$ ls /usr/share/icons/",
            "Papirus  Numix  Flat-Remix  Tela",
            ""
        ],
        question: "Changer le thème du bureau ? [O/n]",
        choices: [
            {
                key: "o",
                label: "Oui, personnaliser !",
                response: [
                    "user@linux:~$ gsettings set org.gnome.desktop.interface gtk-theme 'Dracula'",
                    "Thème appliqué : Dracula 🧛",
                    "",
                    "# 🎨 LIBERTÉ TOTALE de personnalisation",
                    "# Changez les icônes, les polices, les couleurs...",
                    "# Votre PC, VOS règles !",
                    "",
                    "# 💡 Commentaire : Sous Windows, vous payez",
                    "# pour des thèmes basiques. Ici, tout est gratuit !"
                ]
            },
            {
                key: "n",
                label: "Garder le défaut",
                response: [
                    "Le thème par défaut est conservé.",
                    "",
                    "# 👌 Pas de souci ! Vous pouvez changer",
                    "# d'avis à tout moment.",
                    "# Votre système, votre choix !"
                ]
            }
        ]
    },
    {
        id: "privacy",
        title: "🔒 Vie privée",
        initialOutput: [
            "user@linux:~$ cat /etc/telemetry.conf",
            "cat: /etc/telemetry.conf: Aucun fichier",
            "",
            "# 🎉 Pas de fichier de télémétrie !",
            "# Linux ne vous espionne pas par défaut.",
            ""
        ],
        question: "Vérifier les connexions réseau ? [O/n]",
        choices: [
            {
                key: "o",
                label: "Oui, vérifier",
                response: [
                    "user@linux:~$ ss -tuln | grep ESTABLISHED",
                    "",
                    "# 🔍 Connexions actives : Seulement VOS apps",
                    "# Aucune connexion vers Microsoft",
                    "# Aucune connexion vers des serveurs publicitaires",
                    "",
                    "# 🛡️ VOTRE vie privée est respectée",
                    "# Contrairement à Windows qui envoie",
                    "# vos données à Microsoft en permanence"
                ]
            },
            {
                key: "n",
                label: "Non, je fais confiance",
                response: [
                    "# 👍 Et vous avez raison de faire confiance !",
                    "# Le code source est ouvert et auditable",
                    "# Des millions de développeurs vérifient",
                    "",
                    "# 💪 La sécurité par la transparence"
                ]
            }
        ]
    }
];
function LinuxTerminal({ isOpen = true, onClose }) {
    const [activeScenario, setActiveScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showQuestion, setShowQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answered, setAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typingIndex, setTypingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isUpdating, setIsUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updateProgress, setUpdateProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentPackage, setCurrentPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [packageIndex, setPackageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const scenario = INTERACTIVE_SCENARIOS[activeScenario];
    // Reset et taper le texte initial
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOutput([]);
        setShowQuestion(false);
        setAnswered(false);
        setIsTyping(true);
        setTypingIndex(0);
        setIsUpdating(false);
        setUpdateProgress(0);
        setCurrentPackage(null);
        setPackageIndex(0);
    }, [
        activeScenario
    ]);
    // Animation de frappe ligne par ligne
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isTyping || answered) return;
        if (typingIndex < scenario.initialOutput.length) {
            const timeout = setTimeout(()=>{
                setOutput((prev)=>[
                        ...prev,
                        scenario.initialOutput[typingIndex]
                    ]);
                setTypingIndex((prev)=>prev + 1);
            }, 150);
            return ()=>clearTimeout(timeout);
        } else {
            setIsTyping(false);
            setTimeout(()=>setShowQuestion(true), 300);
        }
    }, [
        typingIndex,
        isTyping,
        scenario,
        answered
    ]);
    const handleChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((choice)=>{
        setAnswered(true);
        setShowQuestion(false);
        // Ajouter la réponse utilisateur
        setOutput((prev)=>[
                ...prev,
                `> ${choice.label}`,
                ""
            ]);
        // Si c'est une mise à jour avec animation
        if (choice.triggerAnimation && scenario.packages) {
            setIsUpdating(true);
            setOutput((prev)=>[
                    ...prev,
                    "user@linux:~$ sudo apt upgrade -y",
                    ""
                ]);
            // Démarrer l'animation de mise à jour
            let pkgIdx = 0;
            const packages = [
                ...scenario.packages
            ]; // Copie pour éviter les problèmes de closure
            const totalPackages = packages.length;
            const updateNextPackage = ()=>{
                if (pkgIdx < totalPackages) {
                    const currentPkg = packages[pkgIdx];
                    if (!currentPkg) return; // Protection supplémentaire
                    setCurrentPackage(currentPkg);
                    setPackageIndex(pkgIdx);
                    setUpdateProgress(0);
                    // Animer la progression
                    let progress = 0;
                    const currentIdx = pkgIdx; // Capturer l'index actuel
                    const progressInterval = setInterval(()=>{
                        progress += Math.random() * 15 + 5;
                        if (progress >= 100) {
                            progress = 100;
                            clearInterval(progressInterval);
                            // Ajouter le log de succès pour ce package
                            const pkg = packages[currentIdx];
                            if (pkg) {
                                setOutput((prev)=>[
                                        ...prev,
                                        `✓ ${pkg.name} (${pkg.version}) installé`
                                    ]);
                            }
                            pkgIdx++;
                            setTimeout(updateNextPackage, 200);
                        }
                        setUpdateProgress(Math.min(progress, 100));
                    }, 100);
                } else {
                    // Terminé - ajouter les messages finaux
                    setIsUpdating(false);
                    setCurrentPackage(null);
                    if (choice.finalResponse) {
                        let idx = 0;
                        const addFinalLine = ()=>{
                            if (idx < choice.finalResponse.length) {
                                setOutput((prev)=>[
                                        ...prev,
                                        choice.finalResponse[idx]
                                    ]);
                                idx++;
                                setTimeout(addFinalLine, 100);
                            }
                        };
                        setTimeout(addFinalLine, 300);
                    }
                }
            };
            setTimeout(updateNextPackage, 500);
        } else {
            // Réponse normale sans animation
            let index = 0;
            const addLine = ()=>{
                if (index < choice.response.length) {
                    setOutput((prev)=>[
                            ...prev,
                            choice.response[index]
                        ]);
                    index++;
                    setTimeout(addLine, 100);
                }
            };
            setTimeout(addLine, 300);
        }
    }, [
        scenario
    ]);
    const nextScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setActiveScenario((prev)=>(prev + 1) % INTERACTIVE_SCENARIOS.length);
    }, []);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        className: "bg-[#1a1b26] rounded-xl overflow-hidden shadow-2xl border border-purple-500/30 w-full max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-900 to-indigo-900 px-4 py-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3 h-3 rounded-full bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/90 text-sm font-medium",
                                children: "🐧 Terminal Linux — Interactif"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-300 text-xs",
                        children: "bash 5.2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#24283b] flex gap-1 px-2 py-1.5 overflow-x-auto border-b border-purple-500/20",
                children: INTERACTIVE_SCENARIOS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveScenario(i),
                        className: `px-3 py-1.5 text-xs rounded-lg transition-all whitespace-nowrap font-medium
              ${activeScenario === i ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}
            `,
                        children: s.title
                    }, s.id, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 font-mono text-sm min-h-[280px] max-h-[350px] overflow-auto bg-[#1a1b26]",
                children: [
                    output.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.1
                            },
                            className: `${line.startsWith("#") ? "text-gray-500" : line.startsWith("user@") ? "text-green-400" : line.startsWith(">") ? "text-yellow-400 font-bold" : line.startsWith("✅") ? "text-green-400" : line.startsWith("💰") || line.startsWith("🎉") || line.startsWith("💡") ? "text-purple-400" : line.includes("████") ? "text-cyan-400" : "text-gray-300"}`,
                            children: line || "\u00A0"
                        }, i, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this)),
                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-400 animate-pulse",
                        children: "▊"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 389,
                        columnNumber: 22
                    }, this),
                    isUpdating && currentPackage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "mt-2 mb-2 p-3 bg-[#24283b] rounded-lg border border-purple-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400 text-xs",
                                        children: [
                                            "📦 Téléchargement de ",
                                            currentPackage.name,
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-xs",
                                        children: currentPackage.size
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-2 bg-gray-700 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full bg-gradient-to-r from-green-500 to-emerald-400",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${updateProgress}%`
                                    },
                                    transition: {
                                        duration: 0.1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-xs",
                                        children: [
                                            "Version: ",
                                            currentPackage.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 text-xs font-mono",
                                        children: [
                                            Math.round(updateProgress),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 text-gray-500 text-xs",
                                children: [
                                    "Package ",
                                    packageIndex + 1,
                                    " / ",
                                    scenario.packages?.length || 0
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showQuestion && !answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "mt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-yellow-400 font-bold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-pulse",
                                            children: "❯"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        scenario.question
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-2",
                                    children: scenario.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            whileTap: {
                                                scale: 0.95
                                            },
                                            onClick: ()=>handleChoice(choice),
                                            className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/20",
                                            children: [
                                                "[",
                                                choice.key.toUpperCase(),
                                                "] ",
                                                choice.label
                                            ]
                                        }, choice.key, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-xs mt-2",
                                    children: "💡 Cliquez sur un bouton ou appuyez sur la touche correspondante"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    answered && !isUpdating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1
                        },
                        className: "mt-4 pt-4 border-t border-purple-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: nextScenario,
                            className: "px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors",
                            children: "➡️ Scénario suivant"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 text-white text-xs flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            "🐧 Linux — Vous êtes libre de personnaliser comme vous voulez !"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-200",
                        children: "UTF-8 | bash"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 480,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LinuxTerminal;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoWidget",
    ()=>InfoWidget,
    "LinuxWidgets",
    ()=>LinuxWidgets,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function InfoWidget({ icon, title, value, description, color = "green" }) {
    const colorClasses = {
        green: "text-green-400",
        blue: "text-blue-400",
        purple: "text-purple-400",
        yellow: "text-yellow-400",
        orange: "text-orange-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white flex-1 min-w-[180px] hover:bg-white/15 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs opacity-70 mb-1 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `font-bold ${colorClasses[color] || colorClasses.green}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs mt-2 opacity-70",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function LinuxWidgets() {
    const widgets = [
        {
            icon: "🔄",
            title: "Mises à jour",
            value: "Choisies, pas subies",
            description: "Vous décidez quand et quoi mettre à jour",
            color: "green"
        },
        {
            icon: "🔒",
            title: "Données personnelles",
            value: "Stockées en local",
            description: "Respect total du RGPD",
            color: "blue"
        },
        {
            icon: "💻",
            title: "Matériel",
            value: "PC de 15 ans ? OK !",
            description: "Linux redonne vie aux vieux PC",
            color: "purple"
        },
        {
            icon: "🛡️",
            title: "Sécurité",
            value: "Open Source = Auditable",
            description: "Code vérifiable par tous",
            color: "yellow"
        },
        {
            icon: "💰",
            title: "Coût",
            value: "0€ de licences",
            description: "Tout est gratuit et légal",
            color: "orange"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 flex-wrap",
        children: widgets.map((widget, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoWidget, {
                ...widget
            }, i, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                lineNumber: 74,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LinuxWidgets;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetCounter",
    ()=>BudgetCounter,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function BudgetCounter({ amount, isPositive = false, label = "Budget de l'État" }) {
    const [displayAmount, setDisplayAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(amount);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastChange, setLastChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const diff = amount - displayAmount;
        if (Math.abs(diff) > 0) {
            setIsAnimating(true);
            setLastChange(diff);
            // Shake effect quand l'argent diminue
            if (diff < 0) {
                setShake(true);
                setTimeout(()=>setShake(false), 500);
            }
            const step = diff / 20;
            const interval = setInterval(()=>{
                setDisplayAmount((prev)=>{
                    const next = prev + step;
                    if (step > 0 && next >= amount || step < 0 && next <= amount) {
                        clearInterval(interval);
                        setIsAnimating(false);
                        return amount;
                    }
                    return next;
                });
            }, 50);
            return ()=>clearInterval(interval);
        }
    }, [
        amount
    ]);
    const formattedAmount = Math.floor(displayAmount).toLocaleString("fr-FR");
    // Calculer le pourcentage pour la barre de progression (basé sur 50M max)
    const percentage = Math.min(100, Math.max(0, displayAmount / 50000000 * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0.9,
            opacity: 0,
            x: 50
        },
        animate: {
            scale: 1,
            opacity: 1,
            x: 0,
            rotate: shake ? [
                0,
                -2,
                2,
                -2,
                2,
                0
            ] : 0
        },
        transition: {
            type: "spring",
            rotate: {
                duration: 0.5
            }
        },
        className: `
        relative overflow-hidden rounded-2xl p-5 text-white shadow-2xl border-2
        min-w-[280px]
        ${isPositive ? "bg-gradient-to-br from-green-800 via-green-900 to-emerald-950 border-green-400 shadow-green-500/30" : "bg-gradient-to-br from-red-800 via-red-900 to-red-950 border-red-400 shadow-red-500/30"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent",
                animate: {
                    x: [
                        "-200%",
                        "200%"
                    ]
                },
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -right-4 -top-4 text-7xl opacity-20",
                animate: {
                    rotate: isAnimating ? [
                        0,
                        10,
                        -10,
                        0
                    ] : 0,
                    scale: isAnimating ? [
                        1,
                        1.1,
                        1
                    ] : 1
                },
                transition: {
                    duration: 0.5
                },
                children: isPositive ? "🏦" : "💸"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: isAnimating ? {
                    scale: [
                        1,
                        1.02,
                        1
                    ]
                } : {},
                transition: {
                    duration: 0.3
                },
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-2xl",
                                animate: isAnimating && !isPositive ? {
                                    y: [
                                        0,
                                        -5,
                                        0
                                    ],
                                    rotate: [
                                        0,
                                        -20,
                                        0
                                    ]
                                } : {},
                                transition: {
                                    duration: 0.3,
                                    repeat: isAnimating ? 3 : 0
                                },
                                children: isPositive ? "💰" : "🔥"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium opacity-90",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `
            text-3xl font-black font-mono tracking-tight
            ${isPositive ? "text-green-200" : "text-red-200"}
          `,
                        animate: isAnimating ? {
                            textShadow: isPositive ? [
                                "0 0 10px rgba(34,197,94,0)",
                                "0 0 20px rgba(34,197,94,0.8)",
                                "0 0 10px rgba(34,197,94,0)"
                            ] : [
                                "0 0 10px rgba(239,68,68,0)",
                                "0 0 20px rgba(239,68,68,0.8)",
                                "0 0 10px rgba(239,68,68,0)"
                            ]
                        } : {},
                        transition: {
                            duration: 0.5
                        },
                        children: [
                            formattedAmount,
                            " €"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-2 rounded-full overflow-hidden ${isPositive ? "bg-green-950" : "bg-red-950"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `h-full rounded-full ${isPositive ? "bg-gradient-to-r from-green-400 to-emerald-300" : "bg-gradient-to-r from-red-400 to-orange-400"}`,
                                initial: {
                                    width: 0
                                },
                                animate: {
                                    width: `${percentage}%`
                                },
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isAnimating && Math.abs(lastChange) > 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: `
                absolute -top-3 -right-3 px-3 py-1 rounded-full text-sm font-bold
                ${lastChange > 0 ? "bg-green-400 text-green-900" : "bg-red-400 text-red-900"}
                shadow-lg
              `,
                            children: [
                                lastChange > 0 ? "+" : "",
                                Math.floor(lastChange).toLocaleString("fr-FR"),
                                " €"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
          text-sm mt-1 flex items-center gap-2 font-medium
          ${isPositive ? "text-green-300" : "text-red-300"}
        `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                animate: isAnimating ? {
                                    y: isPositive ? [
                                        0,
                                        -4,
                                        0
                                    ] : [
                                        0,
                                        4,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ]
                                } : {},
                                transition: {
                                    repeat: isAnimating ? Infinity : 0,
                                    duration: 0.4
                                },
                                className: "text-lg",
                                children: isPositive ? "📈" : "📉"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isPositive ? "Économies en cours ! 🎉" : "Hémorragie financière... 💀"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    !isPositive && displayAmount < 20000000 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: [
                                0.5,
                                1,
                                0.5
                            ]
                        },
                        transition: {
                            duration: 1,
                            repeat: Infinity
                        },
                        className: "mt-2 text-xs text-yellow-300 bg-yellow-900/50 rounded px-2 py-1",
                        children: "⚠️ Budget critique ! Microsoft vous ruine !"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = BudgetCounter;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notification",
    ()=>Notification,
    "NotificationStack",
    ()=>NotificationStack,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Notification({ id, message, type = "info", onDismiss, autoDismiss = true }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Animation d'entrée
        requestAnimationFrame(()=>setIsVisible(true));
        // Auto-dismiss après 5 secondes
        if (autoDismiss) {
            const timeout = setTimeout(()=>{
                setIsVisible(false);
                setTimeout(()=>onDismiss?.(id), 300);
            }, 5000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        id,
        autoDismiss,
        onDismiss
    ]);
    const typeStyles = {
        error: "bg-red-800/90 border-red-600",
        success: "bg-green-800/90 border-green-600",
        warning: "bg-yellow-800/90 border-yellow-600",
        info: "bg-blue-800/90 border-blue-600"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        text-white px-4 py-3 rounded-lg shadow-lg text-sm border
        transition-all duration-300 transform
        ${typeStyles[type] || typeStyles.info}
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg",
                    children: [
                        type === "error" && "❌",
                        type === "success" && "✅",
                        type === "warning" && "⚠️",
                        type === "info" && "ℹ️"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setIsVisible(false);
                        setTimeout(()=>onDismiss?.(id), 300);
                    },
                    className: "text-white/70 hover:text-white",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function NotificationStack({ notifications, onDismiss, isPositive = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 max-w-sm",
        children: notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Notification, {
                id: notif.id,
                message: notif.message,
                type: isPositive ? "success" : "error",
                onDismiss: onDismiss
            }, notif.id, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
                lineNumber: 78,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Notification;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemMonitor",
    ()=>SystemMonitor,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SystemMonitor({ cpuUsage = 98, memoryUsage = 87, diskUsage = 95, fanSpeed = "MAX", isHealthy = false }) {
    const [animatedCpu, setAnimatedCpu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(cpuUsage);
    // Faire fluctuer le CPU de manière réaliste
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHealthy) {
            const interval = setInterval(()=>{
                setAnimatedCpu((prev)=>{
                    const fluctuation = (Math.random() - 0.3) * 10;
                    return Math.min(100, Math.max(80, prev + fluctuation));
                });
            }, 500);
            return ()=>clearInterval(interval);
        } else {
            setAnimatedCpu(cpuUsage);
        }
    }, [
        isHealthy,
        cpuUsage
    ]);
    if (isHealthy) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm flex items-center gap-3 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "✅ Système stable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "🌡️ CPU: ",
                        Math.floor(animatedCpu),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "💾 RAM: 23%"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "🔇 Ventilateur: Silencieux"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black/50 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-3 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-spin",
                        children: "🌀"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Ventilateur: ",
                            fanSpeed
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: animatedCpu > 90 ? "text-red-400 font-bold" : "text-yellow-400",
                children: [
                    "🔥 CPU: ",
                    Math.floor(animatedCpu),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: memoryUsage > 85 ? "text-red-400" : "text-yellow-400",
                children: [
                    "💾 RAM: ",
                    memoryUsage,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: diskUsage > 90 ? "text-red-400" : "text-yellow-400",
                children: [
                    "💿 Disque: ",
                    diskUsage,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = SystemMonitor;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionScreen",
    ()=>TransitionScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function TransitionScreen({ onComplete, duration = 2000 }) {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [statusText, setStatusText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Initialisation...");
    const bootMessages = [
        "Libération du système en cours...",
        "Suppression des bloatwares...",
        "Récupération de votre vie privée...",
        "Installation des libertés numériques...",
        "Activation du bon sens...",
        "Bienvenue dans le monde libre !"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const progressInterval = setInterval(()=>{
            setProgress((prev)=>{
                const next = prev + 2;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return next;
            });
        }, duration / 50);
        return ()=>clearInterval(progressInterval);
    }, [
        duration,
        onComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const messageIndex = Math.floor(progress / 100 * bootMessages.length);
        setStatusText(bootMessages[Math.min(messageIndex, bootMessages.length - 1)]);
    }, [
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixRain, {}, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-8xl mb-8 animate-bounce z-10",
                children: "🐧"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-400 text-xl font-mono mb-6 z-10",
                children: statusText
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 h-2 bg-gray-800 rounded-full overflow-hidden z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-green-500 to-green-300 transition-all duration-100",
                    style: {
                        width: `${progress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-400 font-mono mt-4 z-10",
                children: [
                    progress,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-8 text-green-500/50 font-mono text-xs z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Started Linux liberation service"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Removed Microsoft telemetry"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Restored user freedom"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Enabled privacy mode"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function MatrixRain() {
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const cols = [];
        for(let i = 0; i < 50; i++){
            cols.push({
                x: i * 20,
                chars: Array.from({
                    length: 30
                }, ()=>chars[Math.floor(Math.random() * chars.length)]),
                speed: 0.5 + Math.random() * 1.5,
                offset: Math.random() * 100
            });
        }
        setColumns(cols);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 font-mono text-green-500 text-sm overflow-hidden",
        children: columns.map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute animate-matrix-fall",
                style: {
                    left: col.x,
                    animationDuration: `${3 / col.speed}s`,
                    animationDelay: `-${col.offset}s`
                },
                children: col.chars.map((char, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opacity-70",
                        style: {
                            opacity: 1 - j * 0.03
                        },
                        children: char
                    }, j, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this))
            }, i, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 102,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = TransitionScreen;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroScreen",
    ()=>IntroScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
// --- CONFIGURATION ---
const PARTICLES = [
    {
        left: "5%",
        top: "10%",
        delay: 0
    },
    {
        left: "15%",
        top: "25%",
        delay: 0.2
    },
    {
        left: "25%",
        top: "15%",
        delay: 0.4
    },
    {
        left: "35%",
        top: "30%",
        delay: 0.6
    },
    {
        left: "45%",
        top: "5%",
        delay: 0.8
    },
    {
        left: "55%",
        top: "20%",
        delay: 1
    },
    {
        left: "65%",
        top: "35%",
        delay: 0.1
    },
    {
        left: "75%",
        top: "10%",
        delay: 0.3
    },
    {
        left: "85%",
        top: "25%",
        delay: 0.5
    },
    {
        left: "95%",
        top: "15%",
        delay: 0.7
    },
    {
        left: "10%",
        top: "50%",
        delay: 0.9
    },
    {
        left: "20%",
        top: "60%",
        delay: 0.15
    },
    {
        left: "30%",
        top: "70%",
        delay: 0.35
    },
    {
        left: "40%",
        top: "55%",
        delay: 0.55
    },
    {
        left: "50%",
        top: "75%",
        delay: 0.75
    },
    {
        left: "60%",
        top: "50%",
        delay: 0.95
    },
    {
        left: "70%",
        top: "65%",
        delay: 0.05
    },
    {
        left: "80%",
        top: "55%",
        delay: 0.25
    },
    {
        left: "90%",
        top: "45%",
        delay: 0.45
    },
    {
        left: "8%",
        top: "80%",
        delay: 0.65
    },
    {
        left: "18%",
        top: "90%",
        delay: 0.85
    },
    {
        left: "28%",
        top: "85%",
        delay: 0.12
    },
    {
        left: "38%",
        top: "75%",
        delay: 0.32
    },
    {
        left: "48%",
        top: "90%",
        delay: 0.52
    },
    {
        left: "58%",
        top: "80%",
        delay: 0.72
    },
    {
        left: "68%",
        top: "70%",
        delay: 0.92
    },
    {
        left: "78%",
        top: "85%",
        delay: 0.08
    },
    {
        left: "88%",
        top: "75%",
        delay: 0.28
    },
    {
        left: "98%",
        top: "65%",
        delay: 0.48
    },
    {
        left: "3%",
        top: "40%",
        delay: 0.68
    }
];
function IntroScreen({ onStart }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const introSteps = [
        {
            icon: "🌍",
            title: "Impact Écologique",
            highlight: "400 millions d'ordinateurs",
            text: "sont jetés chaque année à cause de l'obsolescence programmée.",
            color: "from-green-400 to-emerald-600"
        },
        {
            icon: "💸",
            title: "Gaspillage Public",
            highlight: "Des milliards d'euros",
            text: "dépensés en licences Microsoft, alors qu'une alternative gratuite existe.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: "🐧",
            title: "La Solution",
            highlight: "La Gendarmerie Nationale",
            text: "a migré 37 000 postes vers Linux. Résultat : 2 millions €/an d'économies.",
            color: "from-blue-400 to-cyan-500"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step < introSteps.length) {
            const timeout = setTimeout(()=>{
                setStep((prev)=>prev + 1);
            }, 2000);
            return ()=>clearTimeout(timeout);
        } else {
            setShowButton(true);
        }
    }, [
        step,
        introSteps.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#050508] relative overflow-hidden flex flex-col items-center justify-center font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050508_90%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: PARTICLES.map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]",
                        style: {
                            left: particle.left,
                            top: particle.top
                        },
                        animate: {
                            y: [
                                0,
                                -30,
                                0
                            ],
                            opacity: [
                                0.1,
                                0.5,
                                0.1
                            ],
                            scale: [
                                1,
                                1.5,
                                1
                            ]
                        },
                        transition: {
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-2xl px-6 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -50,
                            filter: "blur(10px)"
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        className: "mb-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-6xl font-black tracking-tight mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]",
                                        children: "L'Écran Bleu"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "sm:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "de la Libération"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2 text-blue-200/60 text-sm sm:text-base uppercase tracking-widest font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    "Initialisation du système NIRD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-4 min-h-[340px]",
                        children: introSteps.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: index < step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -50,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 12
                                    },
                                    className: "group relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-xl blur-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center gap-5 p-4 rounded-xl border border-white/10 bg-[#0f0f1a]/60 backdrop-blur-md shadow-lg hover:border-white/20 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)]`,
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-bold text-lg leading-tight mb-1",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-sm leading-snug",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`,
                                                                    children: item.highlight
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                                    lineNumber: 162,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                item.text
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-24 w-full flex justify-center items-center mt-6 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    bounce: 0.5
                                },
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onStart,
                                        className: "relative px-8 py-4 bg-black rounded-xl leading-none flex items-center divide-x divide-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center space-x-3 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl group-hover:-translate-y-1 transition-transform duration-300",
                                                        children: "🚀"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-100 font-bold text-lg tracking-wider group-hover:text-white transition-colors",
                                                        children: "LANCER LA SIMULATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pl-4 text-purple-400 group-hover:text-purple-300 transition-colors text-sm font-mono",
                                                children: "./start.sh"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.5
                                        },
                                        className: "absolute -bottom-8 left-0 right-0 text-center text-xs text-gray-500 font-mono",
                                        children: "Attention: Risque de prise de conscience élevé"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1
                },
                onClick: onStart,
                className: "absolute bottom-6 right-6 text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors z-20",
                children: "Skip Intro →"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-blue-200 text-xs font-medium shadow-lg",
                children: "🌙 Nuit de l'Info 2025"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-6 bottom-1/2 -translate-y-1/2 flex flex-col gap-3 hidden sm:flex",
                children: introSteps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-1.5 transition-all duration-500 rounded-full ${index < step ? "h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "h-1.5 bg-gray-800"}`
                    }, index, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = IntroScreen;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndingScreen",
    ()=>EndingScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
// --- CONFIGURATION ---
const STAR_POSITIONS = [
    {
        x: 5,
        y: 10,
        size: 2,
        delay: 0
    },
    {
        x: 15,
        y: 25,
        size: 3,
        delay: 0.5
    },
    {
        x: 25,
        y: 8,
        size: 2,
        delay: 1
    },
    {
        x: 35,
        y: 40,
        size: 2,
        delay: 0.3
    },
    {
        x: 45,
        y: 15,
        size: 3,
        delay: 0.8
    },
    {
        x: 55,
        y: 35,
        size: 2,
        delay: 1.2
    },
    {
        x: 65,
        y: 20,
        size: 3,
        delay: 0.2
    },
    {
        x: 75,
        y: 45,
        size: 2,
        delay: 0.6
    },
    {
        x: 85,
        y: 12,
        size: 2,
        delay: 1.5
    },
    {
        x: 95,
        y: 30,
        size: 3,
        delay: 0.4
    },
    {
        x: 10,
        y: 55,
        size: 2,
        delay: 0.9
    },
    {
        x: 20,
        y: 70,
        size: 2,
        delay: 1.1
    },
    {
        x: 30,
        y: 60,
        size: 3,
        delay: 0.7
    },
    {
        x: 40,
        y: 80,
        size: 2,
        delay: 1.3
    },
    {
        x: 50,
        y: 65,
        size: 3,
        delay: 0.1
    },
    {
        x: 60,
        y: 75,
        size: 2,
        delay: 0.85
    },
    {
        x: 70,
        y: 85,
        size: 2,
        delay: 1.4
    },
    {
        x: 80,
        y: 58,
        size: 3,
        delay: 0.55
    },
    {
        x: 90,
        y: 72,
        size: 2,
        delay: 1.05
    },
    {
        x: 12,
        y: 88,
        size: 2,
        delay: 0.35
    }
];
const CINEMATIC_PHASES = [
    {
        id: "blackout",
        duration: 1500
    },
    {
        id: "title",
        duration: 4000
    },
    {
        id: "savings",
        duration: 4500
    },
    {
        id: "impact",
        duration: 4500
    },
    {
        id: "quote",
        duration: 5000
    },
    {
        id: "credits",
        duration: 6000
    },
    {
        id: "cta",
        duration: 0
    }
];
function EndingScreen({ budget = 500, moneySaved, onRestart, onNird }) {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlay, setIsAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const actualSavings = moneySaved || 500 - budget;
    const actualBudget = budget;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAutoPlay) return;
        const currentPhase = CINEMATIC_PHASES[phase];
        if (currentPhase.duration === 0) return;
        const timer = setTimeout(()=>{
            setPhase((prev)=>Math.min(prev + 1, CINEMATIC_PHASES.length - 1));
        }, currentPhase.duration);
        return ()=>clearTimeout(timer);
    }, [
        phase,
        isAutoPlay
    ]);
    const skipToEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsAutoPlay(false);
        setPhase(CINEMATIC_PHASES.length - 1);
    }, []);
    const currentPhaseId = CINEMATIC_PHASES[phase].id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#050508] overflow-hidden font-sans text-white select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: STAR_POSITIONS.map((star, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute rounded-full bg-white shadow-[0_0_4px_white]",
                        style: {
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size
                        },
                        animate: {
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ],
                            scale: [
                                1,
                                1.2,
                                1
                            ]
                        },
                        transition: {
                            duration: 3 + Math.random() * 2,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isAutoPlay && phase < CINEMATIC_PHASES.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 2
                    },
                    onClick: skipToEnd,
                    className: "absolute top-8 right-8 z-50 group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/10 transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-mono text-gray-400 group-hover:text-white",
                            children: "SKIP_INTRO"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400 group-hover:translate-x-1 transition-transform",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    currentPhaseId === "blackout" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1.5,
                            ease: "easeIn"
                        },
                        className: "absolute inset-0 bg-black z-50"
                    }, "blackout", false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 1.1,
                            filter: "blur(10px)"
                        },
                        transition: {
                            duration: 1
                        },
                        className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    rotate: [
                                        0,
                                        10,
                                        -10,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "text-8xl mb-8 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]",
                                children: "🐧"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-4",
                                children: "LIBÉRATION"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-green-400 tracking-[0.2em] text-sm md:text-base",
                                children: [
                                    "SYSTEM_STATUS: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "UNLOCKED"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 159,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "title", true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "savings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -50
                        },
                        className: "absolute inset-0 flex flex-col items-center justify-center p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-xl mb-6 uppercase tracking-widest",
                                children: "Économies Réalisées"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0.5
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            bounce: 0.5
                                        },
                                        className: "relative text-7xl md:text-9xl font-mono font-bold text-white drop-shadow-2xl",
                                        children: [
                                            actualSavings.toLocaleString("fr-FR"),
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1
                                },
                                className: "mt-8 flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "Budget restant: "
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-green-400 font-bold",
                                        children: [
                                            actualBudget,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "savings", true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "impact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.95
                        },
                        className: "absolute inset-0 flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl",
                            children: [
                                {
                                    icon: "💵",
                                    val: "0€",
                                    label: "Coût Licence",
                                    col: "text-green-400"
                                },
                                {
                                    icon: "🔓",
                                    val: "100%",
                                    label: "Open Source",
                                    col: "text-blue-400"
                                },
                                {
                                    icon: "🧠",
                                    val: "+99",
                                    label: "QI Technique",
                                    col: "text-purple-400"
                                }
                            ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: i * 0.2
                                    },
                                    className: "bg-[#0f0f1a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center group hover:border-white/20 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-5xl mb-4 group-hover:scale-110 transition-transform",
                                            children: stat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-6xl font-mono font-bold mb-2 ${stat.col}`,
                                            children: stat.val
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 244,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 uppercase tracking-widest text-sm",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, "impact", false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "quote" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "absolute inset-0 flex items-center justify-center p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-12 -left-8 text-8xl text-white/10 font-serif",
                                    children: "“"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl md:text-5xl font-light leading-snug text-center text-gray-100",
                                    children: [
                                        "Le logiciel libre est une question de",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400 font-semibold",
                                            children: "liberté"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        ", pas de prix.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        "Libre comme la",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-400 font-semibold",
                                            children: "liberté d'expression"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        ", pas comme une bière gratuite."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block px-4 py-1 border border-white/20 rounded-full text-sm text-gray-400 font-mono",
                                        children: "— Richard Stallman"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, "quote", false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "credits" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                y: 50
                            },
                            animate: {
                                y: -50
                            },
                            transition: {
                                duration: 6,
                                ease: "linear"
                            },
                            className: "text-center space-y-12",
                            children: [
                                {
                                    sub: "Présenté par",
                                    title: "L'Équipe NIRD",
                                    col: "text-white"
                                },
                                {
                                    sub: "Dans le cadre de",
                                    title: "Nuit de l'Info 2025",
                                    col: "text-purple-400"
                                },
                                {
                                    sub: "Simulation",
                                    title: "L'Écran Bleu",
                                    col: "text-blue-400"
                                }
                            ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-xs uppercase tracking-[0.3em] mb-3",
                                            children: c.sub
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-3xl font-bold ${c.col}`,
                                            children: c.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    }, "credits", false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    currentPhaseId === "cta" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "absolute inset-0 flex flex-col items-center justify-center p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    y: -20,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-7xl font-black mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",
                                            children: "MISSION ACCOMPLIE"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-lg",
                                        children: "Votre système est maintenant libre."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mb-12",
                                children: [
                                    {
                                        icon: "🌐",
                                        label: "Site NIRD",
                                        sub: "Découvrir",
                                        action: onNird,
                                        color: "hover:border-blue-500/50 hover:bg-blue-500/10"
                                    },
                                    {
                                        icon: "🐧",
                                        label: "Installer Linux",
                                        sub: "Get Ubuntu",
                                        link: "https://ubuntu.com/download",
                                        color: "hover:border-orange-500/50 hover:bg-orange-500/10"
                                    },
                                    {
                                        icon: "📖",
                                        label: "Philosophie",
                                        sub: "GNU Project",
                                        link: "https://www.gnu.org/philosophy/free-sw.fr.html",
                                        color: "hover:border-green-500/50 hover:bg-green-500/10"
                                    },
                                    {
                                        icon: "↺",
                                        label: "Rejouer",
                                        sub: "Reset System",
                                        action: onRestart,
                                        color: "hover:border-purple-500/50 hover:bg-purple-500/10"
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4 + i * 0.1
                                        },
                                        whileHover: {
                                            scale: 1.02,
                                            y: -2
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        onClick: ()=>item.action ? item.action() : window.open(item.link, "_blank"),
                                        className: `relative p-6 rounded-2xl bg-[#0f0f1a]/80 backdrop-blur-xl border border-white/10 text-left transition-all duration-300 group ${item.color}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-4 group-hover:scale-110 transition-transform duration-300",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-lg text-white mb-1",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 font-mono uppercase tracking-wider",
                                                children: item.sub
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1
                                },
                                className: "flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8",
                                children: [
                                    {
                                        label: "Budget Préservé",
                                        val: `${actualBudget}€`,
                                        col: "text-green-400"
                                    },
                                    {
                                        label: "Économies",
                                        val: `${actualSavings}€`,
                                        col: "text-purple-400"
                                    },
                                    {
                                        label: "Statut",
                                        val: "LIBRE",
                                        col: "text-blue-400"
                                    }
                                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-2xl font-mono font-bold ${s.col}`,
                                                children: s.val
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 443,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 uppercase tracking-widest mt-1",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "cta", true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-0 right-0 flex justify-center gap-3",
                children: CINEMATIC_PHASES.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-1 rounded-full transition-all duration-500 ${i <= phase ? i === phase ? "w-8 bg-purple-500 shadow-[0_0_10px_#a855f7]" : "w-2 bg-gray-600" : "w-2 bg-gray-800"}`
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 457,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = EndingScreen;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LaggyMouse",
    ()=>LaggyMouse,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useLaggyMouse",
    ()=>useLaggyMouse,
    "useMoneyDrain",
    ()=>useMoneyDrain,
    "useSlowdown",
    ()=>useSlowdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function useLaggyMouse(isEnabled = true, lagAmount = 150) {
    const [realPos, setRealPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [laggyPos, setLaggyPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isStuttering, setIsStuttering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isEnabled) return;
        const handleMouseMove = (e)=>{
            setRealPos({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, [
        isEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isEnabled) return;
        // Random stuttering effect - moins fréquent et plus subtil
        const stutterInterval = setInterval(()=>{
            if (Math.random() > 0.85) {
                setIsStuttering(true);
                setTimeout(()=>setIsStuttering(false), 100 + Math.random() * 200);
            }
        }, 2000);
        const timeout = setTimeout(()=>{
            if (!isStuttering) {
                setLaggyPos(realPos);
            }
        }, lagAmount + (isStuttering ? 500 : 0));
        return ()=>{
            clearTimeout(timeout);
            clearInterval(stutterInterval);
        };
    }, [
        realPos,
        isEnabled,
        lagAmount,
        isStuttering
    ]);
    return {
        realPos,
        laggyPos,
        isStuttering
    };
}
function LaggyMouse({ isEnabled }) {
    const { laggyPos, isStuttering } = useLaggyMouse(isEnabled, 150);
    if (!isEnabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed w-6 h-6 pointer-events-none z-[9999] ${isStuttering ? "opacity-50" : ""}`,
        style: {
            left: laggyPos.x - 2,
            top: laggyPos.y - 2,
            transition: isStuttering ? "none" : "all 0.2s ease-out"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                className: "drop-shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.35-.92L6.35 2.79a.5.5 0 0 0-.85.42z",
                    fill: "white",
                    stroke: "black",
                    strokeWidth: "1"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            isStuttering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -right-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function useSlowdown(isEnabled = true) {
    const [isFrozen, setIsFrozen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [freezeCount, setFreezeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isEnabled) return;
        // Gel aléatoire de l'interface - très subtil
        const freezeInterval = setInterval(()=>{
            if (Math.random() > 0.9) {
                // 10% de chance - très rare
                setIsFrozen(true);
                setFreezeCount((prev)=>prev + 1);
                // Freeze très court
                setTimeout(()=>setIsFrozen(false), 200 + Math.random() * 400);
            }
        }, 2000); // Toutes les 2 secondes
        return ()=>clearInterval(freezeInterval);
    }, [
        isEnabled
    ]);
    return {
        isFrozen,
        freezeCount
    };
}
function useMoneyDrain(isEnabled = true, initialAmount = 50000000) {
    const [money, setMoney] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialAmount);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isEnabled) return;
        // Drain BEAUCOUP plus rapide
        const drainInterval = setInterval(()=>{
            setMoney((prev)=>Math.max(0, prev - 50000 - Math.random() * 100000));
        }, 300); // Plus rapide !
        return ()=>clearInterval(drainInterval);
    }, [
        isEnabled
    ]);
    const bigExpense = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount, message)=>{
        setMoney((prev)=>Math.max(0, prev - amount));
        return message;
    }, []);
    const addMoney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((amount)=>{
        setMoney((prev)=>prev + amount);
    }, []);
    return {
        money,
        setMoney,
        bigExpense,
        addMoney
    };
}
const __TURBOPACK__default__export__ = {
    useLaggyMouse,
    LaggyMouse,
    useSlowdown,
    useMoneyDrain
};
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOUNDS",
    ()=>SOUNDS,
    "default",
    ()=>SoundManager,
    "useSoundManager",
    ()=>useSoundManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const SOUNDS = {
    fanNoise: "https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3",
    windowsError: "https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3",
    windowsPopup: "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3",
    windowsStartup: "https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3",
    success: "https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3",
    linuxBoot: "https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3",
    click: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    alert: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
    notification: "https://assets.mixkit.co/active_storage/sfx/2867/2867-preview.mp3",
    warning: "https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3"
};
function useSoundManager() {
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const fanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fanIntensity, setFanIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Précharger les sons
        Object.entries(SOUNDS).forEach(([key, url])=>{
            const audio = new Audio(url);
            audio.preload = "auto";
            audioRefs.current[key] = audio;
        });
        return ()=>{
            // Nettoyer tous les sons
            Object.values(audioRefs.current).forEach((audio)=>{
                audio.pause();
                audio.src = "";
            });
        };
    }, []);
    const playSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((soundName, options = {})=>{
        const audio = audioRefs.current[soundName];
        if (audio) {
            audio.volume = options.volume ?? 0.5;
            audio.loop = options.loop ?? false;
            audio.currentTime = 0;
            audio.play().catch(()=>{}); // Ignorer les erreurs autoplay
            return audio;
        }
    }, []);
    const stopSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((soundName)=>{
        const audio = audioRefs.current[soundName];
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }, []);
    const startFanNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (fanRef.current) {
            fanRef.current.pause();
        }
        // Ventilateur plus fort !
        fanRef.current = playSound("fanNoise", {
            loop: true,
            volume: 0.5
        });
        // Augmenter progressivement le volume du ventilateur
        const intensityInterval = setInterval(()=>{
            setFanIntensity((prev)=>{
                const newIntensity = Math.min(prev + 0.05, 0.8);
                if (fanRef.current) {
                    fanRef.current.volume = newIntensity;
                }
                return newIntensity;
            });
        }, 5000);
        return ()=>clearInterval(intensityInterval);
    }, [
        playSound
    ]);
    const stopFanNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (fanRef.current) {
            fanRef.current.pause();
            fanRef.current = null;
        }
        setFanIntensity(0.3);
    }, []);
    const playPopupSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Sons variés pour les popups
        const sounds = [
            "alert",
            "notification",
            "warning"
        ];
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
        playSound(randomSound, {
            volume: 0.5
        });
    }, [
        playSound
    ]);
    const playErrorSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        playSound("windowsError", {
            volume: 0.7
        });
    }, [
        playSound
    ]);
    const playSuccessSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        playSound("success", {
            volume: 0.5
        });
    }, [
        playSound
    ]);
    return {
        playSound,
        stopSound,
        startFanNoise,
        stopFanNoise,
        playPopupSound,
        playErrorSound,
        playSuccessSound,
        fanIntensity
    };
}
function SoundManager({ children, soundManager }) {
    return children;
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Windows Components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-ssr] (ecmascript)");
// Linux Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-ssr] (ecmascript)");
// Shared Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-ssr] (ecmascript)");
// Effects
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-ssr] (ecmascript)");
// Sound
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// États du jeu
const MODES = {
    INTRO: "intro",
    WINDOWS: "windows",
    BLUESCREEN: "bluescreen",
    TRANSITION: "transition",
    LINUX: "linux",
    ENDING: "ending"
};
function Home() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MODES.INTRO);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linuxNotifications, setLinuxNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showTerminal, setShowTerminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTaskManager, setShowTaskManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLinuxMonitor, setShowLinuxMonitor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasInteracted, setHasInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hooks personnalisés
    const { isFrozen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlowdown"])(mode === MODES.WINDOWS);
    const { money, bigExpense, addMoney, setMoney } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMoneyDrain"])(mode === MODES.WINDOWS);
    const soundManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSoundManager"])();
    // Gestionnaire de popups
    const triggerCrash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        soundManager.stopFanNoise();
        soundManager.playErrorSound();
        setMode(MODES.BLUESCREEN);
    }, [
        soundManager
    ]);
    const { popups, closePopup, handleInteract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopupManager"])(mode === MODES.WINDOWS, triggerCrash, soundManager.playPopupSound);
    // Démarrer le son du ventilateur en mode Windows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === MODES.WINDOWS && hasInteracted) {
            soundManager.startFanNoise();
        }
        return ()=>soundManager.stopFanNoise();
    }, [
        mode,
        hasInteracted,
        soundManager
    ]);
    // Ouvrir automatiquement le Task Manager après 5 secondes pour montrer les ressources
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === MODES.WINDOWS && hasInteracted) {
            const timeout = setTimeout(()=>{
                setShowTaskManager(true);
            }, 5000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        mode,
        hasInteracted
    ]);
    // Licence Microsoft après 15 secondes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === MODES.WINDOWS) {
            const timeout = setTimeout(()=>{
                const message = bigExpense(7000000, "💳 Renouvellement licences Microsoft 365... -7 000 000 €");
                setNotifications((prev)=>[
                        ...prev,
                        {
                            id: Date.now(),
                            message,
                            type: "bad"
                        }
                    ]);
                soundManager.playErrorSound();
            }, 15000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        mode,
        bigExpense,
        soundManager
    ]);
    // Économies Linux - UNE SEULE notification avec le total
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === MODES.LINUX) {
            // Une seule notification groupée après 3 secondes
            const totalSavings = 27500000; // Total économisé
            const timeout = setTimeout(()=>{
                addMoney(totalSavings);
                setLinuxNotifications([
                    {
                        id: Date.now(),
                        message: `🎉 Migration réussie ! Total économisé : +${totalSavings.toLocaleString("fr-FR")} €`
                    }
                ]);
                soundManager.playSuccessSound();
            }, 3000);
            return ()=>clearTimeout(timeout);
        }
    }, [
        mode,
        addMoney,
        soundManager
    ]);
    // Démarrer la simulation depuis l'intro
    const startSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMode(MODES.WINDOWS);
    }, []);
    // Gestion du clic pour activer l'audio
    const handleFirstInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!hasInteracted) {
            setHasInteracted(true);
        }
    }, [
        hasInteracted
    ]);
    // Passer à Linux
    const switchToLinux = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMode(MODES.TRANSITION);
    }, []);
    const completeTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMoney(20000000); // Reset du budget initial Linux
        setMode(MODES.LINUX);
        try {
            soundManager.playSuccessSound();
        } catch (e) {
            console.log("Sound error:", e);
        }
        // Aller à l'ending après 90 secondes en mode Linux
        const timer = setTimeout(()=>{
            setMode(MODES.ENDING);
        }, 90000);
        return ()=>clearTimeout(timer);
    }, [
        setMoney,
        soundManager
    ]);
    // Recommencer la simulation
    const restartSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMode(MODES.INTRO);
        setMoney(50000000);
        setNotifications([]);
        setLinuxNotifications([]);
        setShowTerminal(true);
        setShowTaskManager(false);
        setShowLinuxMonitor(false);
        setHasInteracted(false);
    }, [
        setMoney
    ]);
    // Gestion des clics sur les icônes
    const handleWindowsIconClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((icon)=>{
        // Ouvrir le task manager si clic sur l'icône appropriée
        if (icon.name === "Task Manager" || icon.name === "Paramètres") {
            setShowTaskManager(true);
        }
        handleInteract();
        soundManager.playPopupSound();
    }, [
        handleInteract,
        soundManager
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen overflow-hidden select-none",
        onClick: handleFirstInteraction,
        children: [
            mode === MODES.INTRO && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntroScreen"], {
                onStart: startSimulation
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 189,
                columnNumber: 32
            }, this),
            mode === MODES.WINDOWS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `windows-mode w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] ${isFrozen ? "pointer-events-none" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LaggyMouse"], {
                        isEnabled: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    isFrozen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-white/5 z-[9998] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg px-4 py-2 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-800 text-sm",
                                children: "Ne répond pas..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                lineNumber: 205,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 204,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 203,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WindowsDesktop"], {
                        onIconClick: handleWindowsIconClick,
                        isLagging: isFrozen
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WindowsTaskbar"], {
                        cpuUsage: 98,
                        isResponding: !isFrozen
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetCounter"], {
                            amount: money,
                            isPositive: false
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-28 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationStack"], {
                            notifications: notifications,
                            onDismiss: (id)=>setNotifications((prev)=>prev.filter((n)=>n.id !== id))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    popups.map((popup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WindowsPopup"], {
                            ...popup,
                            onClose: closePopup,
                            onInteract: handleInteract
                        }, popup.id, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WindowsTaskManager"], {
                        isOpen: showTaskManager,
                        onClose: ()=>setShowTaskManager(false),
                        onInteract: handleInteract
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-16 left-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemMonitor"], {
                            cpuUsage: 98,
                            memoryUsage: 87,
                            diskUsage: 95,
                            fanSpeed: "MAX"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    !hasInteracted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/50 z-[10000]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-6 text-center max-w-md mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2",
                                    children: "🖥️ Bienvenue dans l'Enfer Windows"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "Cliquez n'importe où pour commencer l'expérience..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: "(Astuce : Essayez de fermer les popups 😈)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 264,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 263,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 193,
                columnNumber: 9
            }, this),
            mode === MODES.BLUESCREEN && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlueScreenOfDeath"], {
                onHackerReady: switchToLinux
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 282,
                columnNumber: 9
            }, this),
            mode === MODES.TRANSITION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionScreen"], {
                onComplete: completeTransition,
                duration: 1000
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            mode === MODES.LINUX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "linux-mode w-full h-full bg-gradient-to-br from-[#2d1b4e] via-[#1a1a2e] to-[#0d1117]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinuxTopBar"], {}, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinuxDesktop"], {
                        onIconClick: (icon)=>{
                            if (icon.name === "Terminal") setShowTerminal(true);
                            if (icon.name === "System Monitor") setShowLinuxMonitor(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-12 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BudgetCounter"], {
                            amount: money,
                            isPositive: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-36 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationStack"], {
                            notifications: linuxNotifications,
                            onDismiss: (id)=>setLinuxNotifications((prev)=>prev.filter((n)=>n.id !== id)),
                            isPositive: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-2xl px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinuxTerminal"], {
                            isOpen: showTerminal,
                            onClose: ()=>setShowTerminal(false)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinuxTaskManager"], {
                        isOpen: showLinuxMonitor,
                        onClose: ()=>setShowLinuxMonitor(false)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-4 right-4 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinuxWidgets"], {}, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SystemMonitor"], {
                            isHealthy: true,
                            cpuUsage: 12
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode(MODES.ENDING),
                            className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105 flex items-center gap-2",
                            children: "🎉 Continuer vers la conclusion"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce z-10",
                        children: "🐧"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            mode === MODES.ENDING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EndingScreen"], {
                moneySaved: money,
                onRestart: restartSimulation
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 363,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0b2ddc83._.js.map