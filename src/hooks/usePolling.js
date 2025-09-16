// src/hooks/usePolling.js
import { useEffect, useRef } from "react";
import { useNotification } from "../context/NotificationContext";

export const usePolling = (interval = 10000) => {
  const { addNotification } = useNotification();
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchNotifications = () => {
      // Mock notification generator
      const id = Date.now();
      addNotification(`Mock notification #${id}`, "info");
    };

    // start polling
    fetchNotifications(); // trigger immediately
    intervalRef.current = setInterval(fetchNotifications, interval);

    return () => clearInterval(intervalRef.current);
  }, [interval, addNotification]);
};


// // src/hooks/usePolling.js
// import { useEffect, useRef } from "react";
// import { useNotification } from "@/context/NotificationContext";
// import notificationService from "@/services/notificationService"; // <-- assumed service

// export const usePolling = (interval = 10000) => {
//   const { addNotification } = useNotification();
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const newNotifications = await notificationService.getNotifications();
//         newNotifications.forEach((n) =>
//           addNotification(n.message, n.type || "info")
//         );
//       } catch (err) {
//         console.error("Polling error:", err);
//       }
//     };

//     // start polling
//     fetchNotifications();
//     intervalRef.current = setInterval(fetchNotifications, interval);

//     return () => clearInterval(intervalRef.current);
//   }, [interval, addNotification]);
// };
