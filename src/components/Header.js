import React from 'react';

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">

            <div className="container">

                <Link to="/" className="text-light text-decoration-none">
                    <h1>

                        CRUD - React, Redux, Rest Api & Axios
                    </h1>

                </Link>

            </div>

            <Link className="btn btn-danger nuevo-post d-block d-md-inline-block" to="/products/new">Agregar Producto &#43;</Link>
        </nav>
    );
};

export default Header;