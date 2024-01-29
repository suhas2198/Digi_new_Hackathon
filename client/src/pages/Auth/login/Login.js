import "../login/login.css";
import { Link } from "react-router-dom";
import img from "../../../assets/images/coding.jpeg";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //from function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3035/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/home");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <div className="loginbox">
          <div className="login-top">
            <span className="icon">D</span>
            <div className="home-title">
              <h4>
                <strong>digital</strong>flake
              </h4>
            </div>
            <div className="welcome">Welcome to Digital Flake Admin</div>
          </div>
          <div className="login-main">
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="Email"
              placeholder="Enter your Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="Password1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <Link to="/register">
                <p className="register">
                  I don't have account!! <strong>Register</strong>
                </p>
              </Link>
          
        </form>
             
          </div>
        </div>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Login;
