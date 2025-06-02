import React, { useState, useEffect } from "react";

// NotificationCenter expects notifications as an array of objects:
// { id, type, message }
export default function NotificationCenter({ notifications, onDismiss }) {
  useEffect(() => {
    // Auto-dismiss notifications after 5 seconds
    if (notifications.length === 0) return;
    const timers = notifications.map(n =>
      setTimeout(() => onDismiss(n.id), 5000)
    );
    return () => timers.forEach(clearTimeout);
  }, [notifications, onDismiss]);

  if (!notifications.length) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-center bg-white border-l-4 shadow px-4 py-3 rounded min-w-[250px]
            ${n.type === "success" ? "border-green-500" : ""}
            ${n.type === "info" ? "border-blue-500" : ""}
            ${n.type === "warning" ? "border-yellow-500" : ""}
            ${n.type === "error" ? "border-red-500" : ""}
          `}
        >
          <span className="flex-1 text-gray-800">{n.message}</span>
          <button
            onClick={() => onDismiss(n.id)}
            className="ml-4 text-gray-400 hover:text-gray-700"
            title="Dismiss"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}
