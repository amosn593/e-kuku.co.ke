import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axios } from "../inc/axios";

function Resetpassword() {
  const [reset, setReset] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email });
    try {
      await axios.post("/auth/users/reset_password/", body, config);

      setRequestSent(true);
      setPending(false);
    } catch (err) {
      setError(true);
      setReset("Something went wrong, try again!!!");
      setPending(false);
    }
  };

  return (
    <div className="container-fluid mt-5 pt-3 login-div">
      <div className="row">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4>Request Password Reset</h4>
          {error && <p className="login-error">{reset}</p>}
          {!requestSent && (
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
              <button
                disabled={pending}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <p className=" my-3 py-4">
                Remembered your Password?
                <Link to="/sign-in" className="text-white mx-1">
                  Sign In
                </Link>
              </p>
            </form>
          )}
          {requestSent && (
            <p className="my-2 py-3">
              Check your email for a password reset Link.
            </p>
          )}
        </div>
        <div className="col-md-3 mt-5"></div>
      </div>
    </div>
  );
}

export default Resetpassword;
