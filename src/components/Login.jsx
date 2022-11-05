import React, { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("submit...");
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { username, password } = formData;
  return (
    <div className="my-3  d-flex flex-column align-items-center">
      <h3 className="">Login please</h3>

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

export default Login;
