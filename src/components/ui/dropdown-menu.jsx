import React, { useState } from "react";

export const DropdownMenu = ({ children, open, onOpenChange }) => {
  return <div className="relative inline-block">{children}</div>;
};

export const DropdownMenuTrigger = ({ asChild, children }) => {
  return <div>{children}</div>;
};

export const DropdownMenuContent = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute right-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg z-50 ${className}`}
    >
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};

