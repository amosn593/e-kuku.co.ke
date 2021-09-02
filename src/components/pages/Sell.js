import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { axios } from "../inc/axios";
import swal from "sweetalert";
import Login from "../profile/Login";

function Sell() {
  const [picture, setPicture] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const [counties, setCounties] = useState([]);
  const [subcounties, setSubcounties] = useState([]);
  const [categories, setCategories] = useState([]);

  const user = useSelector((state) => state.user);
  const loggedin = user.loggedin;
  const loggedout = user.loggedout;

  const history = useHistory();

  const getcounties = async () => {
    const response = await axios
      .get("/getcounty")
      .catch((err) => console.log(err));
    if (response && response.data) {
      setCounties(response.data);
    }
  };

  const getsubcounties = (e) => {
    const p = e.target.value;
    // console.log(p);
    const subc = async () => {
      const response = await axios
        .get(`/getsubcounty/${p}`)
        .catch((err) => console.log(err));
      if (response && response.data) {
        setSubcounties(response.data);
      }
      // console.log(response.data);
    };
    subc();
  };

  // console.log(subcounties);

  const getcategories = async () => {
    const response = await axios
      .get("/getcategory")
      .catch((err) => console.log(err));
    if (response && response.data) {
      setCategories(response.data);
    }
  };

  // console.log(counties);

  useEffect(() => {
    getcounties();
    getcategories();
  }, []);

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
    setImageurl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // formData.append("title", e.target.title.value);
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
    const axiospost = async () => {
      await axios
        .post("/poultrycreate/", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .catch((err) => console.log(err));
    };
    axiospost();
    // swal({
    //   title: "Success!",
    //   text: "Product Posted successfully!",
    //   icon: "success",
    //   button: "Close!",
    // });
    // console.log(formData);
    history.push("/");
  };

  // if (!loggedin & loggedout) {
  //   return <Login />;
  // }

  return (
    <div className="container mt-3 pt-3">
      <div className="w-75 mx-auto bg-dark mt-5">
        <p className="text-center align-center text-white py-4">
          Post Your Product For Free
        </p>
      </div>

      <form onSubmit={handleSubmit} className="row mx-0 mt-4 px-5 ">
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">County</label>
          <select
            id="county"
            className="form-select"
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
        <div className="col-md-6 mt-3 ">
          <label className="form-label fw-bold">Sub County</label>
          <select id="subcounty" className="form-select" required>
            <option defaultValue>Choose Subcounty...</option>
            {subcounties.map((subcounty) => (
              <option key={subcounty.id} value={subcounty.id}>
                {subcounty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3 mt-3">
          <label className="form-label fw-bold">Category</label>
          <select id="category" className="form-select required">
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
            maxLength="30"
            placeholder="Business Location e.g Street name, Address..."
            required
          />
        </div>
        <div className="col-12 mt-3 text-center"></div>
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
