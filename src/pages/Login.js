// Code Here
import React from 'react'
import frame from '../assets/Frame.png'


function Login() {
    return (
        <div className="container">
            <section>
                
                <div className="row g-0 py-5">

                    <div className="col-md-8">
                        <div className="card-body ms-5 me-4">
                            <img className='mb-5 img-dumb-merch' src={frame}  />
                            <div style={{position: "relative", top: "-65px"}}>
                                <h5 className="card-title text-white fw-bold h1 mt-2">Easy, Fast and Reliable</h5>
                                <p className="card-text text-justify w-400px text-484848">Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <b>Indonesia</b></p>
                            </div>
                            {/* button log and reg */}
                            <div style={{ position: "relative", top: "-18px" }}>
                                <button type="button" className="btn btn-danger border border-danger  bg-red border border-primary  px-4 py-1 me-3">Login</button>
                                <a href='/register' type="" className="btn text-a6a6a6 border-0b0b0b bg-0b0b0b px-3 py-1">Register</a>
                            </div>
                            {/* button log and reg */}
                        </div>
                    </div>


                    <div className="mt-5 mb-5 bg-181818 col-md-3 col-sm-3-center" style={{borderRadius: "10px", maxHeight: "310px"}}>

                        <div className="card-body">
                            <form action="" method="">
                                <p className='h2 text-white mb-4 mt-3'>Login</p>
                                <div className="mb-3">
                                    {/* <label for="inputEmail" className="form-label fw-bold">Email</label> */}
                                    <input type="email" className="form-control bg-474747" placeholder='Email' id="inputEmail" name="inputEmail" />
                                </div>
                                <div className="mb-3">
                                    {/* <label for="inputPassword" className="form-label fw-bold">Password</label> */}
                                    <input type="password" className="form-control bg-474747" placeholder='Password' id="inputPassword" name="inputPassword" />
                                </div>
                                <div className="d-grid gap-2 mt-5">
                                    <button className="btn btn-danger border border-danger bg-red text-white  px-4" type="submit">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                
            </section>
            
        </div>
    )
}

export default Login