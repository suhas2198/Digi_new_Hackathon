import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditProduct = () => {
    const [name, setName] = useState("");
  const [packSize, setPackSize] = useState("");
  const [category, setCatgory] = useState("");
  const [mrp, setMrp] = useState("");
  const [image, setIamge] = useState("");
  const navigate = useNavigate();
  const params=useParams()
  


  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async (req, res) => {
    console.warn(params);
    let result = await fetch(
      `http://localhost:3035/api/v1/products/${params.id}`
    );
    result=await result.json()
    console.warn(result)
    
    setName(result.product.name)
    setPackSize(result.product.packSize)
    setCatgory(result.product.category)
    setMrp(result.product.mrp)
    setIamge(result.product.image)


    
  };


const handleUpdate=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3035/api/v1/product/${params.id}`, {
        name,
        packSize,
        category,
        mrp,
        image
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

}

  return (
    <Layout>
      <div className="form-container">
        <h4 className="title">Updating Product</h4>
        <form onSubmit={handleUpdate}>
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

export default EditProduct;
