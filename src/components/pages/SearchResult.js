import React, { useState, useEffect } from "react";
import { axiosInstance } from "../inc/axios";
import Post from "./Post";
import Spinner from "../inc/Spinner";
import Search from "../inc/Search";
import NoPosts from "../inc/NoPosts";
import BreadCrumb from "../inc/BreadCrumb";

function SearchResult() {
  document.title = "Search | E-KUKU";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get("q");

  useEffect(() => {
    // clean up controller
    let isSubscribed = false;
    window.scroll(0, 0);
    (async function () {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/main/poultrysearch/${query}`
        );
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
  }, [query]);

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <Search />
          <div className="container">
            <BreadCrumb title="Search Results" />
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
    return (
      <div>
        <Spinner />
      </div>
    );
  }
}

export default SearchResult;
