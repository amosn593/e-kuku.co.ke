import React from "react";
// import { axios } from "../inc/axios";

function Mypost(props) {
  // const [deleting, setDeleting] = useState(false);
  // const [id, setId] = useState("");

  // const delete_post = async (e) => {
  //   e.preventDefault();
  // setDeleting(true);
  // setId(e.target.post_id.value);
  // console.log(id);
  // const config = {
  //   headers: {
  //     Authorization: `JWT ${localStorage.getItem("access")}`,
  //   },
  // };
  // try {
  //   const response = await axios.delete(
  //     `/main/mypoultrydelete/${id}`,
  //     config
  //   );
  //   if (response.status === 204) {
  //     setDeleting(false);
  //     console.log(response);
  //     console.log(response.data);
  //     console.log(response.status);
  //   }
  //   setDeleting(false);
  // } catch (err) {
  //   setDeleting(false);
  // }
  // };

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
          <form>
            <input type="hidden" id="post_id" />
            <button type="submit" className="btn btn-danger my-2">
              Delete Advert
            </button>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Mypost;
