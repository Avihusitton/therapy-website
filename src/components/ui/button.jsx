import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: "12px 24px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    >
      {children}
    </button>
  );
};