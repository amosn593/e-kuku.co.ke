import React, { useState } from "react";
import { axios } from "../inc/axios";

function NoPosts() {
  // const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [imageurl, setImageurl] = useState(null);

  const imageChange = (e) => {
    setPicture(e.target.files[0]);
    setImageurl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formField = new FormData();
    formField.append("name", e.target.name.value);
    formField.append("place", e.target.place.value);
    formField.append("image", picture, picture.name);

    // console.log(formField);

    // posting data to backend
    const axiospost = async () => {
      await axios
        .post("/", formField, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .catch((error) => console.log(error.response));
    };
    axiospost();
    // console.log(post);
    // console.log(formData);
    // console.log(name, place);
    console.log(formField);
  };

  return (
    <div>
      <h6 className="text-muted text-center mt-4">
        No Products Found, try again later
      </h6>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" required /> <br />
        <input type="text" name="place" id="place" required /> <br />
        <input
          type="file"
          required
          accept="image/png, image/jpeg"
          onChange={imageChange}
        />
        <br />
        <div>
          <img src={imageurl && imageurl} alt="" /> <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NoPosts;
