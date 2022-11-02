import React, { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("submit...");
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { username, email, password } = formData;
  return (
    <div className="my-3  d-flex flex-column align-items-center">
      <h3 className="">Create User</h3>

      <form onSubmit={handleSubmit} className="w-50 fs-5">
        <div className="">
          <label className="form-label" htmlFor="name">
            Username
          </label>
          <input
            value={username}
            onChange={handleChange}
            name="username"
            className="form-control"
            type="text"
          />
        </div>
        <div className="">
          <label className="form-label" htmlFor="name">
            Email
          </label>
          <input
            value={email}
            onChange={handleChange}
            name="email"
            className="form-control"
            type="text"
          />
        </div>
        <div className="">
          <label className="form-label" htmlFor="name">
            Password
          </label>
          <input
            value={password}
            onChange={handleChange}
            name="password"
            className="form-control"
            type="text"
          />
        </div>
        <button className="btn btn-primary fs-5 mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Register;
