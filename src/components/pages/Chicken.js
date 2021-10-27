import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";
import Search from "../inc/Search";
import { UpdateUser } from "../../utils/UpdateUser";

function Egg() {
  document.title = "Chicken | E-KUKU";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPosts = !posts || (posts && posts.length === 0);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/main/poultrychicken");
      if (response && response.data) {
        setPosts(response.data);

        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  UpdateUser();

  if (!loading) {
    if (!noPosts) {
      return (
        <div>
          <Search />
          <div className="row mx-2 mt-3">
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </div>
        </div>
      );
    } else {
      return <NoPosts />;
    }
  } else {
    return <Spinner />;
  }
}

export default Egg;
