import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for custom styles
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const[input,setInput]=useState({email:"",password:""});
  const navigate =useNavigate()
const handleLogin=(e)=>{
e.preventDefault();
const loggedUser=JSON.parse(localStorage.getItem("user"))

if(input.email===loggedUser.email && input.password === loggedUser.password){
  localStorage.setItem("loggedin",true)
navigate("/")
}
else{
 alert("usernot valid")
}
}
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <form className="row g-4 mx-auto login-form" onSubmit={handleLogin}>
        <div className="col-12">
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input name='email'value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="email" className="form-control" id="inputEmail4" />
          </div>;
          <div className="col-md-12 mb-3">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input  name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="password" className="form-control" id="inputPassword4" />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        <p className="text-center text-muted mt-5 mb-0">
               Don't Have an account?
          <Link to="/register" className="fw-bold text-body">
                 register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
