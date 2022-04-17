// Code Here
import React from 'react'
import frame from '../assets/Frame.png'

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg  bg-0b0b0b" style={{height: "5rem"}}>
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={frame} style={{ height: "4rem", position: "relative", left: "-30px" }} className="me-5" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* kosong */}
                        </ul>
                        <div>
                            <a href="/user-complain" className="text-white text-decoration-none me-3 bg-0b0b0b">Complain</a>
                            <a href="/profile" className="text-white text-decoration-none me-3 bg-0b0b0b">Profile</a>
                            <a href="/product" className="text-white text-decoration-none me-3 bg-0b0b0b">Product</a>
                            <a href="#" className="text-white text-decoration-none me-3 bg-0b0b0b">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header