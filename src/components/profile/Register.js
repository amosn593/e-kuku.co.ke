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
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  const { email, user_name, first_name, last_name, password, re_password } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const data = {
    email: email,
    user_name: user_name,
    first_name: first_name,
    last_name: last_name,
    password: password,
    re_password: re_password,
  };

  const body = JSON.stringify(data);

  const history = useHistory();

  const dispatch = useDispatch();

  //   console.log(email);
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
    history.push("/sign-in");
  }

  return (
    <div className="container mt-3">
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
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  required
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
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
                  maxLength="7"
                  className="form-control"
                  placeholder="Max Length 8 "
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

            <button
              disabled={signup_pending}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Register
            </button>
            <p className=" my-3 py-4">
              Already Have an account?
              <Link to="/sign-in" className="mx-1">
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
