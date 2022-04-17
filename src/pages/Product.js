// Code Here
import React from 'react'
import mouse from '../assets/mouse.png'
import keyboard from '../assets/keyboard.png'

function Product() {
    return (
        <div className="App container">
            <p className='h4 text-red mt-3 mb-4'>Product</p>

            <div class="d-flex justify-content-start">
                <a href='detail-product' className='text-decoration-none'>
                <div className="card me-3 bg-212121 text-white" style={{ width: "12rem" }}>
                    <img src={mouse} className="card-img-top" alt="..." />
                   
                    <div className="card-body">
                        <h5 className="card-title text-red fw-bold">Mouse</h5>
                        <p className="card-text">Rp.500.000 <br />Stock : 600</p>

                    </div>
                </div>
                </a>

                <div className="card me-3 bg-212121 text-white" style={{ width: "12rem" }}>
                    <img src={keyboard} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-red fw-bold">Keyboard</h5>
                        <p className="card-text">Rp.700.000 <br />Stock : 600</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product