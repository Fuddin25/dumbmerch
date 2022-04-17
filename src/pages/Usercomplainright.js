// Code Here
import React from 'react'
import beachlover from '../assets/beachlover.png'
import polygon from '../assets/polygon.png'
import polygonright from '../assets/polygonright.png'




function Usercomplainright() {
    return (
        <div className="container" style={{ position: "relative", left: "40px" }}>

            <div className='topline'>
            </div>

            {/* bagian kanan    */}

            

            <div className='boxright'>
                {/* card chat kiri */}
                <div className="card col-12 mt-4 mb-4 ms-3 bg-black" style={{ maxWidth: "333px", height: "53px" }}>
                    <div className="row g-0">
                        <div className="col-2">
                            <img src={beachlover} className="img-fluid rounded-circle" alt="foto" style={{}} />
                        </div>
                        <div className="col-9 ms-1">
                            <div className="card-body">
                                <img src={polygon} className="polygon" />
                                <p className="chatbox card-text">
                                    <small className="ms-1 ps-2 text-white">Yes, Is there anything I can help</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card chat kiri */}

            </div>
            {/* bagian kanan    */}

            <div className="mb-3 col-md-9 boxright">
                <textarea type="text" className="form-control bg-ABABAB26"
                    style={{ overflowY: "auto", height: "40px" }} placeholder='Send Message' id="inputCategory" name="inputCategory">
                </textarea>
            </div>

            {/* card chat kanan */}
            <div className='chatright'>
                <div className="card col-12 mt-4 mb-4 ms-3 bg-black" style={{ maxWidth: "333px", height: "53px" }}>
                    <div className="row g-0">
                        <div className="col-9 ms-1">
                            <div className="card-body">
                                <img src={polygonright} className="polygonright" />
                                <p className="chatboxright card-text">
                                    <small className="ms-1 ps-2 text-white">Hello Admin, I Need Your Help</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card chat Kanan */}


        </div>
    )
}


export default Usercomplainright