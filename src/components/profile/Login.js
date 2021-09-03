import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { axios } from "../inc/axios";
import { login } from "../../redux/userSlice";
// import { loginuser } from "../../redux/Apicalls";

function Login() {
  const [access, setAccess] = useState("");
  const [refresh, setRefresh] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const user = {
    email: email,
    password: password,
  };

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  const dispatch = useDispatch();
  const history = useHistory();

  //   console.log(email);
  const onSubmit = async (e) => {
    e.preventDefault();
    // loginuser({ email, password }, dispatch);
    // console.log(body);
    const response = await axios
      .post("/auth/jwt/create/", body, config)
      .catch((err) => console.log(err));
    if (response && response.data) {
      console.log(response.data.access);
      setAccess(response.data.access);
      setRefresh(response.data.refresh);
      console.log(email);
      console.log(response.data.access);
      console.log(access);
      console.log(email);
      console.log(refresh);
      dispatch(login({ email, access, refresh }));
      history.push("/");
    } else {
      console.log("something went wrong!!!");
    }

    // history.push("/");
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4>E-KUKU SIGN IN</h4>
          <p>Sign into your Account</p>
          <form onSubmit={(e) => onSubmit(e)} className="mt-3 mb-5 pb-5">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                required
                onChange={(e) => onChange(e)}
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                minLength="6"
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="mb-3 error">{}</div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <span className="mx-2">
              Don't Have an account?
              <Link to="/sign-up" className="mx-1">
                Sign Up
              </Link>
            </span>
            <p className="mt-3">
              Forgot your Password?{" "}
              <Link to="/Reset-Password">Reset Password</Link>
            </p>
          </form>
        </div>
        <div className="col-md-3 mt-5"></div>
      </div>
    </div>
  );
}

export default Login;
