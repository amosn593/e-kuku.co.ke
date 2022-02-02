import React, { useState, useEffect } from "react";
import "./Mpesa.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axios } from "../inc/axios";
import { UpdateUser } from "../../utils/UpdateUser";

function Mpesa() {
  document.title = "Advert sponsor | E-KUKU";
  const [paying, setPaying] = useState(null);
  const [mobile, setMobile] = useState(254);
  const [plan, setPlan] = useState(null);
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  const new_mobile = "254" + mobile.toString();
  const data = {
    category: category,
    mobile: parseInt(new_mobile),
    amount: amount,
    id: parseInt(id),
  };

  const body = JSON.stringify(data);

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  if (mobile.toString().length > 10) {
    alert("Enter valid mobile number(10 digits only)");
  }

  const finish = async (e) => {
    e.preventDefault();

    // setPaying(true);
    // if (localStorage.getItem("access")) {
    //   if (plan) {
    //     try {
    //       const res = await axios.post("/mpesa/lipa/", body, config);
    //       console.log(res);
    //       if (res.status === 200) {
    //         setPaying(false);
    //       }
    //     } catch (err) {
    //       console.log("error occured");
    //       setPaying(false);
    //     }
    //   } else {
    //     history.push("/");
    //   }
    // } else {
    //   setPaying(false);
    //   alert("You have been LoggedOut, Kindly Login Again!!!");
    //   history.push("/sign-in");
    // }
    alert("Product Posted Successfully");
    history.push("/");
  };

  useEffect(() => {
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);

  UpdateUser();

  return (
    <div className="container">
      <div className="w-100 mx-auto bg-dark">
        <h5 className="text-center align-center text-white py-4">
          Sponsor Your Advert
        </h5>
      </div>
      <div className="row text-center mt-3 pt-3">
        <div className="col-md-4">
          <div className="sponsor-card">
            <div className="free-plan">
              <h5>Free Plan</h5>
              <p>ksh 0</p>
            </div>

            <ul className="sponsor-ul">
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Free advert posting</span>
                </i>
              </li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="sponsor-card">
            <div className="basic-plan">
              <h5>Basic Plan</h5>
              <p>ksh 250 Paid Once</p>
            </div>

            <ul className="sponsor-ul">
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Free advert posting</span>
                </i>
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Advert Search Optimization</span>
                </i>
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Advert Promotion</span>
                </i>
              </li>
              <li>...</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="sponsor-card">
            <div className="premium-plan">
              <h5>Premium Plan</h5>
              <p>ksh 500 Paid Once</p>
            </div>

            <ul className="sponsor-ul">
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Free advert posting</span>
                </i>
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Advert Search Optimization</span>
                </i>
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Advert Promotion</span>
                </i>
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true">
                  <span className="mx-2">Linkage to Buyers and Merkets</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-4 pt-4">
        <h3 className="text-center">Choose Your Plan</h3>
        <form className="text-center" onSubmit={finish}>
          <input
            type="radio"
            id="free"
            name="plans"
            value="0"
            required
            onClick={(e) => {
              setPlan(false);
              setCategory("Free");
              setAmount(0);
            }}
          />
          <label className="form-label mx-1" htmlFor="free">
            Free Plan
          </label>
          <br />
          <input
            type="radio"
            id="basic"
            name="plans"
            value="250"
            width="25"
            required
            onClick={(e) => {
              setPlan(true);
              setCategory("Basic");
              setAmount(250);
            }}
          />
          <label className="form-label mx-1" htmlFor="basic">
            Basic Plan
          </label>
          <br />
          <input
            type="radio"
            id="premium"
            name="plans"
            value="500"
            required
            onClick={(e) => {
              setPlan(true);
              setCategory("Premium");
              setAmount(500);
            }}
          />
          <label className="form-label mx-1" htmlFor="premium">
            Premium Plan
          </label>
          <br />
          <br />
          <input
            type={plan ? "number" : "hidden"}
            className="form-control text-center"
            id="number"
            name="number"
            required
            placeholder="Enter Your mobile number"
            onChange={(e) => setMobile(parseInt(e.target.value))}
          />
          <br />
          <br />
          <button
            disabled={paying ? true : false}
            type="submit"
            className="btn btn-primary px-3"
          >
            {plan ? "Pay Now" : "Finish"}
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Mpesa;
