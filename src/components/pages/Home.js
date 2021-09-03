import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const noPosts = !posts;

  const getPosts = async () => {
    const response = await axios
      .get("/latestpoultry")
      .catch((err) => console.log(err));
    if (response && response.data) {
      setPosts(response.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(posts);
  // console.log(loading);

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div className="row mx-2 mt-3">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      );
    } else {
      return <NoPosts />;
    }
  } else {
    return <Spinner />;
  }
}

export default Home;
