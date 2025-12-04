(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x,
        y
    });
    const [isHanging, setIsHanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const popupInfo = POPUP_TYPES[type] || POPUP_TYPES.UPDATE;
    const messageData = typeof message === "object" ? message : {
        message,
        buttons: [
            "OK",
            "Annuler"
        ]
    };
    // Simulation de freeze aléatoire
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsPopup.useEffect": ()=>{
            if (Math.random() > 0.7) {
                const hangTimeout = setTimeout({
                    "WindowsPopup.useEffect.hangTimeout": ()=>{
                        setIsHanging(true);
                        setTimeout({
                            "WindowsPopup.useEffect.hangTimeout": ()=>setIsHanging(false)
                        }["WindowsPopup.useEffect.hangTimeout"], 1500 + Math.random() * 2000);
                    }
                }["WindowsPopup.useEffect.hangTimeout"], 1000);
                return ({
                    "WindowsPopup.useEffect": ()=>clearTimeout(hangTimeout)
                })["WindowsPopup.useEffect"];
            }
        }
    }["WindowsPopup.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 flex items-center justify-between cursor-move",
                style: {
                    backgroundColor: popupInfo.color
                },
                onMouseDown: ()=>setIsDragging(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: popupInfo.icon
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "text-white hover:bg-white/20 w-7 h-7 flex items-center justify-center rounded transition-colors",
                                disabled: isHanging,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed",
                        children: messageData.message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2 justify-end flex-wrap",
                        children: messageData.buttons.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            isHanging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-white/80 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(WindowsPopup, "053SOqXGH2AepWRVedN+u+bsU98=");
_c = WindowsPopup;
function usePopupManager(isActive, onTriggerCrash, playSound) {
    _s1();
    const [popups, setPopups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [interactionCount, setInteractionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const CRASH_THRESHOLD = 6; // Nombre d'interactions avant crash possible
    // Stocker la ref pour éviter les re-renders
    const crashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onTriggerCrash);
    crashRef.current = onTriggerCrash;
    // Timer de 1min max avant crash automatique
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePopupManager.useEffect": ()=>{
            if (!isActive) return;
            const maxTimeBeforeCrash = setTimeout({
                "usePopupManager.useEffect.maxTimeBeforeCrash": ()=>{
                    crashRef.current?.();
                }
            }["usePopupManager.useEffect.maxTimeBeforeCrash"], 60000); // 60 secondes = 1min
            return ({
                "usePopupManager.useEffect": ()=>clearTimeout(maxTimeBeforeCrash)
            })["usePopupManager.useEffect"];
        }
    }["usePopupManager.useEffect"], [
        isActive
    ]);
    // Générer des popups périodiquement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePopupManager.useEffect": ()=>{
            if (!isActive) return;
            const spawnPopup = {
                "usePopupManager.useEffect.spawnPopup": ()=>{
                    const messageData = POPUP_MESSAGES[Math.floor(Math.random() * POPUP_MESSAGES.length)];
                    const newPopup = {
                        id: Date.now() + Math.random(),
                        type: messageData.type,
                        message: messageData,
                        x: Math.random() * 60 + 5,
                        y: Math.random() * 60 + 5,
                        zIndex: 100 + popups.length
                    };
                    setPopups({
                        "usePopupManager.useEffect.spawnPopup": (prev)=>[
                                ...prev,
                                newPopup
                            ]
                    }["usePopupManager.useEffect.spawnPopup"]);
                    playSound?.();
                }
            }["usePopupManager.useEffect.spawnPopup"];
            // Premier popup après 4 secondes
            const initialTimeout = setTimeout(spawnPopup, 4000);
            // Deuxième popup après 8 secondes
            const secondTimeout = setTimeout(spawnPopup, 8000);
            // Puis toutes les 5-8 secondes (beaucoup plus de temps pour interagir)
            const interval = setInterval({
                "usePopupManager.useEffect.interval": ()=>{
                    spawnPopup();
                    // Très rarement spawn 2 popups d'un coup
                    if (Math.random() > 0.9) {
                        setTimeout(spawnPopup, 800);
                    }
                }
            }["usePopupManager.useEffect.interval"], 5000 + Math.random() * 3000);
            return ({
                "usePopupManager.useEffect": ()=>{
                    clearTimeout(initialTimeout);
                    clearTimeout(secondTimeout);
                    clearInterval(interval);
                }
            })["usePopupManager.useEffect"];
        }
    }["usePopupManager.useEffect"], [
        isActive,
        playSound
    ]);
    const closePopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePopupManager.useCallback[closePopup]": (id)=>{
            setInteractionCount({
                "usePopupManager.useCallback[closePopup]": (prev)=>{
                    const newCount = prev + 1;
                    // 50% de chance de crash après le seuil
                    if (newCount >= CRASH_THRESHOLD && Math.random() > 0.5) {
                        crashRef.current?.();
                    }
                    return newCount;
                }
            }["usePopupManager.useCallback[closePopup]"]);
            setPopups({
                "usePopupManager.useCallback[closePopup]": (prev)=>prev.filter({
                        "usePopupManager.useCallback[closePopup]": (p)=>p.id !== id
                    }["usePopupManager.useCallback[closePopup]"])
            }["usePopupManager.useCallback[closePopup]"]);
        }
    }["usePopupManager.useCallback[closePopup]"], []);
    const handleInteract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePopupManager.useCallback[handleInteract]": ()=>{
            setInteractionCount({
                "usePopupManager.useCallback[handleInteract]": (prev)=>{
                    const newCount = prev + 1;
                    // Crash garanti si on dépasse le seuil + 2
                    if (newCount >= CRASH_THRESHOLD + 2) {
                        crashRef.current?.();
                    }
                    return newCount;
                }
            }["usePopupManager.useCallback[handleInteract]"]);
        }
    }["usePopupManager.useCallback[handleInteract]"], []);
    return {
        popups,
        closePopup,
        handleInteract,
        interactionCount
    };
}
_s1(usePopupManager, "dtWfHuFCSVuzo5ydF1ZBeAXk9nU=");
const __TURBOPACK__default__export__ = WindowsPopup;
var _c;
__turbopack_context__.k.register(_c, "WindowsPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
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
function DesktopIcon({ name, icon, onClick, isLoading = false, bloatware = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        flex flex-col items-center justify-center p-2 rounded 
        hover:bg-white/10 cursor-pointer transition-all
        ${isLoading ? "animate-pulse" : ""}
        ${bloatware ? "opacity-80" : ""}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl drop-shadow-lg",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-xs text-center mt-1 drop-shadow-lg max-w-[70px] truncate",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mt-1"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = DesktopIcon;
function WindowsDesktop({ onIconClick, isLagging = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 grid grid-cols-4 sm:grid-cols-6 gap-1 max-w-[500px] ${isLagging ? "pointer-events-none" : ""}`,
        children: DESKTOP_ICONS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopIcon, {
                name: item.name,
                icon: item.icon,
                bloatware: item.bloatware,
                onClick: ()=>onIconClick?.(item)
            }, i, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c1 = WindowsDesktop;
const __TURBOPACK__default__export__ = WindowsDesktop;
var _c, _c1;
__turbopack_context__.k.register(_c, "DesktopIcon");
__turbopack_context__.k.register(_c1, "WindowsDesktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WindowsTaskbar",
    ()=>WindowsTaskbar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WindowsTaskbar({ time, cpuUsage = 98, isResponding = true }) {
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(time || new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsTaskbar.useEffect": ()=>{
            const interval = setInterval({
                "WindowsTaskbar.useEffect.interval": ()=>{
                    setCurrentTime(new Date());
                }
            }["WindowsTaskbar.useEffect.interval"], 1000);
            return ({
                "WindowsTaskbar.useEffect": ()=>clearInterval(interval)
            })["WindowsTaskbar.useEffect"];
        }
    }["WindowsTaskbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-0 left-0 right-0 h-12 bg-[#1f1f1f]/95 backdrop-blur-sm flex items-center px-2 z-50 border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-12 h-10 bg-transparent hover:bg-white/10 rounded flex items-center justify-center text-white text-2xl transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-6 h-6 fill-current",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex items-center bg-[#2d2d2d] rounded px-3 py-1.5 w-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50 text-sm",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ml-2 gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "📁",
                        tooltip: "Explorateur"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "🌐",
                        tooltip: "Edge",
                        active: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
                        icon: "📧",
                        tooltip: "Mail"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskbarIcon, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-white text-xs px-3 py-1 hover:bg-white/10 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrayIcon, {
                        icon: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrayIcon, {
                        icon: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cpuUsage > 80 ? "text-red-400" : "text-white",
                                children: "🔋"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-end px-3 py-1 hover:bg-white/10 rounded text-white text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: currentTime.toLocaleTimeString("fr-FR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-full bg-white/20 hover:bg-white/40 cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            !isResponding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/30 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(WindowsTaskbar, "k6LsyIw6/Fcv7+BpMZUE39WdtyE=");
_c = WindowsTaskbar;
function TaskbarIcon({ icon, tooltip, active = false, notification = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
      relative w-10 h-10 flex items-center justify-center rounded
      hover:bg-white/10 cursor-pointer transition-colors
      ${active ? "bg-white/10" : ""}
    `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xl",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c1 = TaskbarIcon;
function TrayIcon({ icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-base hover:opacity-80 cursor-pointer",
        children: icon
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c2 = TrayIcon;
const __TURBOPACK__default__export__ = WindowsTaskbar;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WindowsTaskbar");
__turbopack_context__.k.register(_c1, "TaskbarIcon");
__turbopack_context__.k.register(_c2, "TrayIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlueScreenOfDeath",
    ()=>BlueScreenOfDeath,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BlueScreenOfDeath({ onHackerReady }) {
    _s();
    const [showHacker, setShowHacker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hackerText, setHackerText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Animation du "progrès" qui n'avance pas vraiment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlueScreenOfDeath.useEffect": ()=>{
            const interval = setInterval({
                "BlueScreenOfDeath.useEffect.interval": ()=>{
                    setProgress({
                        "BlueScreenOfDeath.useEffect.interval": (prev)=>{
                            // Le progrès reste bloqué
                            if (prev >= 21) return 21;
                            return prev + Math.random() * 3;
                        }
                    }["BlueScreenOfDeath.useEffect.interval"]);
                }
            }["BlueScreenOfDeath.useEffect.interval"], 500);
            return ({
                "BlueScreenOfDeath.useEffect": ()=>clearInterval(interval)
            })["BlueScreenOfDeath.useEffect"];
        }
    }["BlueScreenOfDeath.useEffect"], []);
    // Faire apparaître le hacker après un délai
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlueScreenOfDeath.useEffect": ()=>{
            const timeout = setTimeout({
                "BlueScreenOfDeath.useEffect.timeout": ()=>{
                    setShowHacker(true);
                    typeHackerMessage();
                }
            }["BlueScreenOfDeath.useEffect.timeout"], 2000); // Plus rapide - 2 secondes au lieu de 4
            return ({
                "BlueScreenOfDeath.useEffect": ()=>clearTimeout(timeout)
            })["BlueScreenOfDeath.useEffect"];
        }
    }["BlueScreenOfDeath.useEffect"], []);
    const typeHackerMessage = ()=>{
        const messages = [
            "root@gendarmerie:~$ Détection d'un système en détresse...",
            "root@gendarmerie:~$ Ne jette pas ton PC !",
            "root@gendarmerie:~$ La Gendarmerie Nationale utilise Linux depuis 2005.",
            "root@gendarmerie:~$ 37 000 postes migrés. Zéro ransomware.",
            "root@gendarmerie:~$ Économies réalisées : 2 millions €/an",
            "root@gendarmerie:~$ Veux-tu reprendre le contrôle de ta machine ?"
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
                        setTimeout(()=>setShowButton(true), 500);
                    }
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
        return ()=>clearInterval(typeInterval);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#0078d7] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-center max-w-2xl z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-7xl sm:text-9xl mb-6 sm:mb-8",
                        children: ":("
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl sm:text-2xl mb-4",
                        children: "Votre PC a rencontré un problème et doit redémarrer."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#005a9e] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8 text-left font-mono text-xs sm:text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-300 font-bold mb-2",
                                children: "ERREUR FATALE : OBSOLESCENCE_PROGRAMMEE"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-white/90",
                                children: "Votre ordinateur est parfaitement fonctionnel, mais Microsoft a décidé qu'il était trop vieux pour Windows 11."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-300 font-bold",
                                children: "Conséquence : Veuillez acheter un nouvel ordinateur."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 mt-2 text-xs",
                                children: "(Vous rejoindrez les 400 millions d'ordinateurs jetés à la poubelle chaque année pour cause d'\"incompatibilité\")"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 sm:mt-8 flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm opacity-70",
                                        children: [
                                            Math.floor(progress),
                                            "% complété"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-48 sm:w-64 h-2 bg-white/20 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-white transition-all duration-500",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs opacity-50 mt-2",
                                children: "Collecte de vos données personnelles pour améliorer votre expérience Microsoft..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xs opacity-40",
                        children: "Code d'arrêt : MICROSOFT_PLANNED_OBSOLESCENCE_0x80070005"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            showHacker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-black/95 rounded-lg p-4 sm:p-6 border-2 border-green-500 shadow-2xl shadow-green-500/20 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl sm:text-5xl",
                            children: "🐧"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-green-400 font-mono text-xs sm:text-sm whitespace-pre-line leading-relaxed",
                                    children: [
                                        hackerText,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-pulse",
                                            children: "▊"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onHackerReady,
                                    className: "mt-4 bg-green-500 hover:bg-green-400 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg animate-pulse shadow-lg shadow-green-500/50 transition-all hover:scale-105",
                                    children: "🐧 ESSAYER LINUX / NIRD"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 bg-white p-2 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyMSI+PHBhdGggZD0iTTEgMWg3djdIMXptMiAyaDN2M0gzem05LTJoN3Y3aC03em0yIDJoM3YzaC0zem0tOSA5aDd2N0gxem0yIDJoM3YzSDN6Ii8+PC9zdmc+')] bg-contain"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(BlueScreenOfDeath, "nh1NIZIDBPe5ULX9XbGEM2uUPRk=");
_c = BlueScreenOfDeath;
const __TURBOPACK__default__export__ = BlueScreenOfDeath;
var _c;
__turbopack_context__.k.register(_c, "BlueScreenOfDeath");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTaskManager",
    ()=>LinuxTaskManager,
    "WindowsTaskManager",
    ()=>WindowsTaskManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Processus Windows simulés avec consommation mémoire/CPU absurde
const WINDOWS_PROCESSES = [
    {
        name: "System",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWindows"],
        cpu: ()=>15 + Math.random() * 10,
        memory: 2800,
        disk: 45,
        network: 0.1,
        status: "Running"
    },
    {
        name: "Windows Update Service",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWindows"],
        cpu: ()=>25 + Math.random() * 20,
        memory: 1200,
        disk: 100,
        network: 15.2,
        status: "Running"
    },
    {
        name: "Microsoft Edge (12)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobe"],
        cpu: ()=>18 + Math.random() * 15,
        memory: 3400,
        disk: 12,
        network: 8.5,
        status: "Running"
    },
    {
        name: "Antimalware Service Executable",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShieldAlt"],
        cpu: ()=>22 + Math.random() * 25,
        memory: 890,
        disk: 80,
        network: 0.5,
        status: "Running"
    },
    {
        name: "SearchHost.exe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"],
        cpu: ()=>8 + Math.random() * 8,
        memory: 450,
        disk: 55,
        network: 0,
        status: "Running"
    },
    {
        name: "OneDrive.exe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloud"],
        cpu: ()=>5 + Math.random() * 10,
        memory: 380,
        disk: 35,
        network: 12.3,
        status: "Syncing"
    },
    {
        name: "Microsoft.Office.ClickToRun",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFileWord"],
        cpu: ()=>7 + Math.random() * 12,
        memory: 620,
        disk: 25,
        network: 2.1,
        status: "Running"
    },
    {
        name: "SearchIndexer.exe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"],
        cpu: ()=>12 + Math.random() * 15,
        memory: 480,
        disk: 95,
        network: 0,
        status: "Indexing"
    },
    {
        name: "RuntimeBroker.exe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCog"],
        cpu: ()=>3 + Math.random() * 5,
        memory: 180,
        disk: 0,
        network: 0,
        status: "Running"
    },
    {
        name: "Chrome.exe (8)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChrome"],
        cpu: ()=>15 + Math.random() * 20,
        memory: 4200,
        disk: 8,
        network: 25.6,
        status: "Running"
    },
    {
        name: "svchost.exe (netsvcs)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWindows"],
        cpu: ()=>6 + Math.random() * 8,
        memory: 750,
        disk: 15,
        network: 5.2,
        status: "Running"
    },
    {
        name: "DiagTrack (Telemetry)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWindows"],
        cpu: ()=>8 + Math.random() * 12,
        memory: 340,
        disk: 40,
        network: 18.9,
        status: "Sending..."
    },
    {
        name: "XboxGipSvc",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGamepad"],
        cpu: ()=>2 + Math.random() * 5,
        memory: 220,
        disk: 2,
        network: 0.3,
        status: "Running"
    },
    {
        name: "dwm.exe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDesktop"],
        cpu: ()=>4 + Math.random() * 6,
        memory: 150,
        disk: 1,
        network: 0,
        status: "Running"
    }
];
function WindowsTaskManager({ isOpen, onClose, onInteract }) {
    _s();
    const [processes, setProcesses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(WINDOWS_PROCESSES.map({
        "WindowsTaskManager.useState": (p)=>({
                ...p,
                currentCpu: p.cpu(),
                currentMemory: p.memory + Math.random() * 200
            })
    }["WindowsTaskManager.useState"]));
    const [totalCpu, setTotalCpu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(98);
    const [totalMemory, setTotalMemory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(87);
    const [totalDisk, setTotalDisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [networkUsage, setNetworkUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(45);
    const [temperature, setTemperature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(78);
    const [fanSpeed, setFanSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4500);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("processes");
    const [isHanging, setIsHanging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mise à jour des métriques
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsTaskManager.useEffect": ()=>{
            const interval = setInterval({
                "WindowsTaskManager.useEffect.interval": ()=>{
                    // Random hang
                    if (Math.random() > 0.85) {
                        setIsHanging(true);
                        setTimeout({
                            "WindowsTaskManager.useEffect.interval": ()=>setIsHanging(false)
                        }["WindowsTaskManager.useEffect.interval"], 1000 + Math.random() * 2000);
                    }
                    setProcesses({
                        "WindowsTaskManager.useEffect.interval": (prev)=>prev.map({
                                "WindowsTaskManager.useEffect.interval": (p)=>({
                                        ...p,
                                        currentCpu: p.cpu(),
                                        currentMemory: p.memory + Math.random() * 300 - 100
                                    })
                            }["WindowsTaskManager.useEffect.interval"])
                    }["WindowsTaskManager.useEffect.interval"]);
                    setTotalCpu(85 + Math.random() * 15);
                    setTotalMemory(80 + Math.random() * 15);
                    setTotalDisk(90 + Math.random() * 10);
                    setNetworkUsage(30 + Math.random() * 50);
                    setTemperature(75 + Math.random() * 15);
                    setFanSpeed(4000 + Math.random() * 2000);
                }
            }["WindowsTaskManager.useEffect.interval"], 800);
            return ({
                "WindowsTaskManager.useEffect": ()=>clearInterval(interval)
            })["WindowsTaskManager.useEffect"];
        }
    }["WindowsTaskManager.useEffect"], []);
    if (!isOpen) return null;
    const tabs = [
        {
            id: "processes",
            label: "Processus"
        },
        {
            id: "performance",
            label: "Performance"
        },
        {
            id: "services",
            label: "Services"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                x: 100,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 100,
                opacity: 0
            },
            transition: {
                type: "spring",
                damping: 20
            },
            className: `absolute z-[500] bg-[#1f1f1f] rounded-lg shadow-2xl overflow-hidden border border-gray-700
          ${isHanging ? "opacity-60" : ""}`,
            style: {
                width: "720px",
                height: "520px",
                right: "20px",
                top: "60px"
            },
            onClick: ()=>onInteract?.(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#2d2d2d] px-4 py-2 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 bg-blue-500 rounded flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMicrochip"], {
                                        className: "text-white text-xs"
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm",
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-gray-400 hover:bg-gray-600 w-10 h-8 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdMinimize"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-gray-400 hover:bg-gray-600 w-10 h-8 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdCropSquare"], {
                                        size: 12
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onClose?.();
                                    },
                                    className: "text-gray-400 hover:bg-red-600 hover:text-white w-10 h-8 flex items-center justify-center transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 247,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#2d2d2d] px-4 py-2 flex items-center gap-6 border-b border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded bg-red-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMicrochip"], {
                                        className: "text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400",
                                            children: "CPU"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-red-400",
                                            children: [
                                                totalCpu.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-2 bg-gray-700 rounded overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full bg-red-500",
                                        animate: {
                                            width: `${totalCpu}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMemory"], {
                                        className: "text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400",
                                            children: "Memory"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-orange-400",
                                            children: [
                                                totalMemory.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-2 bg-gray-700 rounded overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full bg-orange-500",
                                        animate: {
                                            width: `${totalMemory}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHdd"], {
                                        className: "text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400",
                                            children: "Disk"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-red-400",
                                            children: [
                                                totalDisk.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-2 bg-gray-700 rounded overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full bg-red-500",
                                        animate: {
                                            width: `${totalDisk}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaNetworkWired"], {
                                        className: "text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400",
                                            children: "Network"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-cyan-400",
                                            children: [
                                                networkUsage.toFixed(0),
                                                " Mb/s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/30 border-b border-red-700 px-4 py-1 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdWarning"], {
                            className: "text-red-400"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-red-300",
                            children: "High resource usage detected! Your PC may be slow."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-gray-700 bg-[#252525]",
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab.id),
                            className: `px-4 py-2 text-xs transition-colors ${activeTab === tab.id ? "text-white bg-[#1f1f1f] border-b-2 border-blue-500" : "text-gray-400 hover:text-white hover:bg-gray-700"}`,
                            children: tab.label
                        }, tab.id, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 h-[calc(100%-160px)] overflow-hidden bg-[#1f1f1f]",
                    children: [
                        activeTab === "processes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-6 gap-2 text-[10px] text-gray-500 pb-2 border-b border-gray-700 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "col-span-2",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right",
                                            children: "CPU"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right",
                                            children: "Memory"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right",
                                            children: "Disk"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right",
                                            children: "Network"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto mt-1 space-y-0.5",
                                    children: processes.map((process, idx)=>{
                                        const Icon = process.icon;
                                        const cpuHigh = process.currentCpu > 15;
                                        const memHigh = process.currentMemory > 1000;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: idx * 0.03
                                            },
                                            className: `grid grid-cols-6 gap-2 text-xs py-1.5 px-2 rounded ${cpuHigh || memHigh ? "bg-red-900/20" : "hover:bg-gray-800"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-2 flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: `text-xs ${cpuHigh ? "text-red-400" : "text-blue-400"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 375,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white truncate text-[11px]",
                                                            children: process.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 380,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 374,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono text-[11px] ${cpuHigh ? "text-red-400 font-bold" : "text-gray-300"}`,
                                                        children: [
                                                            process.currentCpu.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 385,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 384,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono text-[11px] ${memHigh ? "text-orange-400 font-bold" : "text-gray-300"}`,
                                                        children: [
                                                            Math.floor(process.currentMemory),
                                                            " MB"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 394,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 393,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono text-[11px] ${process.disk > 50 ? "text-blue-400" : "text-gray-400"}`,
                                                        children: process.disk > 0 ? `${process.disk} MB/s` : "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 405,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 404,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[11px] text-gray-400",
                                                        children: process.network > 0 ? `${process.network.toFixed(1)} Mb/s` : "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 416,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 415,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 363,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-700 pt-2 mt-2 flex justify-between text-[10px] text-gray-500 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Processes: ",
                                                processes.length,
                                                " • Threads: 2,847"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-400",
                                            children: [
                                                "⚠ ",
                                                processes.filter((p)=>p.currentCpu > 15).length,
                                                " high CPU processes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        activeTab === "performance" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3 h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#171717] rounded-lg p-3 border border-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "CPU"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 font-bold text-lg",
                                                    children: [
                                                        totalCpu.toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-gray-500 mb-2",
                                            children: "Intel(R) Core(TM) i7-10750H"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 grid grid-cols-6 grid-rows-4",
                                                    children: [
                                                        ...Array(24)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-r border-b border-gray-800/50"
                                                        }, i, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 455,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 via-red-500 to-orange-400",
                                                    animate: {
                                                        height: `${totalCpu}%`
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 462,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1 left-1 bg-red-600/80 px-1 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-white font-bold",
                                                        children: "HIGH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 469,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 468,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-2 gap-1 text-[9px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Utilization"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-red-400",
                                                    children: [
                                                        totalCpu.toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 476,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Speed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "4.2 GHz"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 480,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Processes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "287"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Threads"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 483,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "4,521"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 474,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 441,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#171717] rounded-lg p-3 border border-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "Memory"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-400 font-bold text-lg",
                                                    children: [
                                                        totalMemory.toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-gray-500 mb-2",
                                            children: "14.2/16.0 GB (89%)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 grid grid-cols-6 grid-rows-4",
                                                    children: [
                                                        ...Array(24)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-r border-b border-gray-800/50"
                                                        }, i, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 502,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 via-purple-500 to-pink-400",
                                                    animate: {
                                                        height: `${totalMemory}%`
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 508,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1 left-1 bg-orange-600/80 px-1 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-white font-bold",
                                                        children: "HIGH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-2 gap-1 text-[9px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "In use"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-orange-400",
                                                    children: "14.2 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "1.8 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Committed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "18.4/24 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Cached"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "3.2 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#171717] rounded-lg p-3 border border-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "Disk 0 (C:)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 font-bold text-lg",
                                                    children: [
                                                        totalDisk.toFixed(0),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 535,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-gray-500 mb-2",
                                            children: [
                                                "Active time: ",
                                                totalDisk.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-24 bg-[#0d0d0d] rounded border border-gray-800 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 grid grid-cols-6 grid-rows-4",
                                                    children: [
                                                        ...Array(24)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-r border-b border-gray-800/50"
                                                        }, i, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 545,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-blue-500 to-cyan-400",
                                                    animate: {
                                                        height: `${totalDisk}%`
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 551,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1 left-1 bg-red-600/80 px-1 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] text-white font-bold",
                                                        children: "100%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                        lineNumber: 557,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 556,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 542,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-2 gap-1 text-[9px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Read speed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 563,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "145 MB/s"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Write speed"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 565,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "89 MB/s"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 566,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Avg response"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 567,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-red-400",
                                                    children: "847 ms"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-500",
                                                    children: "Capacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-gray-300",
                                                    children: "476 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 570,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3 bg-[#171717] rounded-lg p-3 border border-red-800 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaThermometerHalf"], {
                                                    className: "text-red-500 text-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 577,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-400 font-bold",
                                                            children: [
                                                                temperature.toFixed(0),
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-red-300",
                                                            children: "⚠️ CPU Thermal Throttling"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 582,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFan"], {
                                                    className: "text-blue-400 text-2xl animate-spin",
                                                    style: {
                                                        animationDuration: "0.3s"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white font-bold",
                                                            children: [
                                                                fanSpeed.toFixed(0),
                                                                " RPM"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 593,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: "Fan Speed: MAXIMUM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 596,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 592,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaNetworkWired"], {
                                                    className: "text-cyan-400 text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-cyan-400 font-bold",
                                                            children: [
                                                                networkUsage.toFixed(0),
                                                                " Mb/s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 604,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-400",
                                                            children: "Telemetry Upload Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                            lineNumber: 607,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        activeTab === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-400 mt-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "⏳ Chargement des 287 services Windows..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 618,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 w-32 h-2 bg-gray-700 rounded mx-auto overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full bg-blue-500",
                                        animate: {
                                            x: [
                                                "-100%",
                                                "200%"
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 1.5
                                        },
                                        style: {
                                            width: "50%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 622,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 617,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 344,
                    columnNumber: 9
                }, this),
                isHanging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-white/10 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded px-3 py-2 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-800",
                            children: "Ne répond pas..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 637,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 636,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                    lineNumber: 635,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(WindowsTaskManager, "XiWVo9HsUpPTWhlnWCC64N56b7U=");
_c = WindowsTaskManager;
function LinuxTaskManager({ isOpen, onClose }) {
    _s1();
    const [processes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: "systemd",
            user: "root",
            cpu: 0.1,
            memory: 12,
            status: "S"
        },
        {
            name: "gnome-shell",
            user: "user",
            cpu: 2.3,
            memory: 180,
            status: "S"
        },
        {
            name: "firefox",
            user: "user",
            cpu: 1.5,
            memory: 450,
            status: "S"
        },
        {
            name: "code",
            user: "user",
            cpu: 3.2,
            memory: 320,
            status: "S"
        },
        {
            name: "terminal",
            user: "user",
            cpu: 0.2,
            memory: 45,
            status: "S"
        }
    ]);
    const [cpuUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [memoryUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(23);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -20,
            opacity: 0
        },
        className: "absolute z-[500] bg-[#2d2d2d] rounded-lg shadow-2xl overflow-hidden",
        style: {
            width: "500px",
            height: "350px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#3d3d3d] px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-medium",
                        children: "Moniteur système"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1a1a1a] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-sm",
                                                children: "CPU"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 690,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 font-bold",
                                                children: [
                                                    cpuUsage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 691,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 bg-gray-700 rounded mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-green-500 rounded transition-all",
                                            style: {
                                                width: `${cpuUsage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 693,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1a1a1a] rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-sm",
                                                children: "Mémoire"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 702,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 font-bold",
                                                children: [
                                                    memoryUsage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 703,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 bg-gray-700 rounded mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-green-500 rounded transition-all",
                                            style: {
                                                width: `${memoryUsage}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 705,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1a1a1a] rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2 text-xs text-gray-500 p-2 border-b border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Processus"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 717,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "CPU"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "Mém."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 719,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "État"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 720,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[150px] overflow-y-auto",
                                children: processes.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-2 text-xs p-2 hover:bg-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 728,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-green-400",
                                                children: [
                                                    p.cpu,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 729,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-blue-400",
                                                children: [
                                                    p.memory,
                                                    " MB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right text-gray-400",
                                                children: p.status
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                        lineNumber: 724,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 715,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-3 text-center",
                        children: "✅ Système stable • 🔇 Ventilateur silencieux • 🌡️ 42°C"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
                lineNumber: 685,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js",
        lineNumber: 661,
        columnNumber: 5
    }, this);
}
_s1(LinuxTaskManager, "dQs7tnwr4bdYqv6V2zQl0EjMt3s=");
_c1 = LinuxTaskManager;
const __TURBOPACK__default__export__ = WindowsTaskManager;
var _c, _c1;
__turbopack_context__.k.register(_c, "WindowsTaskManager");
__turbopack_context__.k.register(_c1, "LinuxTaskManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINUX_ICONS",
    ()=>LINUX_ICONS,
    "LinuxDesktop",
    ()=>LinuxDesktop,
    "LinuxIcon",
    ()=>LinuxIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const LINUX_ICONS = [
    {
        name: "Firefox",
        icon: "🦊",
        description: "Navigateur libre"
    },
    {
        name: "LibreOffice",
        icon: "📄",
        description: "Suite bureautique gratuite"
    },
    {
        name: "Terminal",
        icon: "⬛",
        description: "Le pouvoir à portée de main"
    },
    {
        name: "Fichiers",
        icon: "📁",
        description: "Gestionnaire de fichiers"
    },
    {
        name: "GIMP",
        icon: "🎨",
        description: "Retouche photo professionnelle"
    },
    {
        name: "VLC",
        icon: "🔶",
        description: "Lecteur multimédia universel"
    },
    {
        name: "VS Code",
        icon: "💻",
        description: "Éditeur de code"
    },
    {
        name: "Blender",
        icon: "🎬",
        description: "Création 3D"
    },
    {
        name: "System Monitor",
        icon: "📊",
        description: "Moniteur système léger"
    }
];
function LinuxIcon({ name, icon, description, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl group-hover:scale-110 transition-transform",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-xs text-center mt-2",
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white/50 text-[10px] text-center opacity-0 group-hover:opacity-100 transition-opacity",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = LinuxIcon;
function LinuxDesktop({ onIconClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-12 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-2 max-w-[350px]",
            children: LINUX_ICONS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinuxIcon, {
                    name: item.name,
                    icon: item.icon,
                    description: item.description,
                    onClick: ()=>onIconClick?.(item)
                }, i, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = LinuxDesktop;
const __TURBOPACK__default__export__ = LinuxDesktop;
var _c, _c1;
__turbopack_context__.k.register(_c, "LinuxIcon");
__turbopack_context__.k.register(_c1, "LinuxDesktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTopBar",
    ()=>LinuxTopBar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LinuxTopBar() {
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinuxTopBar.useEffect": ()=>{
            const interval = setInterval({
                "LinuxTopBar.useEffect.interval": ()=>setCurrentTime(new Date())
            }["LinuxTopBar.useEffect.interval"], 1000);
            return ({
                "LinuxTopBar.useEffect": ()=>clearInterval(interval)
            })["LinuxTopBar.useEffect"];
        }
    }["LinuxTopBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 right-0 h-8 bg-black/60 backdrop-blur-sm flex items-center justify-between px-4 text-white text-sm z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-orange-400",
                        children: "Activités"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: "📂 Fichiers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: "🦊 Firefox"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 p-1 rounded cursor-pointer",
                        children: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hover:bg-white/10 p-1 rounded cursor-pointer",
                        children: "🌐"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔋"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(LinuxTopBar, "f3elDUct5ap4W3FuLtGG73aMsLc=");
_c = LinuxTopBar;
const __TURBOPACK__default__export__ = LinuxTopBar;
var _c;
__turbopack_context__.k.register(_c, "LinuxTopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinuxTerminal",
    ()=>LinuxTerminal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const CODE_EXAMPLES = [
    {
        title: "Mise à jour système",
        code: `# Mise à jour optionnelle et contrôlée
$ sudo apt update
$ sudo apt upgrade

Voulez-vous continuer ? [O/n] _
# VOUS décidez quand mettre à jour`
    },
    {
        title: "Installation de logiciels",
        code: `# Installation gratuite et légale
$ sudo apt install firefox gimp vlc

Téléchargement... 100%
Installation... Terminé !

# 0€ de licence. Toujours.`
    },
    {
        title: "Vérification sécurité",
        code: `# Code source ouvert et vérifiable
$ cat /etc/os-release

NAME="Ubuntu"
VERSION="24.04 LTS"
SECURITY="Vérifié par la communauté"

# Pas de backdoor, code auditable`
    },
    {
        title: "Gestion des données",
        code: `# Vos données restent CHEZ VOUS
$ ls ~/Documents

rapport.odt
photos/
projets/

# Aucune télémétrie par défaut
# Respect total du RGPD`
    },
    {
        title: "Support matériel",
        code: `# PC de 2010 ? No problemo !
$ neofetch

OS: Linux Mint 21
Kernel: 6.5.0
Uptime: 47 days
Memory: 512MB / 4GB

# Ressuscite les vieux PC`
    }
];
function LinuxTerminal({ isOpen = true, onClose }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typedCode, setTypedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinuxTerminal.useEffect": ()=>{
            const currentCode = CODE_EXAMPLES[activeTab].code;
            setTypedCode("");
            setIsTyping(true);
            let index = 0;
            const typeInterval = setInterval({
                "LinuxTerminal.useEffect.typeInterval": ()=>{
                    if (index < currentCode.length) {
                        setTypedCode(currentCode.slice(0, index + 1));
                        index++;
                    } else {
                        setIsTyping(false);
                        clearInterval(typeInterval);
                    }
                }
            }["LinuxTerminal.useEffect.typeInterval"], 20);
            return ({
                "LinuxTerminal.useEffect": ()=>clearInterval(typeInterval)
            })["LinuxTerminal.useEffect"];
        }
    }["LinuxTerminal.useEffect"], [
        activeTab
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#323232] px-4 py-2 flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full bg-yellow-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full bg-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/70 text-sm ml-2",
                            children: "Terminal — bash"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#2d2d2d] flex gap-1 px-2 py-1 overflow-x-auto",
                children: CODE_EXAMPLES.map((example, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(i),
                        className: `px-3 py-1 text-xs rounded transition-colors whitespace-nowrap
              ${activeTab === i ? "bg-[#1e1e1e] text-white" : "text-white/50 hover:text-white/80"}
            `,
                        children: example.title
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 font-mono text-sm text-green-400 min-h-[200px] max-h-[300px] overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "whitespace-pre-wrap",
                    children: [
                        typedCode,
                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-pulse",
                            children: "▊"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                            lineNumber: 128,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#007acc] px-4 py-1 text-white text-xs flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🐧 Linux - Le système qui respecte vos libertés"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "UTF-8 | bash"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(LinuxTerminal, "AENMhuwjP0Tf4RVTkHP+x9xfttk=");
_c = LinuxTerminal;
const __TURBOPACK__default__export__ = LinuxTerminal;
var _c;
__turbopack_context__.k.register(_c, "LinuxTerminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoWidget",
    ()=>InfoWidget,
    "LinuxWidgets",
    ()=>LinuxWidgets,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white flex-1 min-w-[180px] hover:bg-white/15 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs opacity-70 mb-1 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `font-bold ${colorClasses[color] || colorClasses.green}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = InfoWidget;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 flex-wrap",
        children: widgets.map((widget, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoWidget, {
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
_c1 = LinuxWidgets;
const __TURBOPACK__default__export__ = LinuxWidgets;
var _c, _c1;
__turbopack_context__.k.register(_c, "InfoWidget");
__turbopack_context__.k.register(_c1, "LinuxWidgets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetCounter",
    ()=>BudgetCounter,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BudgetCounter({ amount, isPositive = false, label = "Budget de l'État" }) {
    _s();
    const [displayAmount, setDisplayAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(amount);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastChange, setLastChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BudgetCounter.useEffect": ()=>{
            // Animation fluide du compteur
            const diff = amount - displayAmount;
            if (Math.abs(diff) > 0) {
                setIsAnimating(true);
                setLastChange(diff);
                const step = diff / 20;
                const interval = setInterval({
                    "BudgetCounter.useEffect.interval": ()=>{
                        setDisplayAmount({
                            "BudgetCounter.useEffect.interval": (prev)=>{
                                const next = prev + step;
                                if (step > 0 && next >= amount || step < 0 && next <= amount) {
                                    clearInterval(interval);
                                    setIsAnimating(false);
                                    return amount;
                                }
                                return next;
                            }
                        }["BudgetCounter.useEffect.interval"]);
                    }
                }["BudgetCounter.useEffect.interval"], 50);
                return ({
                    "BudgetCounter.useEffect": ()=>clearInterval(interval)
                })["BudgetCounter.useEffect"];
            }
        }
    }["BudgetCounter.useEffect"], [
        amount
    ]);
    const formattedAmount = Math.floor(displayAmount).toLocaleString("fr-FR");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0.9,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        className: `
      backdrop-blur-sm rounded-lg p-4 text-white shadow-xl border
      ${isPositive ? "bg-green-900/90 border-green-500" : "bg-red-900/90 border-red-700"}
      transition-transform duration-200
    `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: isAnimating ? {
                scale: [
                    1,
                    1.1,
                    1
                ]
            } : {},
            transition: {
                duration: 0.3
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm opacity-80 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "💰"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
          text-2xl font-bold font-mono mt-1
          ${isPositive ? "text-green-300" : "text-red-300"}
        `,
                    children: [
                        formattedAmount,
                        " €"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isAnimating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        className: `text-xs absolute -top-2 right-2 px-2 py-0.5 rounded ${lastChange > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`,
                        children: [
                            lastChange > 0 ? "+" : "",
                            Math.floor(lastChange).toLocaleString("fr-FR"),
                            " €"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
          text-xs mt-1 flex items-center gap-1
          ${isPositive ? "text-green-400" : "text-red-400"}
        `,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: isAnimating ? {
                                y: [
                                    0,
                                    -3,
                                    0
                                ]
                            } : {},
                            transition: {
                                repeat: isAnimating ? Infinity : 0,
                                duration: 0.5
                            },
                            children: isPositive ? "▲" : "▼"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isPositive ? "En hausse !" : "En chute libre..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(BudgetCounter, "HfRdwvFVNK54XnLa/IoKiJT44rI=");
_c = BudgetCounter;
const __TURBOPACK__default__export__ = BudgetCounter;
var _c;
__turbopack_context__.k.register(_c, "BudgetCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notification",
    ()=>Notification,
    "NotificationStack",
    ()=>NotificationStack,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Notification({ id, message, type = "info", onDismiss, autoDismiss = true }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            // Animation d'entrée
            requestAnimationFrame({
                "Notification.useEffect": ()=>setIsVisible(true)
            }["Notification.useEffect"]);
            // Auto-dismiss après 5 secondes
            if (autoDismiss) {
                const timeout = setTimeout({
                    "Notification.useEffect.timeout": ()=>{
                        setIsVisible(false);
                        setTimeout({
                            "Notification.useEffect.timeout": ()=>onDismiss?.(id)
                        }["Notification.useEffect.timeout"], 300);
                    }
                }["Notification.useEffect.timeout"], 5000);
                return ({
                    "Notification.useEffect": ()=>clearTimeout(timeout)
                })["Notification.useEffect"];
            }
        }
    }["Notification.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        text-white px-4 py-3 rounded-lg shadow-lg text-sm border
        transition-all duration-300 transform
        ${typeStyles[type] || typeStyles.info}
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Notification, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = Notification;
function NotificationStack({ notifications, onDismiss, isPositive = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 max-w-sm",
        children: notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Notification, {
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
_c1 = NotificationStack;
const __TURBOPACK__default__export__ = Notification;
var _c, _c1;
__turbopack_context__.k.register(_c, "Notification");
__turbopack_context__.k.register(_c1, "NotificationStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemMonitor",
    ()=>SystemMonitor,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SystemMonitor({ cpuUsage = 98, memoryUsage = 87, diskUsage = 95, fanSpeed = "MAX", isHealthy = false }) {
    _s();
    const [animatedCpu, setAnimatedCpu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cpuUsage);
    // Faire fluctuer le CPU de manière réaliste
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemMonitor.useEffect": ()=>{
            if (!isHealthy) {
                const interval = setInterval({
                    "SystemMonitor.useEffect.interval": ()=>{
                        setAnimatedCpu({
                            "SystemMonitor.useEffect.interval": (prev)=>{
                                const fluctuation = (Math.random() - 0.3) * 10;
                                return Math.min(100, Math.max(80, prev + fluctuation));
                            }
                        }["SystemMonitor.useEffect.interval"]);
                    }
                }["SystemMonitor.useEffect.interval"], 500);
                return ({
                    "SystemMonitor.useEffect": ()=>clearInterval(interval)
                })["SystemMonitor.useEffect"];
            } else {
                setAnimatedCpu(cpuUsage);
            }
        }
    }["SystemMonitor.useEffect"], [
        isHealthy,
        cpuUsage
    ]);
    if (isHealthy) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm flex items-center gap-3 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "✅ Système stable"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "💾 RAM: 23%"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black/50 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-3 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-spin",
                        children: "🌀"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "•"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(SystemMonitor, "VMo9xZ5XvIrx7jWWirr9byDd9q8=");
_c = SystemMonitor;
const __TURBOPACK__default__export__ = SystemMonitor;
var _c;
__turbopack_context__.k.register(_c, "SystemMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionScreen",
    ()=>TransitionScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function TransitionScreen({ onComplete, duration = 2000 }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [statusText, setStatusText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Initialisation...");
    const bootMessages = [
        "Libération du système en cours...",
        "Suppression des bloatwares...",
        "Récupération de votre vie privée...",
        "Installation des libertés numériques...",
        "Activation du bon sens...",
        "Bienvenue dans le monde libre !"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransitionScreen.useEffect": ()=>{
            const progressInterval = setInterval({
                "TransitionScreen.useEffect.progressInterval": ()=>{
                    setProgress({
                        "TransitionScreen.useEffect.progressInterval": (prev)=>{
                            const next = prev + 2;
                            if (next >= 100) {
                                clearInterval(progressInterval);
                                setTimeout(onComplete, 500);
                                return 100;
                            }
                            return next;
                        }
                    }["TransitionScreen.useEffect.progressInterval"]);
                }
            }["TransitionScreen.useEffect.progressInterval"], duration / 50);
            return ({
                "TransitionScreen.useEffect": ()=>clearInterval(progressInterval)
            })["TransitionScreen.useEffect"];
        }
    }["TransitionScreen.useEffect"], [
        duration,
        onComplete
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransitionScreen.useEffect": ()=>{
            const messageIndex = Math.floor(progress / 100 * bootMessages.length);
            setStatusText(bootMessages[Math.min(messageIndex, bootMessages.length - 1)]);
        }
    }["TransitionScreen.useEffect"], [
        progress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden opacity-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixRain, {}, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-8xl mb-8 animate-bounce z-10",
                children: "🐧"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-400 text-xl font-mono mb-6 z-10",
                children: statusText
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 h-2 bg-gray-800 rounded-full overflow-hidden z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-8 text-green-500/50 font-mono text-xs z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Started Linux liberation service"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Removed Microsoft telemetry"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "[ OK ] Restored user freedom"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(TransitionScreen, "Um8kS3x3j5FHNYZH4mJHeB43ttI=");
_c = TransitionScreen;
function MatrixRain() {
    _s1();
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatrixRain.useEffect": ()=>{
            const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
            const cols = [];
            for(let i = 0; i < 50; i++){
                cols.push({
                    x: i * 20,
                    chars: Array.from({
                        length: 30
                    }, {
                        "MatrixRain.useEffect": ()=>chars[Math.floor(Math.random() * chars.length)]
                    }["MatrixRain.useEffect"]),
                    speed: 0.5 + Math.random() * 1.5,
                    offset: Math.random() * 100
                });
            }
            setColumns(cols);
        }
    }["MatrixRain.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 font-mono text-green-500 text-sm overflow-hidden",
        children: columns.map((col, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute animate-matrix-fall",
                style: {
                    left: col.x,
                    animationDuration: `${3 / col.speed}s`,
                    animationDelay: `-${col.offset}s`
                },
                children: col.chars.map((char, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s1(MatrixRain, "FGb4ECZkue8/xp6oBDaPDOM3qWY=");
_c1 = MatrixRain;
const __TURBOPACK__default__export__ = TransitionScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "TransitionScreen");
__turbopack_context__.k.register(_c1, "MatrixRain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroScreen",
    ()=>IntroScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Positions fixes pour éviter les erreurs d'hydratation
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
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const introSteps = [
        {
            icon: "🌍",
            title: "Chaque année...",
            text: "400 millions d'ordinateurs sont jetés à cause de l'obsolescence programmée."
        },
        {
            icon: "💰",
            title: "Les administrations françaises...",
            text: "Dépensent des milliards en licences Microsoft, alors qu'une alternative gratuite existe."
        },
        {
            icon: "🐧",
            title: "La Gendarmerie Nationale...",
            text: "A migré 37 000 postes vers Linux. Résultat : 2 millions €/an d'économies."
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroScreen.useEffect": ()=>{
            if (step < introSteps.length) {
                const timeout = setTimeout({
                    "IntroScreen.useEffect.timeout": ()=>{
                        setStep({
                            "IntroScreen.useEffect.timeout": (prev)=>prev + 1
                        }["IntroScreen.useEffect.timeout"]);
                    }
                }["IntroScreen.useEffect.timeout"], 1800); // PLUS RAPIDE - 1.8 secondes
                return ({
                    "IntroScreen.useEffect": ()=>clearTimeout(timeout)
                })["IntroScreen.useEffect"];
            } else {
                setShowButton(true);
            }
        }
    }["IntroScreen.useEffect"], [
        step,
        introSteps.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1a] flex flex-col items-center justify-center p-8 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: PARTICLES.map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-1 h-1 bg-blue-500/40 rounded-full",
                        style: {
                            left: particle.left,
                            top: particle.top
                        },
                        animate: {
                            y: [
                                0,
                                -15,
                                15,
                                0
                            ],
                            opacity: [
                                0.3,
                                0.7,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            delay: particle.delay
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                className: "mb-6 text-center z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2",
                        children: "L'Écran Bleu de la Libération"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-base",
                        children: "Une expérience interactive par le mouvement NIRD"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl w-full z-10 min-h-[180px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: introSteps.map((item, index)=>index < step && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            animate: {
                                opacity: index < step - 1 ? 0.4 : 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "flex items-start gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                    lineNumber: 123,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-white mb-1",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-sm",
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                            lineNumber: 116,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.5
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.5
                    },
                    className: "mt-4 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: onStart,
                            whileHover: {
                                scale: 1.08
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            animate: {
                                boxShadow: [
                                    "0 0 20px rgba(236, 72, 153, 0.5)",
                                    "0 0 50px rgba(236, 72, 153, 0.9)",
                                    "0 0 20px rgba(236, 72, 153, 0.5)"
                                ]
                            },
                            transition: {
                                boxShadow: {
                                    duration: 1.2,
                                    repeat: Infinity
                                }
                            },
                            className: "relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl text-white text-xl font-bold overflow-hidden cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent",
                                    animate: {
                                        x: [
                                            "-200%",
                                            "200%"
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "🚀"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "LANCER LA SIMULATION"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: "💥"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "text-center text-gray-400 text-sm mt-3",
                            children: "Préparez-vous à vivre l'enfer Windows... 😈"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.5
                },
                onClick: onStart,
                className: "absolute bottom-4 right-4 text-gray-500 hover:text-white text-sm underline z-20 cursor-pointer",
                children: "Passer l'intro →"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs",
                children: "🌙 Nuit de l'Info 2024"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2",
                children: introSteps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-2 h-2 rounded-full transition-all duration-300 ${index < step ? "bg-blue-500 w-4" : "bg-gray-600"}`
                    }, index, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(IntroScreen, "oiNed/6QrLrvM5EHpDcCU0BDhUo=");
_c = IntroScreen;
const __TURBOPACK__default__export__ = IntroScreen;
var _c;
__turbopack_context__.k.register(_c, "IntroScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndingScreen",
    ()=>EndingScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Positions fixes pour les confettis
const CONFETTI_POSITIONS = [
    {
        left: "5%",
        color: "bg-green-500",
        delay: 0
    },
    {
        left: "10%",
        color: "bg-purple-500",
        delay: 0.3
    },
    {
        left: "15%",
        color: "bg-yellow-500",
        delay: 0.6
    },
    {
        left: "20%",
        color: "bg-green-500",
        delay: 0.9
    },
    {
        left: "25%",
        color: "bg-purple-500",
        delay: 1.2
    },
    {
        left: "30%",
        color: "bg-yellow-500",
        delay: 1.5
    },
    {
        left: "35%",
        color: "bg-green-500",
        delay: 0.1
    },
    {
        left: "40%",
        color: "bg-purple-500",
        delay: 0.4
    },
    {
        left: "45%",
        color: "bg-yellow-500",
        delay: 0.7
    },
    {
        left: "50%",
        color: "bg-green-500",
        delay: 1.0
    },
    {
        left: "55%",
        color: "bg-purple-500",
        delay: 1.3
    },
    {
        left: "60%",
        color: "bg-yellow-500",
        delay: 0.2
    },
    {
        left: "65%",
        color: "bg-green-500",
        delay: 0.5
    },
    {
        left: "70%",
        color: "bg-purple-500",
        delay: 0.8
    },
    {
        left: "75%",
        color: "bg-yellow-500",
        delay: 1.1
    },
    {
        left: "80%",
        color: "bg-green-500",
        delay: 1.4
    },
    {
        left: "85%",
        color: "bg-purple-500",
        delay: 0.15
    },
    {
        left: "90%",
        color: "bg-yellow-500",
        delay: 0.45
    },
    {
        left: "95%",
        color: "bg-green-500",
        delay: 0.75
    },
    {
        left: "3%",
        color: "bg-purple-500",
        delay: 1.05
    },
    {
        left: "13%",
        color: "bg-yellow-500",
        delay: 1.35
    },
    {
        left: "23%",
        color: "bg-green-500",
        delay: 0.25
    },
    {
        left: "33%",
        color: "bg-purple-500",
        delay: 0.55
    },
    {
        left: "43%",
        color: "bg-yellow-500",
        delay: 0.85
    },
    {
        left: "53%",
        color: "bg-green-500",
        delay: 1.15
    },
    {
        left: "63%",
        color: "bg-purple-500",
        delay: 1.45
    },
    {
        left: "73%",
        color: "bg-yellow-500",
        delay: 0.05
    },
    {
        left: "83%",
        color: "bg-green-500",
        delay: 0.35
    },
    {
        left: "93%",
        color: "bg-purple-500",
        delay: 0.65
    },
    {
        left: "8%",
        color: "bg-yellow-500",
        delay: 0.95
    }
];
function EndingScreen({ moneySaved, onRestart }) {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showActions, setShowActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const phases = [
        {
            title: "🎉 Félicitations !",
            subtitle: "Vous avez libéré votre système"
        },
        {
            title: "💰 Économies réalisées",
            subtitle: `${(moneySaved || 27500000).toLocaleString("fr-FR")} €`
        },
        {
            title: "🌍 Impact environnemental",
            subtitle: "Des milliers d'ordinateurs sauvés de la décharge"
        }
    ];
    const nirdActions = [
        {
            icon: "📢",
            title: "Sensibilisez",
            description: "Partagez cette simulation avec vos proches et collègues pour les informer sur l'obsolescence programmée.",
            link: "#share"
        },
        {
            icon: "🐧",
            title: "Essayez Linux",
            description: "Installez Linux Mint, Ubuntu ou Fedora sur un vieux PC. Redonnez-lui vie !",
            link: "https://linuxmint.com"
        },
        {
            icon: "✍️",
            title: "Signez la pétition",
            description: "Demandez à vos élus de migrer les administrations vers les logiciels libres.",
            link: "#petition"
        },
        {
            icon: "🏛️",
            title: "Interpellez vos élus",
            description: "Contactez vos députés et maires pour leur parler des économies possibles avec le libre.",
            link: "#contact"
        },
        {
            icon: "🤝",
            title: "Rejoignez le mouvement",
            description: "Participez aux actions du NIRD et des associations du logiciel libre près de chez vous.",
            link: "https://nird.fr"
        },
        {
            icon: "💻",
            title: "Contribuez",
            description: "Aidez à développer des logiciels libres ou à traduire de la documentation.",
            link: "https://github.com"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndingScreen.useEffect": ()=>{
            if (phase < phases.length) {
                const timeout = setTimeout({
                    "EndingScreen.useEffect.timeout": ()=>{
                        setPhase({
                            "EndingScreen.useEffect.timeout": (prev)=>prev + 1
                        }["EndingScreen.useEffect.timeout"]);
                    }
                }["EndingScreen.useEffect.timeout"], 2500);
                return ({
                    "EndingScreen.useEffect": ()=>clearTimeout(timeout)
                })["EndingScreen.useEffect"];
            } else {
                setTimeout({
                    "EndingScreen.useEffect": ()=>setShowActions(true)
                }["EndingScreen.useEffect"], 500);
            }
        }
    }["EndingScreen.useEffect"], [
        phase,
        phases.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-gradient-to-br from-[#0d1117] via-[#1a1a2e] to-[#2d1b4e] flex flex-col items-center justify-start p-4 sm:p-8 relative overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: CONFETTI_POSITIONS.map((confetti, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `absolute w-2 h-2 rounded-full ${confetti.color}`,
                        style: {
                            left: confetti.left
                        },
                        initial: {
                            y: -20
                        },
                        animate: {
                            y: "100vh",
                            rotate: i % 2 === 0 ? 360 : -360
                        },
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            delay: confetti.delay,
                            ease: "linear"
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl w-full z-10 pt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: phase <= phases.length && phase > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -30
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-6xl font-bold text-white mb-4",
                                    children: phases[phase - 1].title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-2xl sm:text-4xl ${phase === 2 ? "text-green-400 font-bold" : "text-gray-300"}`,
                                    children: phases[phase - 1].subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, phase, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4",
                                children: "🐧 Passez à l'action avec le NIRD !"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-lg max-w-2xl mx-auto",
                                children: "Cette simulation n'est que le début. Voici comment vous pouvez contribuer à libérer nos systèmes informatiques."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.3
                            },
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",
                            children: nirdActions.map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: action.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.1 * index
                                    },
                                    whileHover: {
                                        scale: 1.03,
                                        y: -5
                                    },
                                    className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all cursor-pointer group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-3 group-hover:scale-110 transition-transform",
                                            children: action.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-2",
                                            children: action.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm",
                                            children: action.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.8
                        },
                        className: "bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-4 text-center",
                                children: "📊 Comparatif Windows vs Linux"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mb-2",
                                                children: "🪟"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-red-400 mb-2",
                                                children: "Windows"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-400 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "💰 Licences : ~150€/poste/an"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "🦠 Cible #1 des ransomwares"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "🗑️ Obsolescence forcée"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "👁️ Télémétrie invasive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl mb-2",
                                                children: "🐧"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-green-400 mb-2",
                                                children: "Linux"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-400 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "✅ 100% gratuit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "🛡️ Sécurité renforcée"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "♻️ Fonctionne sur vieux PCs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "🔒 Respect vie privée"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5,
                            delay: 1
                        },
                        className: "bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-300 italic mb-4",
                                children: "“La liberté informatique n'est pas une option, c'est un droit fondamental. Ensemble, libérons nos administrations et nos citoyens du joug des logiciels propriétaires.”"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-400 font-bold",
                                children: "— Mouvement NIRD"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    showActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 1.2
                        },
                        className: "flex flex-col sm:flex-row gap-4 justify-center items-center pb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onRestart,
                                className: "px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold hover:scale-105 transition-transform",
                                children: "🔄 Recommencer la simulation"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://nird.fr",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl text-white font-bold hover:scale-105 transition-transform",
                                children: "🐧 Visiter NIRD.fr"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (navigator.share) {
                                        navigator.share({
                                            title: "L'Écran Bleu de la Libération",
                                            text: "Découvrez pourquoi Linux est meilleur que Windows !",
                                            url: window.location.href
                                        });
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Lien copié !");
                                    }
                                },
                                className: "px-8 py-3 bg-white/10 border border-white/30 rounded-xl text-white font-bold hover:bg-white/20 transition-all",
                                children: "📤 Partager"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm z-20",
                children: "🌙 Nuit de l'Info 2024 - Mouvement NIRD"
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(EndingScreen, "cQF0MDUnxAo7A4/r1XB/vundfpY=");
_c = EndingScreen;
const __TURBOPACK__default__export__ = EndingScreen;
var _c;
__turbopack_context__.k.register(_c, "EndingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
function useLaggyMouse(isEnabled = true, lagAmount = 150) {
    _s();
    const [realPos, setRealPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [laggyPos, setLaggyPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isStuttering, setIsStuttering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLaggyMouse.useEffect": ()=>{
            if (!isEnabled) return;
            const handleMouseMove = {
                "useLaggyMouse.useEffect.handleMouseMove": (e)=>{
                    setRealPos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["useLaggyMouse.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "useLaggyMouse.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["useLaggyMouse.useEffect"];
        }
    }["useLaggyMouse.useEffect"], [
        isEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLaggyMouse.useEffect": ()=>{
            if (!isEnabled) return;
            // Random stuttering effect - moins fréquent et plus subtil
            const stutterInterval = setInterval({
                "useLaggyMouse.useEffect.stutterInterval": ()=>{
                    if (Math.random() > 0.85) {
                        setIsStuttering(true);
                        setTimeout({
                            "useLaggyMouse.useEffect.stutterInterval": ()=>setIsStuttering(false)
                        }["useLaggyMouse.useEffect.stutterInterval"], 100 + Math.random() * 200);
                    }
                }
            }["useLaggyMouse.useEffect.stutterInterval"], 2000);
            const timeout = setTimeout({
                "useLaggyMouse.useEffect.timeout": ()=>{
                    if (!isStuttering) {
                        setLaggyPos(realPos);
                    }
                }
            }["useLaggyMouse.useEffect.timeout"], lagAmount + (isStuttering ? 500 : 0));
            return ({
                "useLaggyMouse.useEffect": ()=>{
                    clearTimeout(timeout);
                    clearInterval(stutterInterval);
                }
            })["useLaggyMouse.useEffect"];
        }
    }["useLaggyMouse.useEffect"], [
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
_s(useLaggyMouse, "5x89BXMMLlhAnKkAlRzofZ9J2yE=");
function LaggyMouse({ isEnabled }) {
    _s1();
    const { laggyPos, isStuttering } = useLaggyMouse(isEnabled, 150);
    if (!isEnabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed w-6 h-6 pointer-events-none z-[9999] ${isStuttering ? "opacity-50" : ""}`,
        style: {
            left: laggyPos.x - 2,
            top: laggyPos.y - 2,
            transition: isStuttering ? "none" : "all 0.2s ease-out"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                className: "drop-shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            isStuttering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -right-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s1(LaggyMouse, "IqAJG+/2sAPYcpOb5yIoOkDwxBQ=", false, function() {
    return [
        useLaggyMouse
    ];
});
_c = LaggyMouse;
function useSlowdown(isEnabled = true) {
    _s2();
    const [isFrozen, setIsFrozen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [freezeCount, setFreezeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSlowdown.useEffect": ()=>{
            if (!isEnabled) return;
            // Gel aléatoire de l'interface - très subtil
            const freezeInterval = setInterval({
                "useSlowdown.useEffect.freezeInterval": ()=>{
                    if (Math.random() > 0.9) {
                        // 10% de chance - très rare
                        setIsFrozen(true);
                        setFreezeCount({
                            "useSlowdown.useEffect.freezeInterval": (prev)=>prev + 1
                        }["useSlowdown.useEffect.freezeInterval"]);
                        // Freeze très court
                        setTimeout({
                            "useSlowdown.useEffect.freezeInterval": ()=>setIsFrozen(false)
                        }["useSlowdown.useEffect.freezeInterval"], 200 + Math.random() * 400);
                    }
                }
            }["useSlowdown.useEffect.freezeInterval"], 2000); // Toutes les 2 secondes
            return ({
                "useSlowdown.useEffect": ()=>clearInterval(freezeInterval)
            })["useSlowdown.useEffect"];
        }
    }["useSlowdown.useEffect"], [
        isEnabled
    ]);
    return {
        isFrozen,
        freezeCount
    };
}
_s2(useSlowdown, "VTvjVuiT9bf+qzWBqDC8HIarFRk=");
function useMoneyDrain(isEnabled = true, initialAmount = 50000000) {
    _s3();
    const [money, setMoney] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAmount);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMoneyDrain.useEffect": ()=>{
            if (!isEnabled) return;
            // Drain BEAUCOUP plus rapide
            const drainInterval = setInterval({
                "useMoneyDrain.useEffect.drainInterval": ()=>{
                    setMoney({
                        "useMoneyDrain.useEffect.drainInterval": (prev)=>Math.max(0, prev - 50000 - Math.random() * 100000)
                    }["useMoneyDrain.useEffect.drainInterval"]);
                }
            }["useMoneyDrain.useEffect.drainInterval"], 300); // Plus rapide !
            return ({
                "useMoneyDrain.useEffect": ()=>clearInterval(drainInterval)
            })["useMoneyDrain.useEffect"];
        }
    }["useMoneyDrain.useEffect"], [
        isEnabled
    ]);
    const bigExpense = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMoneyDrain.useCallback[bigExpense]": (amount, message)=>{
            setMoney({
                "useMoneyDrain.useCallback[bigExpense]": (prev)=>Math.max(0, prev - amount)
            }["useMoneyDrain.useCallback[bigExpense]"]);
            return message;
        }
    }["useMoneyDrain.useCallback[bigExpense]"], []);
    const addMoney = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMoneyDrain.useCallback[addMoney]": (amount)=>{
            setMoney({
                "useMoneyDrain.useCallback[addMoney]": (prev)=>prev + amount
            }["useMoneyDrain.useCallback[addMoney]"]);
        }
    }["useMoneyDrain.useCallback[addMoney]"], []);
    return {
        money,
        setMoney,
        bigExpense,
        addMoney
    };
}
_s3(useMoneyDrain, "1kEc+78iN9iNiYnLV64+I07xGaE=");
const __TURBOPACK__default__export__ = {
    useLaggyMouse,
    LaggyMouse,
    useSlowdown,
    useMoneyDrain
};
var _c;
__turbopack_context__.k.register(_c, "LaggyMouse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOUNDS",
    ()=>SOUNDS,
    "default",
    ()=>SoundManager,
    "useSoundManager",
    ()=>useSoundManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const fanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [fanIntensity, setFanIntensity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSoundManager.useEffect": ()=>{
            // Précharger les sons
            Object.entries(SOUNDS).forEach({
                "useSoundManager.useEffect": ([key, url])=>{
                    const audio = new Audio(url);
                    audio.preload = "auto";
                    audioRefs.current[key] = audio;
                }
            }["useSoundManager.useEffect"]);
            return ({
                "useSoundManager.useEffect": ()=>{
                    // Nettoyer tous les sons
                    Object.values(audioRefs.current).forEach({
                        "useSoundManager.useEffect": (audio)=>{
                            audio.pause();
                            audio.src = "";
                        }
                    }["useSoundManager.useEffect"]);
                }
            })["useSoundManager.useEffect"];
        }
    }["useSoundManager.useEffect"], []);
    const playSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[playSound]": (soundName, options = {})=>{
            const audio = audioRefs.current[soundName];
            if (audio) {
                audio.volume = options.volume ?? 0.5;
                audio.loop = options.loop ?? false;
                audio.currentTime = 0;
                audio.play().catch({
                    "useSoundManager.useCallback[playSound]": ()=>{}
                }["useSoundManager.useCallback[playSound]"]); // Ignorer les erreurs autoplay
                return audio;
            }
        }
    }["useSoundManager.useCallback[playSound]"], []);
    const stopSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[stopSound]": (soundName)=>{
            const audio = audioRefs.current[soundName];
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }["useSoundManager.useCallback[stopSound]"], []);
    const startFanNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[startFanNoise]": ()=>{
            if (fanRef.current) {
                fanRef.current.pause();
            }
            // Ventilateur plus fort !
            fanRef.current = playSound("fanNoise", {
                loop: true,
                volume: 0.5
            });
            // Augmenter progressivement le volume du ventilateur
            const intensityInterval = setInterval({
                "useSoundManager.useCallback[startFanNoise].intensityInterval": ()=>{
                    setFanIntensity({
                        "useSoundManager.useCallback[startFanNoise].intensityInterval": (prev)=>{
                            const newIntensity = Math.min(prev + 0.05, 0.8);
                            if (fanRef.current) {
                                fanRef.current.volume = newIntensity;
                            }
                            return newIntensity;
                        }
                    }["useSoundManager.useCallback[startFanNoise].intensityInterval"]);
                }
            }["useSoundManager.useCallback[startFanNoise].intensityInterval"], 5000);
            return ({
                "useSoundManager.useCallback[startFanNoise]": ()=>clearInterval(intensityInterval)
            })["useSoundManager.useCallback[startFanNoise]"];
        }
    }["useSoundManager.useCallback[startFanNoise]"], [
        playSound
    ]);
    const stopFanNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[stopFanNoise]": ()=>{
            if (fanRef.current) {
                fanRef.current.pause();
                fanRef.current = null;
            }
            setFanIntensity(0.3);
        }
    }["useSoundManager.useCallback[stopFanNoise]"], []);
    const playPopupSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[playPopupSound]": ()=>{
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
        }
    }["useSoundManager.useCallback[playPopupSound]"], [
        playSound
    ]);
    const playErrorSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[playErrorSound]": ()=>{
            playSound("windowsError", {
                volume: 0.7
            });
        }
    }["useSoundManager.useCallback[playErrorSound]"], [
        playSound
    ]);
    const playSuccessSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSoundManager.useCallback[playSuccessSound]": ()=>{
            playSound("success", {
                volume: 0.5
            });
        }
    }["useSoundManager.useCallback[playSuccessSound]"], [
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
_s(useSoundManager, "kl3FejcWxYY+jyFQbl9lJnIaON4=");
function SoundManager({ children, soundManager }) {
    return children;
}
_c = SoundManager;
var _c;
__turbopack_context__.k.register(_c, "SoundManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/components/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Windows Components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-client] (ecmascript)");
// Linux Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-client] (ecmascript)");
// Shared Components
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-client] (ecmascript)");
// Effects
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-client] (ecmascript)");
// Sound
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsPopup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsDesktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/WindowsTaskbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/BlueScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxDesktop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTopBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxTerminal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/linux/LinuxWidgets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/BudgetCounter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/Notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/SystemMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/TransitionScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/effects/LagEffects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/sounds/SoundManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/windows/TaskManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/IntroScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/IdeaGeneral/ideegeneral/app/components/shared/EndingScreen.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MODES.INTRO);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linuxNotifications, setLinuxNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showTerminal, setShowTerminal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTaskManager, setShowTaskManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLinuxMonitor, setShowLinuxMonitor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasInteracted, setHasInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hooks personnalisés
    const { isFrozen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlowdown"])(mode === MODES.WINDOWS);
    const { money, bigExpense, addMoney, setMoney } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMoneyDrain"])(mode === MODES.WINDOWS);
    const soundManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSoundManager"])();
    // Gestionnaire de popups
    const triggerCrash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[triggerCrash]": ()=>{
            soundManager.stopFanNoise();
            soundManager.playErrorSound();
            setMode(MODES.BLUESCREEN);
        }
    }["Home.useCallback[triggerCrash]"], [
        soundManager
    ]);
    const { popups, closePopup, handleInteract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupManager"])(mode === MODES.WINDOWS, triggerCrash, soundManager.playPopupSound);
    // Démarrer le son du ventilateur en mode Windows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (mode === MODES.WINDOWS && hasInteracted) {
                soundManager.startFanNoise();
            }
            return ({
                "Home.useEffect": ()=>soundManager.stopFanNoise()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        mode,
        hasInteracted,
        soundManager
    ]);
    // Ouvrir automatiquement le Task Manager après 5 secondes pour montrer les ressources
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (mode === MODES.WINDOWS && hasInteracted) {
                const timeout = setTimeout({
                    "Home.useEffect.timeout": ()=>{
                        setShowTaskManager(true);
                    }
                }["Home.useEffect.timeout"], 5000);
                return ({
                    "Home.useEffect": ()=>clearTimeout(timeout)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        mode,
        hasInteracted
    ]);
    // Licence Microsoft après 15 secondes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (mode === MODES.WINDOWS) {
                const timeout = setTimeout({
                    "Home.useEffect.timeout": ()=>{
                        const message = bigExpense(7000000, "💳 Renouvellement licences Microsoft 365... -7 000 000 €");
                        setNotifications({
                            "Home.useEffect.timeout": (prev)=>[
                                    ...prev,
                                    {
                                        id: Date.now(),
                                        message,
                                        type: "bad"
                                    }
                                ]
                        }["Home.useEffect.timeout"]);
                        soundManager.playErrorSound();
                    }
                }["Home.useEffect.timeout"], 15000);
                return ({
                    "Home.useEffect": ()=>clearTimeout(timeout)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        mode,
        bigExpense,
        soundManager
    ]);
    // Économies Linux - UNE SEULE notification avec le total
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (mode === MODES.LINUX) {
                // Une seule notification groupée après 3 secondes
                const totalSavings = 27500000; // Total économisé
                const timeout = setTimeout({
                    "Home.useEffect.timeout": ()=>{
                        addMoney(totalSavings);
                        setLinuxNotifications([
                            {
                                id: Date.now(),
                                message: `🎉 Migration réussie ! Total économisé : +${totalSavings.toLocaleString("fr-FR")} €`
                            }
                        ]);
                        soundManager.playSuccessSound();
                    }
                }["Home.useEffect.timeout"], 3000);
                return ({
                    "Home.useEffect": ()=>clearTimeout(timeout)
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        mode,
        addMoney,
        soundManager
    ]);
    // Démarrer la simulation depuis l'intro
    const startSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[startSimulation]": ()=>{
            setMode(MODES.WINDOWS);
        }
    }["Home.useCallback[startSimulation]"], []);
    // Gestion du clic pour activer l'audio
    const handleFirstInteraction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleFirstInteraction]": ()=>{
            if (!hasInteracted) {
                setHasInteracted(true);
            }
        }
    }["Home.useCallback[handleFirstInteraction]"], [
        hasInteracted
    ]);
    // Passer à Linux
    const switchToLinux = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[switchToLinux]": ()=>{
            setMode(MODES.TRANSITION);
        }
    }["Home.useCallback[switchToLinux]"], []);
    const completeTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[completeTransition]": ()=>{
            setMoney(20000000); // Reset du budget initial Linux
            setMode(MODES.LINUX);
            soundManager.playSuccessSound();
            // Aller à l'ending après 20 secondes en mode Linux
            setTimeout({
                "Home.useCallback[completeTransition]": ()=>{
                    setMode(MODES.ENDING);
                }
            }["Home.useCallback[completeTransition]"], 20000);
        }
    }["Home.useCallback[completeTransition]"], [
        setMoney,
        soundManager
    ]);
    // Recommencer la simulation
    const restartSimulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[restartSimulation]": ()=>{
            setMode(MODES.INTRO);
            setMoney(50000000);
            setNotifications([]);
            setLinuxNotifications([]);
            setShowTerminal(true);
            setShowTaskManager(false);
            setShowLinuxMonitor(false);
            setHasInteracted(false);
        }
    }["Home.useCallback[restartSimulation]"], [
        setMoney
    ]);
    // Gestion des clics sur les icônes
    const handleWindowsIconClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleWindowsIconClick]": (icon)=>{
            // Ouvrir le task manager si clic sur l'icône appropriée
            if (icon.name === "Task Manager" || icon.name === "Paramètres") {
                setShowTaskManager(true);
            }
            handleInteract();
            soundManager.playPopupSound();
        }
    }["Home.useCallback[handleWindowsIconClick]"], [
        handleInteract,
        soundManager
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen overflow-hidden select-none",
        onClick: handleFirstInteraction,
        children: [
            mode === MODES.INTRO && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$IntroScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntroScreen"], {
                onStart: startSimulation
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 184,
                columnNumber: 32
            }, this),
            mode === MODES.WINDOWS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `windows-mode w-full h-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] ${isFrozen ? "pointer-events-none" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LaggyMouse"], {
                        isEnabled: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    isFrozen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-white/5 z-[9998] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg px-4 py-2 shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-800 text-sm",
                                children: "Ne répond pas..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 199,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 198,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowsDesktop"], {
                        onIconClick: handleWindowsIconClick,
                        isLagging: isFrozen
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsTaskbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowsTaskbar"], {
                        cpuUsage: 98,
                        isResponding: !isFrozen
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetCounter"], {
                            amount: money,
                            isPositive: false
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-28 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationStack"], {
                            notifications: notifications,
                            onDismiss: (id)=>setNotifications((prev)=>prev.filter((n)=>n.id !== id))
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
                    popups.map((popup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowsPopup"], {
                            ...popup,
                            onClose: closePopup,
                            onInteract: handleInteract
                        }, popup.id, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowsTaskManager"], {
                        isOpen: showTaskManager,
                        onClose: ()=>setShowTaskManager(false),
                        onInteract: handleInteract
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-16 left-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemMonitor"], {
                            cpuUsage: 98,
                            memoryUsage: 87,
                            diskUsage: 95,
                            fanSpeed: "MAX"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    !hasInteracted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/50 z-[10000]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg p-6 text-center max-w-md mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold mb-2",
                                    children: "🖥️ Bienvenue dans l'Enfer Windows"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "Cliquez n'importe où pour commencer l'expérience..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400",
                                    children: "(Astuce : Essayez de fermer les popups 😈)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 259,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 258,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            mode === MODES.BLUESCREEN && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$BlueScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlueScreenOfDeath"], {
                onHackerReady: switchToLinux
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 277,
                columnNumber: 9
            }, this),
            mode === MODES.TRANSITION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$TransitionScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionScreen"], {
                onComplete: completeTransition,
                duration: 3000
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 282,
                columnNumber: 9
            }, this),
            mode === MODES.LINUX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "linux-mode w-full h-full bg-gradient-to-br from-[#2d1b4e] via-[#1a1a2e] to-[#0d1117]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTopBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinuxTopBar"], {}, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxDesktop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinuxDesktop"], {
                        onIconClick: (icon)=>{
                            if (icon.name === "Terminal") setShowTerminal(true);
                            if (icon.name === "System Monitor") setShowLinuxMonitor(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-12 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$BudgetCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BudgetCounter"], {
                            amount: money,
                            isPositive: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-36 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationStack"], {
                            notifications: linuxNotifications,
                            onDismiss: (id)=>setLinuxNotifications((prev)=>prev.filter((n)=>n.id !== id)),
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-2xl px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxTerminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinuxTerminal"], {
                            isOpen: showTerminal,
                            onClose: ()=>setShowTerminal(false)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$TaskManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinuxTaskManager"], {
                        isOpen: showLinuxMonitor,
                        onClose: ()=>setShowLinuxMonitor(false)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 left-4 right-4 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$linux$2f$LinuxWidgets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinuxWidgets"], {}, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$SystemMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemMonitor"], {
                            isHealthy: true,
                            cpuUsage: 12
                        }, void 0, false, {
                            fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode(MODES.ENDING),
                            className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105 flex items-center gap-2",
                            children: "🎉 Continuer vers la conclusion"
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce z-10",
                        children: "🐧"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            mode === MODES.ENDING && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$shared$2f$EndingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EndingScreen"], {
                moneySaved: money,
                onRestart: restartSimulation
            }, void 0, false, {
                fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
                lineNumber: 358,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/IdeaGeneral/ideegeneral/app/page.js",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s(Home, "gd+wSDbbODEBK3v6HQ/SUl/AxvA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlowdown"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$effects$2f$LagEffects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMoneyDrain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$sounds$2f$SoundManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSoundManager"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$IdeaGeneral$2f$ideegeneral$2f$app$2f$components$2f$windows$2f$WindowsPopup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopupManager"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_IdeaGeneral_ideegeneral_app_1f6fb9d9._.js.map