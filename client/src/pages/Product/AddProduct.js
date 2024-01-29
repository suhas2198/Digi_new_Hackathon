import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [packSize, setPackSize] = useState("");
  const [category, setCatgory] = useState("");
  const [mrp, setMrp] = useState("");
  const [image, setIamge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3035/api/v1/products", {
        name,
        packSize,
        category,
        mrp,
        image,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/product");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
      <div className="form-container">
        <h4 className="title">Adding Product</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="Name"
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={packSize}
              onChange={(e) => setPackSize(e.target.value)}
              className="form-control"
              id="packSize"
              placeholder="Enter Pack Size"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={category}
              onChange={(e) => setCatgory(e.target.value)}
              className="form-control"
              id="category"
              placeholder="Enter category type"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              className="form-control"
              id="mrp"
              placeholder="Enter price of product"
              required
            />
          </div> 
          <div className="mb-3">
            <input
              type="text"
              value={image}
              onChange={(e) => setIamge(e.target.value)}
              
              className="form-control"
              id="image"
              placeholder="Enter image link"
              required
            />
          </div>

          <Link to="/product">
            {" "}
            <button type="submit" className="btn btn-secondary">
              Cancel
            </button>
          </Link>

          <button type="submit" className="btn btn-primary ms-3">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};
