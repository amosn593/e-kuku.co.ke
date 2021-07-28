import React, {useState, useEffect} from 'react';
import Post from './Post';
import {axios} from '../inc/axios';

function Home() {
    const [posts, setPosts] = useState([]);

    const noPosts = !posts || (posts && posts.length === 0);

    const getPosts = async () => {
        const response = await axios.get("/latestpoultry").catch((err) => console.log(err));
        if (response && response.data) setPosts(response.data);

    };

    useEffect(() => {
        getPosts();
    }, []);

    // console.log(posts);

    return (
        <div className="row m-2">
            {!noPosts && posts.map((post) =>
                <Post key={post.id} {...post} />
            )}
            
        </div>
    );
}

export default Home