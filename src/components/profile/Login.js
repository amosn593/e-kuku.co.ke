import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../redux/Apicalls";
import Bg from "../assets/chicken-bg.jpg";

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

  const { login_pending, error, login_user_error } = useSelector(
    (state) => state.user
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    login_user(body, dispatch, history);
  };

  useEffect(() => {
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="container-fluid login-div"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="row pt-4 mx-3">
        <div className="col-md-6 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4 className="h3">SIGN IN</h4>
          <p>Sign into your Account</p>
          {error && <p className="login-error">{login_user_error}</p>}

          <form onSubmit={(e) => onSubmit(e)} className="mt-3 mb-5 pb-5">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
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
              <Link to="/sign-up" className=" mx-1 py-1 auth-links">
                Register Here
              </Link>
            </p>
            {/* <p className="mt-3">
              Forgot your Password?
              <Link to="/Reset_Password" className="text-white mx-1 py-1">
                Reset Password
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
