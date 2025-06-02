import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  // Add a notification
  const notify = useCallback((message, type = "info") => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), message, type },
    ]);
  }, []);

  // Dismiss a notification
  const dismiss = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, notify, dismiss }}>
      {children}
    </NotificationContext.Provider>
  );
}

// Custom hook
export function useNotification() {
  return useContext(NotificationContext);
}
