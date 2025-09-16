import React from "react";
export default function ErrorMessage({ title = "Something went wrong", details }) {
  return (
    <div className="card">
      <strong>{title}</strong>
      {details && <div className="muted">{details}</div>}
    </div>
  );
}








// src/components/common/ErrorMessage.jsx
// import React from "react";

// const ErrorMessage = ({ message }) => (
//   <div className="alert alert-danger text-center my-3">{message}</div>
// );

// export default ErrorMessage;