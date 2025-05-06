import React, { useState } from "react";

export const UpdateProductPage = () => {
  const [description, setdescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description,
    };
    console.log(data);

    const response = await fetch("http://localhost:5000/products/2", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  };

  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary w-full max-w-xs">
          Login
        </button>
      </form>
    </div>
  );
};
