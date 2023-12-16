import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((res) => {
      setName(res.data.name);
      setDescription(res.data.description);
      setPrice(res.data.price);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    description: description,
    price: price
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/products/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Product Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter product name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter Description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter price here"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE PRODUCT
        </button>
      </form>
    </div>
  );
}

export default Add;
