import React from "react";

function Sell() {
  return (
    <div>
      <p className="text-center align-center text-white w-75 mx-auto bg-dark py-4 mt-1">
        Post Product For Free
      </p>
      <form className="row mx-0 mt-4 px-5 ">
        <div className="col-md-6 ">
          <label className="form-label fw-bold">County</label>
          <select id="county" class="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 ">
          <label className="form-label fw-bold">Sub County</label>
          <select id="subcounty" class="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Category</label>
          <select id="category" class="form-select">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="A brief product title e.g Kienyenji Chicken"
          />
        </div>
        <div className="col-md-8 mt-3">
          <label className="form-label fw-bold">Product Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="4"
            placeholder="Describe your product e.g Quantity, price ranges, nature of product e.t.c"
          ></textarea>
        </div>
        <div className="col-md-4 mt-3">
          <label className="form-label fw-bold">Product Image</label>
          <input type="file" class="form-control" id="inputGroupFile01" />
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Business Contact Number, 07-------"
          />
        </div>

        <div className="col-md-6 mt-3">
          <label className="form-label fw-bold">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Business Location e.g Street name"
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
