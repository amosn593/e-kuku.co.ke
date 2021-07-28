
function Post(props) {
    return (
        
        <div className="col-md-3">
            <div className="card text-center shadow">
                <div className="card-header text-muted d-flex justify-content-between">
                    <i className="fa fa-map-marker" aria-hidden="true"><span className="mx-1">{props.get_county}</span></i>
                    <i className="fa fa-map-marker" aria-hidden="true"><span className="mx-1">{props.get_subcounty}</span></i>
                </div>
                <img src={props.get_thumbnail} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-title">{props.title}</p>
                    <p className="card-text">Price: {props.price}</p>
                    <button className="btn btn-dark mx-1 ">View Details</button>
                </div>
                <div className="card-footer text-muted">
                    {props.date_posted}
                </div>
            </div>
        </div>        

    )
}

export default Post
