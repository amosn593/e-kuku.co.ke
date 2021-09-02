import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/userSlice";

function Resetpassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;
  const history = useHistory();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/Reset-Password-Email");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 mt-3">
          <h4>E-KUKU Password Reset</h4>
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

            {/* <div className="mb-3 error">{error && <p>{errors}</p>}</div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-3 mt-5"></div>
      </div>
    </div>
  );
}

export default Resetpassword;
