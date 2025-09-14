import React from "react";

export const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
};