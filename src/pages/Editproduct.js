// Code Here
import React from 'react'

function Editproduct() {
    return (
        <div className="container">

            <div className="mt-3 mb-5  col-12">
                <div className="card-body">
                    <form action="" method="">
                        <p className='h4 text-white mb-0 mt-1'
                        style={{
                            position: "relative",
                            bottom: "-15px"
                        }}
                        >Edit Product</p>
                        {/* upload img */}
                        <div className="mb-4 col-3">
                            <label for="formFile">
                                <p className='btn btn-danger bg-red px-2'
                                style={{
                                    position: "relative",
                                    bottom: "-55px"    
                                }}
                                >Upload Image</p>
                            </label>
                            <input className="form-control  bg-black text-white ms-2" type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-474747" placeholder='Mouse' id="inputCategory" name="inputCategory" />
                        </div>
                        <div className="mb-3">
                            <textarea type="text" className="form-control bg-474747" 
                            style={{overflow: "hidden", height: "100px"}} placeholder='Lorem ipsum simply dummy text of the printing and typesetting industry Lorem ipsum has been the industry s standard dummy text ever since the 1500s when an unknown printer took a gallet of type and scrambled it to make a type specimen bookit has survived not only five centuries but also the leap into electronic typesetting remaining esentially unchanged' id="inputCategory" name="inputCategory">
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-474747" placeholder='500.000' id="inputCategory" name="inputCategory" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-474747" placeholder='600' id="inputCategory" name="inputCategory" />
                        </div>
                        <div className="d-grid gap-2 mt-5">
                            <button className="btn btn-success border border-success bg-green text-white" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Editproduct