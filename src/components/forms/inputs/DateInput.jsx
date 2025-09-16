import React from "react";
export default function DateInput({ label, ...props }){
  return (
    <label className="stack" style={{ width: "100%" }}>
      <span>{label}</span>
      <input type="date" className="input" {...props} />
    </label>
  );
}