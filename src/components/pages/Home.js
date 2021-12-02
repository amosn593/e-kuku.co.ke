import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axios } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";
import Search from "../inc/Search";
import { UpdateUser } from "../../utils/UpdateUser";

function Home() {
  document.title = "Home | E-KUKU";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/main/latestpoultry");
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
    if (posts.length > 0) {
      return (
        <div>
          <Search />
          <div class="container">
            <div className="row my-2">
              {posts.map((post) => {
                return <Post key={post.id} {...post} />;
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NoPosts />
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
}

export default Home;
