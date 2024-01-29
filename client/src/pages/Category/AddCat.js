import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/addcat.css";

const AddCat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3035/api/v1/category", {
        name,
        description,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/category");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <h4 className="title">Adding category</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="Name"
              placeholder="Enter Category Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="form-control"
              id="Description"
              placeholder="Enter description of category"
              required
            />
          </div>

          <Link to="/category">
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

export default AddCat;
