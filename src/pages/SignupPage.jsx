import React, {useState} from "react";
import LoginNavBar from "../templates/LoginNavBar";
import { myFirebase } from "../models/MyFirebase";
import { useNavigate } from "react-router-dom";
export default function SignupPage(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) =>{
    e.preventDefault();
    if(!email.includes("@") || !email.includes(".com") || password.length < 10){
      alert("email type incorrect or password length less than 10!");
      return;
    }
    myFirebase.createUser(email,password);
    navigate("/sign-in");
  };

  return (
    <><LoginNavBar></LoginNavBar>
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            required
            placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            required
            placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form></>
  );
};
