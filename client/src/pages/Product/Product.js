import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import "../../styles/category.css"
import axios from 'axios'
import toast from "react-hot-toast";


export const Product = () => {
  const [product, SetProduct] = useState([]);

  // get all cat
  const getProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:3035/api/v1/products");
     

      if (data.success) {
        SetProduct(data.product);
        console.log(product);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrng in getting category");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct=async(_id)=>{
    console.log(_id)
    const res=await axios.delete(`http://localhost:3035/api/v1/products/${_id}`)
    if(res.success){
      toast.success("product deleted succefully")
     
    }
    if(res){
      getProduct()
    }
  }
  return (
    <Layout>
      <div className="container mt-5">
        <div className="topcat">
          <div className="cat-title">Product</div>
          <div className="search-bar"></div>
          <div className="addCat">
            <p>
              <Link to="/product/addproduct" className="add">
                Add
              </Link>
            </p>
          </div>
        </div>
        <div className="cat-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Pack-Size</th>
                <th scope="col">Category</th>
                <th scope="col">MRP</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
            <tbody>
              {product.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.packSize}</td>
                  <td>{p.category}</td>
                  <td>{p.mrp}</td>
                  <td><img src={"/"+p.image} alt="img"style={{width:"50px" }} /></td>
                  <td>
                    <Link to={"/product/editproduct/"+p._id}>
                      {" "}
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button className="btn btn-danger ms-2" onClick={()=>deleteProduct(p._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
