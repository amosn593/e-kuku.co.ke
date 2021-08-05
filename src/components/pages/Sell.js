import React, { useState, useEffect } from "react";
import { axios } from "../inc/axios";

function Sell() {
  const [picture, setPicture] = useState(null);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [categories, setCategories] = useState([]);

  const getcounties = async () => {
    const response = await axios
      .get("/getcounty")
      .catch((err) => console.log(err));
    setCounties(response.data);
  };

  const getsubcounties = (e) => {
    const p = e.target.value;
    // console.log(p);
    const subc = async () => {
      const response = await axios
        .get(`/getsubcounty/${p}`)
        .catch((err) => console.log(err));
      setSubcounties(response.data);
      // console.log(response.data);
    };
    subc();
  };

  // console.log(subcounties);

  const getcategories = async () => {
    const response = await axios
      .get("/getcategory")
      .catch((err) => console.log(err));
    setCategories(response.data);
  };

  // console.log(counties);

  useEffect(() => {
    getcounties();
    getcategories();
  }, []);

  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  let form_data = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    form_data.append("title", e.target.title.value);
    const data = {
      county: parseInt(e.target.county.value),
      subcounty: parseInt(e.target.subcounty.value),
      category: parseInt(e.target.category.value),
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.product_image.value,
      contact: e.target.phone.value,
      location: e.target.location.value,
    };

    // posting data to backend
    const axiospost = async () => {
      await axios
        .post("/poultrycreate/", data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .catch((err) => console.log(err));
    };
    axiospost();
    console.log(data);
  };

  return (
    <div>
      <p className="text-center align-center text-white w-75 mx-auto bg-dark py-4 mt-1">
        Post Product For Free
      </p>
      <form onSubmit={handleSubmit} className="row mx-0 mt-4 px-5 ">
        <div className="col-md-6 ">
          <label className="form-label fw-bold">County</label>
          <select
            id="county"
            class="form-select"
            onChange={getsubcounties}
            required
          >
            <option defaultValue>Choose County...</option>
            {counties.map((county) => (
              <option key={county.id} value={county.id}>
                {county.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 ">
          <label className="form-label fw-bold">Sub County</label>
          <select id="subcounty" class="form-select" required>
            <option defaultValue>Choose Subcounty...</option>
            {subcounties.map((subcounty) => (
              <option key={subcounty.id} value={subcounty.id}>
                {subcounty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2 mt-3">
          <label className="form-label fw-bold">Category</label>
          <select id="category" class="form-select required">
            <option defaultValue>Choose Category...</option>
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
            maxlength="30"
            placeholder="A brief product title e.g Kienyenji Chicken"
            required
          />
        </div>
        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            maxlength="30"
            placeholder="Negotiable"
            required
          />
        </div>
        <div className="col-md-8 mt-3">
          <label className="form-label fw-bold">Product Description</label>
          <textarea
            class="form-control"
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
            class="form-control"
            id="product_image"
            onChange={onChangePicture}
            required
          />
          <div className="myimagepreview mt-2 mx-1">
            <img className="" src={picture && picture} alt=""></img>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            maxlength="15"
            placeholder="Business Contact Number, 07-------"
            required
          />
        </div>

        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            maxlength="30"
            placeholder="Business Location e.g Street name, Address..."
            required
          />
        </div>
        <div className="col-12 mt-3 text-center">
          <div className="g-recaptcha" data-sitekey="test_site"></div>
        </div>
        <div className="col-12 mt-3 text-center">
          <button type="submit" className="btn btn-warning fw-bold">
            Post Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sell;
