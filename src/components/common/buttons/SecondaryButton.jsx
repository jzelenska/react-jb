import React from "react";
export default function SecondaryButton({ children, ...props }) {
    return (
        <button className="btn" {...props}>
            {children}
        </button>
    );
}
