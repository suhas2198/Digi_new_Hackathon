import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";
import "../../styles/category.css";
import { Link } from "react-router-dom";
export const Category = () => {
  const [category, SetCategory] = useState([]);

  // get all cat
  const getCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:3035/api/v1/category");
      console.log(category);

      if (data.success) {
        SetCategory(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrng in getting category");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const deleteCategory = async (_id) => {
    console.log(_id);
    const res = await axios.delete(
      `http://localhost:3035/api/v1/category/${_id}`
    );
    if (res.success) {
      toast.success("category deleted successfully");
    }
    if (res) {
      getCategory();
    }
  };
  return (
    <Layout>
      <div className="container mt-5">
        <div className="topcat">
          <div className="cat-title">Category</div>
          <div className="search-bar"></div>
          <div className="addCat">
            <p>
              <Link to="/category/addcat" className="add">
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
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((c) => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.description}</td>
                  <td>
                    <Link to={"/category/editcat/"+c._id}>
                      {" "}
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => deleteCategory(c._id)}
                    >
                      Delete
                    </button>
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
