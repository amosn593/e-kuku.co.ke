import React, { useState, useEffect } from 'react';
import { axios } from '../inc/axios';
import { useParams } from 'react-router-dom';

function Detail() {
    const [post, setPost] = useState([]);
    
    const noPost = !post || (post && post.length === 0);

    const { id } = useParams()

    const updatePost = async () => {
        const response = await axios.post(`/poultryview/${id}`).catch((err) => console.log(err));

        console.log(response)
        
    };

    const getPost = async () => {
        const response = await axios.get(`/poultrydetail/${id}`).catch((err) => console.log(err));
        if (response && response.data) setPost(response.data);
    };

    useEffect(() => {
        updatePost();
        getPost();
    }, []);

    console.log(post)

    return (
       
        <div className="container mt-3" >
            <div className="row mx-0 mt-3">
                <div className="col-md-6 mt-2">
                    <img className="w-100" src={post.get_image} alt="product display" />
                    <div className="bg-light mt-1">
                        <p className=" p-2">{post.description}</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between bg-light px-3">
                        <p className="p-2">Posted: {post.date_posted}</p>
                        <p className="p-2">Views: {post.views}</p>
                    </div>
                    <hr />
                </div>
                <div className="col-md-6 mt-2">
                    <div className="bg-light ">
                        <h4 className="text-center btn-info py-3">{post.title}</h4>
                        <p className="p-2">Price: {post.price}</p>
                    </div>
                    <div className="bg-light">
                        <h4 className="text-center btn-secondary py-3">Business Name</h4>
                        <p className="p-2">Contact: {post.contact}</p>
                        <p className="p-2">County: {post.get_county}</p>
                        <p className="p-2">Sub County: {post.get_subcounty}</p>
                        <p className="p-2">Location: {post.location}</p>
                    </div>
                    <div className="bg-light">
                        <h4 className="text-center btn-danger py-3">Safety tips</h4>
                        <ul>
                            <li>Pay only after receiving the product</li>
                            <li>Do not pay in advance</li>
                            <li>Meet Seller in safe places</li>
                            <li>Be aware of fraudsters</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <hr />
            <h4>Similar adverts</h4>
        </div>
    
    );
}

export default Detail