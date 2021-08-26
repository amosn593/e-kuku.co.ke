import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  //   console.log(email);
  const loginuser = (e) => {
    e.preventDefault();
    dispatch(login());
    history.push("/");
  };
  return (
    <div className="container">
      <div className="row mt-5 pt-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form action="" className="mt-5 mb-5 pb-5">
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
            <button type="submit" class="btn btn-primary" onClick={loginuser}>
              Sign In
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Login;
