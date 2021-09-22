import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { axios } from "../inc/axios";
import Mypost from "./Mypost";
import Spinner from "../inc/Spinner";

function Mysells() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { userloaded, loggedin } = useSelector((state) => state.user);

  if (!userloaded && !loggedin) {
    history.push("/sign-in");
  }

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

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <div className="row mx-2 my-2">
            {posts.map((post) => (
              <Mypost key={post.id} {...post} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p className="text-center my-4 py-3">
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
