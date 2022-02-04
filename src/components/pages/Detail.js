import React, { useState, useEffect } from "react";
import { axiosInstance } from "../inc/axios";
import { useParams } from "react-router-dom";
import BreadCrumb from "../inc/BreadCrumb";
import Spinner from "../inc/Spinner";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

function Detail() {
  document.title = "E-KUKU | Details";
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const noPost = !post || (post && post.length === 0);

  const { id } = useParams();

  const shareUrl = "https://e-kuku.co.ke";

  const updatePost = async () => {
    try {
      await axiosInstance.post(`/main/poultryview/${id}`);
    } catch (err) {}
  };

  useEffect(() => {
    // clean up controller
    let isSubscribed = false;
    window.scroll(0, 0);
    updatePost();
    (async function () {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/main/poultrydetail/${id}`);
        if (response && response.data) {
          if (!isSubscribed) {
            setPost(response.data);
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
    if (!noPost) {
      return (
        <div className="container my-3 py-3">
          <BreadCrumb title={post.title} />
          <div className="row mx-0 mt-3">
            <div className="container d-flex">
              <h4 className="my-2 py-2 mx-2">Share:</h4>
              <FacebookShareButton
                url={shareUrl}
                hashtag="e-kuku, online poultry marketplace"
              >
                <FacebookIcon logofillcolor="white" round={true}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton
                url={shareUrl}
                hashtag="e-kuku, online poultry marketplace"
              >
                <TwitterIcon logofillcolor="white" round={true}></TwitterIcon>
              </TwitterShareButton>
              <WhatsappShareButton
                url={shareUrl}
                hashtag="e-kuku, online poultry marketplace"
              >
                <WhatsappIcon logofillcolor="white" round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>
            <div className="col-md-6 mt-2">
              <img
                className="w-100"
                src={post.get_image}
                alt="product display"
              />
              <div className="d-flex justify-content-between bg-light px-3">
                <p className="p-2">
                  <i className="fa fa-calendar" aria-hidden="true">
                    <span className="mx-2">{post.date_posted}</span>
                  </i>
                </p>
                <p className="p-2">
                  <i className="fa fa-eye" aria-hidden="true">
                    <span className="mx-2">{post.views}</span>
                  </i>
                </p>
              </div>

              <hr />
              <div className="bg-light mt-1">
                <p className=" p-2">{post.description}</p>
              </div>
              <hr />
            </div>
            <div className="col-md-6 mt-2">
              <div className="bg-light ">
                <h5 className="text-center btn-info py-3">{post.title}</h5>
                <p className="p-2 detailed-font">
                  <i className="fa fa-money" aria-hidden="true">
                    <span className="mx-2">{post.price}</span>
                  </i>
                </p>
              </div>
              <div className="bg-light">
                <h5 className="text-center btn-secondary py-3">
                  Contact Details
                </h5>
                <p className="p-2 detailed-font">
                  <i className="fa fa-phone" aria-hidden="true">
                    <span className="mx-2">{post.contact}</span>
                  </i>
                </p>
                <p className="p-2 detailed-font">
                  <i className="fa fa-map-marker" aria-hidden="true">
                    <span className="mx-2">{post.get_county}</span>
                  </i>
                </p>
                <p className="p-2 detailed-font">
                  <i className="fa fa-map-marker" aria-hidden="true">
                    <span className="mx-2">{post.get_subcounty}</span>
                  </i>
                </p>
                <p className="p-2 detailed-font">
                  <i className="fa fa-map-marker" aria-hidden="true">
                    <span className="mx-2">{post.location}</span>
                  </i>
                </p>
              </div>
              <div className="bg-light">
                <h5 className="text-center btn-danger py-3">Safety tips</h5>
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
    } else {
      return (
        <div>
          <h6 className="text-muted text-center my-4 py-4">
            Poultry not found!!!
          </h6>
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
}

export default Detail;
