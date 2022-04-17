// Code Here
import React from 'react'
import samplefoto from '../assets/samplefoto.png'
import frame from '../assets/Frame.png'
import mouse from '../assets/mouse.png'

function Profile() {
    return (
        <div className="container">
            <div className='container'>
                
            </div>
            <div class="row mt-5">
                <p className='text-red fw-bold h4 mb-5'>My Profile</p>
                <div class="col-md-4 col-sm-4-center">

                    <div className="card bg-0b0b0b text-white mb-5">
                        <img src={samplefoto} className="card-img no-border-radius" alt="..." />
                    </div>

                </div>

                <div class="col-md-4">
                    <div className="card me-3 mb-5 bg-0b0b0b text-white">
                        <div className="card-body">
                            <p className="card-title text-red fw-bold h5">Name</p>
                            <p>Yosep</p>
                            <p className="card-title text-red fw-bold h5">Email</p>
                            <p>yosepgans@gmail.com</p>
                            <p className="card-title text-red fw-bold h5">Phone</p>
                            <p>083896833122</p>
                            <p className="card-title text-red fw-bold h5">Gender</p>
                            <p>Male</p>
                            <p className="card-title text-red fw-bold h5">Address</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div>
                    </div>
                </div>
                
                <div className="card col pe-1 bg-212121" style={{ maxHeight: "155px"}}>
                    <div className="row g-0">
                        <div className="col">
                            <img src={mouse} className="mt-1 mb-1" style={{ maxHeight: "140px" }} alt="..." />
                        </div>
                        <div className="col" style={{marginLeft: "-120px"}}>
                            <div className="card-body">
                                <p className="card-title text-red fw-bold h5">Mouse</p>
                                <p className="card-title text-red fw-bold" style={{fontSize: "10px"}}><b>Saturday,</b> 14 Juli 2021</p>
                                <p className="card-text" style={{ marginTop: "-10px" }}><small className="text-muted">Price : Rp.500.000</small></p>
                                <p className="card-text text-white" style={{ marginTop: "30px" }}>Sub Total : Rp.500.000</p>
                            </div>
                        </div>
                        <div className="col-1">
                            <img src={frame} className="mt-5 me-5" style={{ maxHeight: "50px", position: "relative", left: "-30px" }} alt="..." />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile