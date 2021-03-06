import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../inc/axios";
import BreadCrumb from "../inc/BreadCrumb";

function Sell() {
  document.title = "E-KUKU | Sell";
  const history = useHistory();

  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("");
  const [picture, setPicture] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [categories, setCategories] = useState([]);

  const getcounties = async () => {
    try {
      const response = await axiosInstance.get("/main/getcounty");
      if (response && response.data) {
        setCounties(response.data);
      } else {
      }
    } catch (err) {}
  };

  const getsubcounties = async (e) => {
    const p = e.target.value;
    try {
      const res = await axiosInstance.get(`/main/getsubcounty/${p}`);
      if (res && res.data) {
        setSubcounties(res.data);
      } else {
      }
    } catch (err) {}
  };

  const getcategories = async () => {
    try {
      const response = await axiosInstance.get("/main/getcategory");
      if (response && response.data) {
        setCategories(response.data);
      } else {
      }
    } catch (err) {}
  };

  useEffect(() => {
    getcounties();
    getcategories();
    window.scroll(0, 0);
  }, []);

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
    setImageurl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // checking correct county value selected
    if (e.target.county.value === "c") {
      alert("Select a Valid Region");
    } else {
      // checking correct sub-county value selected
      if (e.target.subcounty.value === "c") {
        alert("Select a Valid Sub Region");
      } else {
        // checking correct category value selected
        if (e.target.category.value === "c") {
          alert("Select a Valid Category");
        } else {
          setPosting(true);
          const formData = new FormData();
          formData.append("county", e.target.county.value);
          formData.append("subcounty", e.target.subcounty.value);
          formData.append("category", e.target.category.value);
          formData.append("title", e.target.title.value);
          formData.append("price", e.target.price.value);
          formData.append("description", e.target.description.value);
          formData.append("contact", e.target.contact.value);
          formData.append("business_name", e.target.business_name.value);
          formData.append("location", e.target.location.value);
          formData.append("image", picture, picture.name);

          // posting data to backend
          if (localStorage.getItem("access")) {
            const config = {
              headers: {
                "content-type": "multipart/form-data",
                Authorization: `JWT ${localStorage.getItem("access")}`,
              },
            };
            try {
              const res = await axiosInstance.post(
                "/main/poultrycreate/",
                formData,
                config
              );
              if (res.status === 201) {
                setPosting(false);
                alert("Advert Posted Successfully!");
                history.push("/");
              } else if (res.status === 404) {
                setPosting(false);
                setError(true);
                setError_msg("Form Data Error, kindly try again!!!");
              } else {
                setPosting(false);
                setError(true);
                setError_msg("Server Error, kindly try again later!!!");
              }
            } catch (err) {
              setPosting(false);
              setError(true);
              setError_msg(
                "Network Error, Check your internet connection and try again!!!"
              );
            }
          } else {
            setPosting(false);
            setError(true);
            setError_msg("Kindly, login to post!!!");
          }
        }
      }
    }
  };

  return (
    <div className="container mt-2 mb-3 pt-2 pb-4">
      <BreadCrumb title="Post Product" />
      <div className="w-85 mx-auto bg-dark">
        <h5 className="text-center align-center text-white py-4">
          Post Your Product For Free
        </h5>
      </div>
      {error && <p className="text-center login-error">{error_msg}</p>}
      <form onSubmit={(e) => handleSubmit(e)} className="row mx-0 mt-4 px-1 ">
        <div className="row">
          <div className="col-md-6 mt-3">
            <label className="form-label fw-bold">Region</label>
            <select
              id="county"
              className="form-select"
              onChange={getsubcounties}
              required
            >
              <option value="c">Choose Region...</option>
              {counties.map((county) => (
                <option key={county.id} value={county.id}>
                  {county.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mt-3 ">
            <label className="form-label fw-bold">Sub Region</label>
            <select id="subcounty" className="form-select" required>
              <option value="c">Choose Sub Region...</option>
              {subcounties.map((subcounty) => (
                <option key={subcounty.id} value={subcounty.id}>
                  {subcounty.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <label className="form-label fw-bold">Category</label>
          <select id="category" className="form-select required">
            <option value="c">Choose Category...</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Product Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            maxLength="30"
            placeholder="A brief product title e.g Kienyenji Chicken"
            required
          />
        </div>
        <div className="col-md-3 mt-3">
          <label className="form-label fw-bold">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            maxLength="30"
            placeholder="Negotiable"
            required
          />
        </div>
        <div className="col-md-8 mt-3">
          <label className="form-label fw-bold">Product Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="8"
            placeholder="Describe your product e.g Quantity, price ranges, nature of product e.t.c"
            required
          ></textarea>
        </div>
        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Product Image</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            className="form-control"
            id="product_image"
            onChange={onChangePicture}
            required
          />
          <div className="myimagepreview mt-2 mx-1">
            <img className="" src={imageurl && imageurl} alt=""></img>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Business Number</label>
          <input
            type="number"
            className="form-control"
            id="contact"
            minLength="9"
            maxLength="15"
            placeholder="Contact Number, 0700000000"
            required
          />
        </div>

        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Business Name</label>
          <input
            type="text"
            className="form-control"
            id="business_name"
            maxLength="40"
            placeholder="e.g Feeds Suppliers Ltd"
            required
          />
        </div>
        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Business Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            maxLength="80"
            placeholder="Street name, Address..."
            required
          />
        </div>
        <div className="col-12 mt-3 text-center"></div>
        <div className="col-12 mt-3 text-center">
          <button
            disabled={posting}
            type="submit"
            className="btn btn-warning fw-bold"
          >
            Post Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sell;
