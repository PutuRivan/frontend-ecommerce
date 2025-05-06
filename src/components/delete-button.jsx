import React from "react";

export const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
  };
  return (
    <button onClick={handleDelete} className="btn btn-secondary">
      Delete
    </button>
  );
};
