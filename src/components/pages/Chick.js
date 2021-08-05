import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";

function Egg() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    const response = await axios
      .get("/poultrychicks")
      .catch((err) => console.log(err));
    if (response && response.data) {
      setPosts(response.data);
      setLoading(true);
    }
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
        <NoPosts/>
      );
    }
  } else {
    return <Spinner />;
  }
}

export default Egg;
