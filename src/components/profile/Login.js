import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/userSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [errors, setErrors] = useState("error");
  const [error, setError] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  //   console.log(email);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // setError[true];
      // setErrors["Email and Password cant be blank!!!"];
    } else {
      dispatch(login({ email }));
      history.push("/");
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 pt-4">
        <div className="col-md-3 mt-5"></div>
        <div className="col-md-6 mt-5">
          <h4>E-KUKU SIGN IN</h4>
          <p>Sign into your Account</p>
          <form onSubmit={(e) => onSubmit(e)} className="mt-5 mb-5 pb-5">
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
            <div className="mb-3 error">{error && <p>{errors}</p>}</div>
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
              Forgot your Password? <Link to="/sign-up">Reset Password</Link>
            </p>
          </form>
        </div>
        <div className="col-md-3 mt-5"></div>
      </div>
    </div>
  );
}

export default Login;
