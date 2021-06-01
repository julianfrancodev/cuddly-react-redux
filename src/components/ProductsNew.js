import React from 'react';

const ProductsNew = () => {
    return (
        <div className='row justify-content-center mt-3'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>

                        <form>
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