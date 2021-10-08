import React, { useState, useEffect } from "react";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";

function Mysells() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [id, setId] = useState("");

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

  const delete_my_post = async (e) => {
    e.preventDefault();
    // setDeleting(true);
    // setId(e.target.delete_id.value);
    console.log("clicked");
    console.log(id);
    // if (localStorage.getItem("access")) {
    //   const config = {
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: `JWT ${localStorage.getItem("access")}`,
    //     },
    //   };
    //   try {
    //     const response = await axios.delete(
    //       `/main/mypoultrydelete/${id}`,
    //       config
    //     );
    //     if (response.status === 204) {
    //       setDeleting(false);
    //     }
    //   } catch (err) {
    //     setDeleting(false);
    //   }
    // }
  };

  useEffect(() => {
    myadverts();
  }, []);

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <div className="row mx-2 my-2">
            <div className="container my-3 py-3">
              {posts.map((post, index = post.id) => {
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
                      <p className="my-0 py-1 px-2">Views: {post.views}</p>
                    </div>
                    <div className="col-md-4 text-center my-2 py-2">
                      <button className="btn btn-primary my-2">
                        Sponsor Advert
                      </button>
                      <br />

                      <button
                        disabled={deleting}
                        id="delete_id"
                        name="delete_id"
                        value={post.id}
                        // onLoad={setId(post.id)}
                        onClick={delete_my_post}
                        type="submit"
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
