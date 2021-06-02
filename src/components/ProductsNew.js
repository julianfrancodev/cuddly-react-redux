import React from 'react';

import { useDispatch, useSelector } from "react-redux";

// Actions form redux

import { createProductAction } from '../actions/ProductsActions';

const ProductsNew = () => {

    const dispatch = useDispatch();

    // usar useDispatch para ejecutar el action
    const addProduct = () => dispatch(createProductAction());


    // submit from

    const submitNewProduct = (e) => {
        e.preventDefault();

        // Validar formulario

        // Create new product

        addProduct();


    }

    return (
        <div className='row justify-content-center mt-3'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>

                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                />
                            </div>

                            <button type="submit" className="btn btn-block btn-primary font-weight-bold text-uppercase">
                                Agregar
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsNew;