import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { axios } from "../inc/axios";

function Sell() {
  document.title = "Sell | E-KUKU";
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("");
  const [picture, setPicture] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [categories, setCategories] = useState([]);

  const user = useSelector((state) => state.user);

  const id = user.userinfo.id;

  console.log(id);

  const history = useHistory();

  const getcounties = async () => {
    try {
      const response = await axios.get("/main/getcounty");
      if (response && response.data) {
        setCounties(response.data);
      } else {
        console.log("");
      }
    } catch (err) {
      console.log("");
    }
  };

  const getsubcounties = async (e) => {
    const p = e.target.value;
    try {
      const res = await axios.get(`/main/getsubcounty/${p}`);
      if (res && res.data) {
        setSubcounties(res.data);
      } else {
        console.log("");
      }
    } catch (err) {
      console.log("");
    }
  };

  const getcategories = async () => {
    try {
      const response = await axios.get("/main/getcategory");
      if (response && response.data) {
        setCategories(response.data);
      } else {
        console.log("");
      }
    } catch (err) {
      console.log("");
    }
  };

  useEffect(() => {
    getcounties();
    getcategories();
  }, []);

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
    setImageurl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPosting(true);
    const formData = new FormData();
    formData.append("county", e.target.county.value);
    formData.append("subcounty", e.target.subcounty.value);
    formData.append("category", e.target.category.value);
    formData.append("title", e.target.title.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);
    formData.append("contact", e.target.contact.value);
    formData.append("location", e.target.location.value);
    formData.append("image", picture, picture.name);

    // posting data to backend
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    try {
      const res = await axios.post("/main/poultrycreate/", formData, config);
      if (res.status === 201) {
        setPosting(false);
        history.push("/");
      } else {
        setPosting(false);
      }
    } catch (err) {
      setPosting(false);
    }
  };

  return (
    <div className="container mt-2 mb-3 pt-2 pb-4">
      <div className="w-85 mx-auto bg-dark">
        <p className="text-center align-center text-white py-4">
          Post Your Product For Free
        </p>
      </div>

      <form onSubmit={handleSubmit} className="row mx-0 mt-4 px-1 ">
        <div className="row">
          <div className="col-md-6 mt-3">
            <label className="form-label fw-bold">County</label>
            <select
              id="county"
              className="form-select"
              onChange={getsubcounties}
              required
            >
              {/* <option defaultValue>Choose County...</option> */}
              {counties.map((county) => (
                <option key={county.id} value={county.id}>
                  {county.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mt-3 ">
            <label className="form-label fw-bold">Sub County</label>
            <select id="subcounty" className="form-select" required>
              {/* <option defaultValue>Choose Subcounty...</option> */}
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
            {/* <option defaultValue>Choose Category...</option> */}
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
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="contact"
            maxLength="15"
            placeholder="Contact Number, 07-------"
            required
          />
        </div>

        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            maxLength="30"
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
