import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axiosInstance } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";
import Search from "../inc/Search";

function Home() {

  document.title = "E-KUKU|Home";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/main/latestpoultry");
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
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);


  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <Search />
          <div className="container">
            <h4 className="py-3">Trending Hot Deals</h4>
            <div className="row my-1">
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
