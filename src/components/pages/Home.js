import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    const response = await axios
      .get("/latestpoultry")
      .catch((err) => console.log(err));
    if (response && response.data) {
      setPosts(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(posts);

  if (!loading) {
    if (!noPosts) {
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
