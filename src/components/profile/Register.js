import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  //   console.log(email);
  const registeruser = (e) => {
    e.preventDefault();
    // dispatch(login());
    history.push("/");
  };
  return (
    <div className="container">
      <div className="row mt-5 pt-4">
        <div className="col-md-3 mt-5"></div>
        <div className="col-md-6 mt-5">
          <h4>E-KUKU SIGN UP</h4>
          <form className="mt-5 mb-5 pb-5">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                required
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={registeruser}
            >
              Sign Up
            </button>
            <span className="mx-2">
              Already Have an account?
              <Link to="/sign-in" className="mx-1">
                Sign In
              </Link>
            </span>
          </form>
        </div>
        <div className="col-md-3 mt-5"></div>
      </div>
    </div>
  );
}

export default Register;
