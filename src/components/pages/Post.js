import React from 'react'

function Post() {
    return (
        <div className="row m-2">
        <div className="col-md-3">
            <div className="card text-center shadow">
                <div className="card-header text-muted d-flex justify-content-between">
                    <i class="fa fa-map-marker" aria-hidden="true">KITUI</i>
                    <i class="fa fa-map-marker" aria-hidden="true">Ikutha</i>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Kienyeji Eggs</h6>
                    <p className="card-text">Price: Negotiable</p>
                    <div>
                        <button className="btn btn-dark">View</button>    
                    </div>
                </div>
                <div className="card-footer text-muted">
                    1 May, 2021
                </div>
            </div>
        </div>
    </div>        

    )
}

export default Post
