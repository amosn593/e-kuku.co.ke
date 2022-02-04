import React, { useState, useEffect } from "react";
import Post from "./Post";
import { axiosInstance } from "../inc/axios";
import Spinner from "../inc/Spinner";
import NoPosts from "../inc/NoPosts";
import Search from "../inc/Search";
import BreadCrumb from "../inc/BreadCrumb";

function Equipments() {
  document.title = "E-KUKU | Poultry Facilities";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPosts = !posts || (posts && posts.length === 0);

  useEffect(() => {
    // clean up controller
    let isSubscribed = false;
    window.scroll(0, 0);
    (async function () {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/main/poultrystructure");
        if (response && response.data) {
          if (!isSubscribed) {
            setPosts(response.data);
            setLoading(false);
          }
        }
      } catch (err) {
        if (!isSubscribed) {
          setLoading(false);
        }
      }
    })();
    // cancel subscription to useEffect
    return () => (isSubscribed = true);
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    if (!noPosts) {
      return (
        <div>
          <Search />
          <div className="container">
            <BreadCrumb title="Poultry Facilities" />
            <div className="row my-2">
              {posts.map((post) => {
                return <Post key={post.id} {...post} />;
              })}
            </div>
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

export default Equipments;
