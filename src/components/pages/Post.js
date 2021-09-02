import { Link } from "react-router-dom";

function Post(props) {
  return (
    <div className="col-md-3">
      <div className="card text-center shadow mycard">
        <div className="card-header text-muted d-flex justify-content-between">
          <i className="fa fa-map-marker" aria-hidden="true">
            <span className="mx-2">{props.get_county}</span>
          </i>
          <i className="fa fa-map-marker" aria-hidden="true">
            <span className="mx-2">{props.get_subcounty}</span>
          </i>
        </div>
        <img
          src={props.get_image}
          className="card-img-top mycardimg"
          alt="..."
        ></img>
        <div className="card-body mycardbody">
          <p className="card-title m-0">{props.title}</p>
          <p className="card-text m-0">Price: {props.price}</p>
          <Link className="btn btn-dark m-0 " to={`/product/${props.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
