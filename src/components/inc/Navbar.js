import React from 'react'
// import { Link } from 'react-dom-router';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <h4 className="navbar-brand">KUKU</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <h4 className="nav-link">Chicken</h4>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Features</a> */}
                            <h4 className="nav-link">Chicks</h4>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Pricing</a> */}
                        </li>
                        <h4 className="nav-link">Eggs</h4>
                
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
