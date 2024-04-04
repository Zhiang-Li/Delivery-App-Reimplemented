import React, {useState, useRef}from "react";
import LoginNavBar from "../templates/LoginNavBar";
import { useNavigate} from "react-router-dom";
import { myFirebase } from "../models/MyFirebase";
export default function LoginPage(){
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("1");
  const emailRef = useRef();
  const passwordRef = useRef();

  const onLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(!email.includes("@") || !email.includes(".com") || password.length < 10){
      alert("email type incorrect or password length less than 10!");
      return;
    }
    try{
      await myFirebase.signIn(email, password);
      if(userType === "2"){
        navigate("/poster");
      }else if (userType === "1"){
        navigate("/deliverer");
      }

    }catch(error){
      alert(error.message);
    }

  };
  return (
    <><LoginNavBar></LoginNavBar>
      <form>
        <h3>Log In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            defaultValue="test@gmail.com"
            ref={emailRef}
            placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            defaultValue="jimmyjimmy"
            ref={passwordRef}
            placeholder="Enter password" />
        </div>
        <div className="mb-3">
          <label>Deliverer or Poster? Select here: </label>
          <select
            className="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value={1}>Deliverer</option>
            <option value={2}>Poster</option>
          </select>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={onLogin}>
            Log In
          </button>
        </div>
        <p className="forgot-password text-right">
          Do not have an account? <a href="/sign-up">Sign up here</a>
        </p>
      </form></>
  );
};

