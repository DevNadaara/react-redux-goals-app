import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, register } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "./spinner";

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    dispatch(register(userData));
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate("/");

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

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
