import React from "react";

export const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title || "Default Title"}</h2>
    </div>
  );
};
