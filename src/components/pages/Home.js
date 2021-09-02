import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPosts = !posts;

  const getPosts = async () => {
    const response = await axios
      .get("/latestpoultry")
      .catch((err) => console.log(err));
    if (response && response.data.length > 0) {
      setPosts(response.data);
      setLoading(true);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(posts);
  // console.log(loading);

  if (loading) {
    if (posts.length > 0) {
      return (
        <div className="row mx-2 my-4 py-5">
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
  }
}

export default Home;
