import "./App.css";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product/Product";
import { Category } from "./pages/Category/Category";
import { Toaster } from "react-hot-toast";
import AddCat from "./pages/Category/AddCat";
import EditCat from "./pages/Category/EditCat";
import Login from "./pages/Auth/login/Login";
import Register from './pages/Auth/Register/Register';
import { AddProduct } from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";


function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/Products" element={<Product />}></Route>
        <Route path="/category/addcat" element={<AddCat />}></Route>
        <Route path="/category/editcat/:id" element={<EditCat />}></Route>
        <Route path="/product/addproduct" element={<AddProduct />}></Route>
        <Route path="/product/editproduct/:id" element={<EditProduct />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
