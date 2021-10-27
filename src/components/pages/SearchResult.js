import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UpdateUser } from "../../utils/UpdateUser";
import { axios } from "../inc/axios";
import Post from "./Post";
import Spinner from "../inc/Spinner";
import Search from "../inc/Search";
import NoPosts from "../inc/NoPosts";

function SearchResult() {
  document.title = "Search | E-KUKU";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { search } = useParams();

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/main/poultrysearch/${search}`);
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
    // eslint-disable-next-line
  }, [search]);

  UpdateUser();

  if (!loading) {
    if (posts.length > 0) {
      return (
        <div>
          <Search />
          <div className="row mx-2 my-2">
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
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
