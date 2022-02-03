import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signup_user } from "../../redux/Apicalls";
import Bg from "../assets/chicken-bg.jpg";

function Register() {
  document.title = "E-KUKU | Register";
  const [passerror, setPasserror] = useState(false);
  const [error_msg, setError_msg] = useState("");
  const {
    signup_error,
    signup_error_msg,
    signup_pending,
    signup,
    isAuthenticated,
  } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    user_name: "",
    password: "",
    re_password: "",
  });

  const { email, user_name, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const data = {
    email: email,
    user_name: user_name,
    password: password,
    re_password: re_password,
  };

  const body = JSON.stringify(data);

  const history = useHistory();

  const dispatch = useDispatch();

  const registeruser = async (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup_user(body, dispatch);
    } else {
      setPasserror(true);
      setError_msg("Two passwords did not match!!!");
    }
  };

  if (isAuthenticated) {
    history.push("/");
  }

  if (signup) {
    alert("Account Created Successfully");
    history.push("/sign-in");
  }

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
      <div className="row pt-4">
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
          <h4 className="h3 text-center">E-KUKU SIGN UP</h4>
          <p className="text-center">Sign Up for a new Account</p>
          {signup_error && <p className="login-error">{signup_error_msg}</p>}
          {passerror && <p className="login-error">{error_msg}</p>}
          <form onSubmit={(e) => registeruser(e)} className="mt-3">
            <div className="row my-2">
              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  name="user_name"
                  maxLength="6"
                  className="form-control"
                  placeholder="Max Length 6 "
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[@#$,.()%!])(?=.*[A-Z]).{8,15}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, special characters and at least 8 or more characters"
                  className="form-control"
                  placeholder="8 charachers and above"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="re_password"
                  minLength="8"
                  className="form-control"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 my-2 py-2">
                <p className="text-center">
                  By creating an account you agree to our
                  <Link
                    className="text-white mx-1 px-2 footer-links"
                    to="/terms-and-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>

            <button
              disabled={signup_pending}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Register
            </button>
            <p className=" my-3 py-4">
              Already Have an account?
              <Link to="/sign-in" className="mx-1 auth-links">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
