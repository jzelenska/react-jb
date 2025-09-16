import React from "react";
export default function TextInput({ label, ...props }){
  return (
    <label className="stack" style={{ width: "100%" }}>
      <span>{label}</span>
      <input className="input" {...props} />
    </label>
  );
}