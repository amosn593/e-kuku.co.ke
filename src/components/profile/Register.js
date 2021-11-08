import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signup_user } from "../../redux/Apicalls";

function Register() {
  document.title = "Register | E-KUKU";
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
    full_name: "",
    phone: "",
    password: "",
    re_password: "",
  });

  const { email, user_name, full_name, phone, password, re_password } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const data = {
    email: email,
    user_name: user_name,
    full_name: full_name,
    phone: phone,
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

  return (
    <div className="container-fluid mt-5 pt-3 login-div">
      <div className="row">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4>E-KUKU SIGN UP</h4>
          <p>Sign Up for a new Account</p>
          {signup_error && <p className="login-error">{signup_error_msg}</p>}
          {passerror && <p className="login-error">{error_msg}</p>}
          <form onSubmit={(e) => registeruser(e)} className="mt-3">
            <div className="row my-2">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  className="form-control"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Mobile Number</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="0700000000"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
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
                    className="text-white mx-1 footer-links"
                    to="/terms-and-conditions"
                  >
                    Terms & Conditions
                  </Link>
                  .
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
              <Link to="/sign-in" className="text-white mx-1">
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <div className="col-md-3 mt-3"></div>
      </div>
    </div>
  );
}

export default Register;
