
import React from "react";
export default function Checkbox({ label, ...props }){
  return (
    <label>
      <input type="checkbox" {...props} /> {label}
    </label>
  );
}