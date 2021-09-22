import React from "react";

function Mypost(props) {
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-md-4 text-center">
          <img className="w-100" src={props.get_image} alt="product display" />
          <div className="bg-light mt-1">
            <p className=" p-2">{props.description}</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <p className="text-center btn-info py-3">{props.title}</p>
          <p className="my-0 py-1 px-2">County: {props.get_county}</p>
          <p className="my-0 py-1 px-2">Subcounty: {props.get_subcounty}</p>
          <p className="my-0 py-1 px-2">Location: {props.location}</p>
          <p className="my-0 py-1 px-2">Contact: {props.contact}</p>
          <p className="my-0 py-1 px-2">Price: {props.price}</p>
          <p className="my-0 py-1 px-2">Posted: {props.date_posted}</p>
          <p className="my-0 py-1 px-2">Views: {props.views}</p>
        </div>
        <div className="col-md-4 text-center">
          <button className="btn btn-primary my-2">Sponsor Advert</button>
          <br />

          <button className="btn btn-danger my-2">Delete Advert</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Mypost;
