import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification
  const addNotification = useCallback((message, type = "info") => {
    const id = Date.now();
    setNotifications((prev) => [
      ...prev,
      { id, message, type, read: false, createdAt: new Date() },
    ]);
  }, []);

  // Mark a notification as read
  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  // Remove a notification
  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        removeNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};




// // src/context/NotificationContext.jsx
// import React, { createContext, useContext, useState, useCallback } from "react";

// const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);

//   // Add a new notification
//   const addNotification = useCallback((message, type = "info") => {
//     const id = Date.now();
//     setNotifications((prev) => [
//       ...prev,
//       { id, message, type, read: false, createdAt: new Date() },
//     ]);
//   }, []);

//   // Mark a notification as read
//   const markAsRead = useCallback((id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//   }, []);

//   // Remove a notification
//   const removeNotification = useCallback((id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   }, []);

//   // Clear all notifications
//   const clearNotifications = useCallback(() => {
//     setNotifications([]);
//   }, []);

//   return (
//     <NotificationContext.Provider
//       value={{
//         notifications,
//         addNotification,
//         markAsRead,
//         removeNotification,
//         clearNotifications,
//       }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// };

// export const useNotification = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error(
//       "useNotification must be used within a NotificationProvider"
//     );
//   }
//   return context;
// };
