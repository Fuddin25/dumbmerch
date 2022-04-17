// Code Here
import React from 'react'
import egilol from '../assets/egilol.png'
import beachlover from '../assets/beachlover.png'
import polygon from '../assets/polygon.png'
import Admincomplainright from './Admincomplainright'




function Admincomplain() {
    return (
        <div className="">
            < Admincomplainright />
            {/* bagian kanan    */}
            {/* <div className='boxright'> 
                
                <div className="card col-12 mt-4 mb-4 ms-3 bg-black" style={{ maxWidth: "333px", height: "53px" }}>
                    <div className="row g-0">
                        <div className="col-2">
                            <img src={beachlover} className="img-fluid rounded-circle" alt="foto" style={{}} />
                        </div>
                        <div className="col-9 ms-1">
                            <div className="card-body">
                                <img src={polygon} className="polygon" />
                                <p className="chatbox card-text">
                                    <small className="ms-1 ps-2 text-white">Hello Admin, I Need Your Help</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="mb-3">
                    <textarea type="text" className="form-control bg-ABABAB26"
                        style={{ overflow: "hidden", height: "40px" }} placeholder='Send Message' id="inputCategory" name="inputCategory">
                    </textarea>
                </div>

            </div> */}
            {/* bagian kanan    */}

            {/* bagian chat kiri */}
            <div className='boxline col-12'>
                
                <div className='container'>

                    <div className="card col-12 mt-4 ms-5 bg-black" style={{ maxWidth: "333px", height: "53px" }}>
                        <div className="row g-0">
                            <div className="col-2">
                                <img src={egilol} className="img-fluid rounded-circle" alt="foto" style={{}} />
                            </div>
                            <div className="col-8" style={{ marginLeft: "-5px" }}>
                                <div className="card-body">
                                    <p className="card-text" style={{ marginTop: "-19px" }}><small className="text-white">egi_lol</small></p>
                                    <p className="card-text" style={{ marginTop: "-14px", fontSize: "14px" }}><small className="text-ABABAB">Hello Admin, I Need Your Help</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card col-12 mt-4 ms-5 bg-black" style={{ maxWidth: "333px", height: "53px" }}>
                        <div className="row g-0">
                            <div className="col-2">
                                <img src={beachlover} className="img-fluid rounded-circle" alt="foto" style={{}} />
                            </div>
                            <div className="col-10" style={{ marginLeft: "-5px" }}>
                                <div className="card-body">
                                    <p className="card-text" style={{ marginTop: "-19px" }}><small className="text-white">beach_lover</small></p>
                                    <p className="card-text" style={{ marginTop: "-14px", fontSize: "14px" }}><small className="text-ABABAB">Hello Admi, This Problem Product to Me</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* bagian chat kiri */}
            

        </div>
    )
}


export default Admincomplain