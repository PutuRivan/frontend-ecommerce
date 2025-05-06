import React, { useState } from "react";

export const AddProductPage = () => {
  const [Nama, setNama] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState();
  const [stock, setstock] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Nama,
      category,
      price,
      stock,
      description,
    };
    console.log(data);

    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
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
          placeholder="nama"
          onChange={(e) => setNama(e.target.value)}
          value={Nama}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="stock"
          value={stock}
          onChange={(e) => setstock(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
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
