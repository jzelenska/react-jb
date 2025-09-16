// src/components/NotificationDropdown.jsx
import React, { useState } from "react";
import { Bell } from "lucide-react";
import { useNotification } from "../context/NotificationContext";
import { usePolling } from "../hooks/usePolling";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const NotificationDropdown = () => {
  const { notifications, markAsRead, clearNotifications } = useNotification();
  const [open, setOpen] = useState(false);

  // Start polling every 15s
  usePolling(15000);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        {notifications.length === 0 && (
          <DropdownMenuItem>No notifications</DropdownMenuItem>
        )}
        {notifications.map((n) => (
          <DropdownMenuItem
            key={n.id}
            className={n.read ? "opacity-60" : ""}
            onClick={() => markAsRead(n.id)}
          >
            <div>
              <p className="text-sm">{n.message}</p>
              <span className="text-xs text-gray-400">
                {n.createdAt.toLocaleTimeString()}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
        {notifications.length > 0 && (
          <DropdownMenuItem
            className="text-red-500"
            onClick={clearNotifications}
          >
            Clear all
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;



// // src/components/NotificationDropdown.jsx
// import React, { useState } from "react";
// import { Bell } from "lucide-react";
// import { useNotification } from "@/context/NotificationContext";
// import { usePolling } from "@/hooks/usePolling";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const NotificationDropdown = () => {
//   const { notifications, markAsRead, clearNotifications } = useNotification();
//   const [open, setOpen] = useState(false);

//   // Start polling every 15s
//   usePolling(15000);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   return (
//     <DropdownMenu open={open} onOpenChange={setOpen}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon" className="relative">
//           <Bell className="w-5 h-5" />
//           {unreadCount > 0 && (
//             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
//               {unreadCount}
//             </span>
//           )}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-64">
//         {notifications.length === 0 && (
//           <DropdownMenuItem>No notifications</DropdownMenuItem>
//         )}
//         {notifications.map((n) => (
//           <DropdownMenuItem
//             key={n.id}
//             className={n.read ? "opacity-60" : ""}
//             onClick={() => markAsRead(n.id)}
//           >
//             <div>
//               <p className="text-sm">{n.message}</p>
//               <span className="text-xs text-gray-400">
//                 {n.createdAt.toLocaleTimeString()}
//               </span>
//             </div>
//           </DropdownMenuItem>
//         ))}
//         {notifications.length > 0 && (
//           <DropdownMenuItem
//             className="text-red-500"
//             onClick={clearNotifications}
//           >
//             Clear all
//           </DropdownMenuItem>
//         )}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default NotificationDropdown;

