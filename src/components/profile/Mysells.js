import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import UpdateUser from "../../utils/UpdateUser";

function Mysells() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const history = useHistory();

  const myadverts = async () => {
    setLoading(true);
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      try {
        const response = await axios.get("/main/mypoultry", config);
        if (response && response.data) {
          setPosts(response.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    myadverts();
  }, []);

  UpdateUser();

  const delete_my_post = async (id) => {
    setDeleting(true);
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      };
      try {
        const response = await axios.delete(
          `/main/mypoultrydelete/${id}`,
          config
        );
        if (response.status === 204) {
          const del = posts.filter((post) => id !== post.id);
          setPosts(del);
          setDeleting(false);
          alert("Post Deleted Successfully!!!");
        }
      } catch (err) {
        setDeleting(false);
      }
    } else {
      alert("You have been LoggedOut, Kindly Login Again!!!");
      history.push("/sign-in");
    }
  };

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <div className="row mx-2 my-2">
            <div className="container my-3 py-3">
              {posts.map((post) => {
                return (
                  <div key={post.id} className="row">
                    <div className="col-md-4 text-center my-2 py-2">
                      <img
                        className="w-100"
                        src={post.get_image}
                        alt="product display"
                      />
                      <div className="bg-light mt-1">
                        <p className=" p-2">{post.description}</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center my-2 py-2">
                      <p className="text-center btn-info py-3">{post.title}</p>
                      <p className="my-0 py-1 px-2">
                        County: {post.get_county}
                      </p>
                      <p className="my-0 py-1 px-2">
                        Subcounty: {post.get_subcounty}
                      </p>
                      <p className="my-0 py-1 px-2">
                        Location: {post.location}
                      </p>
                      <p className="my-0 py-1 px-2">Contact: {post.contact}</p>
                      <p className="my-0 py-1 px-2">Price: {post.price}</p>
                      <p className="my-0 py-1 px-2">
                        Posted: {post.date_posted}
                      </p>
                      <p className="my-0 py-1 px-2">
                        Sponsored : {post.sponsored}
                      </p>
                      <p className="my-0 py-1 px-2">Views: {post.views}</p>
                    </div>
                    <div className="col-md-4 text-center my-2 py-2">
                      <Link
                        className="btn btn-primary my-2"
                        to={`sponsor/${post.id}`}
                      >
                        Sponsor Advert
                      </Link>
                      <br />

                      <button
                        disabled={deleting}
                        onClick={() => delete_my_post(post.id)}
                        className="btn btn-danger my-2"
                      >
                        Delete Advert
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p className="text-center my-5 py-5">
            You have not posted any advert yet!!!
          </p>
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
}

export default Mysells;
