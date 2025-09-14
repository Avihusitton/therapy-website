import React from "react";

export const Label = ({ children, ...props }) => {
  return (
    <label
      {...props}
      style={{
        display: "block",
        marginBottom: "6px",
        fontWeight: "bold",
        fontSize: "0.95rem",
      }}
    >
      {children}
    </label>
  );
};