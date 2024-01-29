import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const EditCat = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate=useNavigate()

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const getCategoryDetails = async (req, res) => {
    console.warn(params);
    let result = await fetch(
      `http://localhost:3035/api/v1/category/${params.id}`
    );
    result=await result.json()
    console.warn(result)
    
    setName(result.category.name)
    setDescription(result.category.description)


    
  };
  const updateCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3035/api/v1/category/${params.id}`, {
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
    console.warn(name, description);
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <h4 className="title">Adding category</h4>
        <form>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              id="Description"
              placeholder="Enter description of category"
              required
            />
          </div>

          <button
            onClick={updateCategory}
            type="submit"
            className="btn btn-primary"
          >
            Update Category
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditCat;
