import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../redux/Apicalls";

function Login() {
  document.title = "Login | E-KUKU";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const data = {
    email: email,
    password: password,
  };

  const body = JSON.stringify(data);

  const dispatch = useDispatch();

  const history = useHistory();

  const { login_pending, error, loggedin, login_user_error } = useSelector(
    (state) => state.user
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    login_user(body, dispatch);
  };

  if (loggedin) {
    history.push("/");
  }

  return (
    <div className="container mt-3 mx-3">
      <div className="row mx-3">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4>SIGN IN</h4>
          <p>Sign into your Account</p>
          {error && <p className="login-error">{login_user_error}</p>}

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
            <button
              disabled={login_pending && !error}
              type="submit"
              className="btn btn-primary sign-in mx-1 py-1"
            >
              Sign In
            </button>
            <p className="mt-3">
              Don't Have an account?
              <Link to="/sign-up" className="mx-1 py-1">
                Sign Up
              </Link>
            </p>
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
