import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../redux/Apicalls";
import Bg from "../assets/chicken-bg.jpg";

function Login() {
  document.title = "E-KUKU | Login";

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
        <div className="col-md-6 mt-3 auth-right-div">
          <div className="row mx-2 my-2 py-2">
            <h4 className="text-center my-3 py-4">
              Your Number One Platform For all your Poultry Needs!
            </h4>
            <div className="col-md-6 px-2">
              <h4>How to buy on E-KUKU?</h4>
              <h6>1. Search for the item.</h6>
              <p>
                Find what you need using search panel and filters. We have over
                a million adverts, choose exactly what you are looking for.
              </p>
              <h6>2. Contact a seller.</h6>
              You call them via phone. Discuss all the details, negotiate about
              the price.
              <h6>3. Take your item or order a delivery.</h6>
              <p>
                We check our sellers carefully, but it’s always better to check
                twice, right? Meet a seller in public place and be sure to pay
                only after collecting your item.
              </p>
            </div>
            <div className="col-md-6 px-2">
              <h4>How to Sell on E-KUKU?</h4>
              <h6>1. Register.</h6>
              <p>
                Register an account on e-kuku. Make sure you’re entering a
                correct phone number, so your clients could reach you!
              </p>
              <h6>2.Make best photo of your item.</h6>
              <p>Take a best photo of your item.</p>

              <h6>3.Press Post</h6>
              <p>
                Choose a proper category,county, subcounty upload your photo,
                enter item descriptions, contact number, location, enter price
                and write a clear title.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <h4 className="h3 text-center">SIGN IN</h4>
          <p className="text-center">Sign into your Account</p>
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
