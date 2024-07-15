import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file for custom styles
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <form className="row g-4 mx-auto signup-form" onSubmit={handleSubmit}>
        <div className="col-12">
          <div className="col-md-12 mb-3">
            <label htmlFor="inputName4" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              className="form-control"
              id="inputName4"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputContact4" className="form-label">
              Contact
            </label>
            <input
              name="contact"
              value={input.contact}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              className="form-control"
              id="inputContact4"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="text-center text-muted mt-5 mb-0">
              Have already an account
          <Link to="/login" className="fw-bold text-body">
                  click here to login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
