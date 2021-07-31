import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";

function Egg() {
  const [posts, setPosts] = useState([]);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    const response = await axios
      .get("/poultryfeed")
      .catch((err) => console.log(err));
    if (response && response.data) setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);
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
}

export default Egg;
