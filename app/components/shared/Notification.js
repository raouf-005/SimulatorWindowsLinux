"use client";

import { useEffect, useState } from "react";

export function Notification({
  id,
  message,
  type = "info",
  onDismiss,
  autoDismiss = true,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    requestAnimationFrame(() => setIsVisible(true));

    // Auto-dismiss après 5 secondes
    if (autoDismiss) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onDismiss?.(id), 300);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [id, autoDismiss, onDismiss]);

  const typeStyles = {
    error: "bg-red-800/90 border-red-600",
    success: "bg-green-800/90 border-green-600",
    warning: "bg-yellow-800/90 border-yellow-600",
    info: "bg-blue-800/90 border-blue-600",
  };

  return (
    <div
      className={`
        text-white px-4 py-3 rounded-lg shadow-lg text-sm border
        transition-all duration-300 transform
        ${typeStyles[type] || typeStyles.info}
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
      `}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg">
          {type === "error" && "❌"}
          {type === "success" && "✅"}
          {type === "warning" && "⚠️"}
          {type === "info" && "ℹ️"}
        </span>
        <div className="flex-1">
          <p>{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onDismiss?.(id), 300);
          }}
          className="text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function NotificationStack({
  notifications,
  onDismiss,
  isPositive = false,
}) {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      {notifications.map((notif) => (
        <Notification
          key={notif.id}
          id={notif.id}
          message={notif.message}
          type={isPositive ? "success" : "error"}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
}

export default Notification;
