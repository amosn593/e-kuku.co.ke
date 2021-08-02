import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";

function Egg() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    const response = await axios
      .get("/poultrychicken")
      .catch((err) => console.log(err));
    if (response && response.data) setPosts(response.data);
    setLoading(true);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    if (!noPosts) {
      return (
        <div className="row m-2">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      );
    } else {
      return (
        <h2 className="text-muted text-center mt-4">
          No Products Found, try again later
        </h2>
      );
    }
  } else {
    return <Spinner />;
  };
}

export default Egg;
