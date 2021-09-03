import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";

function Equipments() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    const response = await axios
      .get("/poultryfeed")
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

  if (!loading) {
    if (!noPosts) {
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

export default Equipments;
