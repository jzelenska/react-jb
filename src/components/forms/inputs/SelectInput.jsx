import React from "react";
export default function SelectInput({ label, children, ...props }){
  return (
    <label className="stack" style={{ width: "100%" }}>
      <span>{label}</span>
      <select className="input" {...props}>{children}</select>
    </label>
  );
}

