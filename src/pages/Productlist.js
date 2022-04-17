// Code Here
import React from 'react'





function Productlist() {
    return (
        <div className="container">
            <p className='h4 text-white mt-5 mb-3'>List Product</p>
            <table class="table text-white" style={{ borderBottomColor: "#C4C4C4", width: "100%" }}>
                <tbody>
                    <tr className='fw-bold'>
                        <th width='50px'>No</th>
                        <td width='200px'>Photo</td>
                        <td width='180px'>Product Name</td>
                        <td width='205px'>Product Desc</td>
                        <td width='130px'>Price</td>
                        <td width='80px'>Qty</td>
                        <td width=''>Action</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mouse</td>
                        <td>Mouse</td>
                        <td>lorem ipsum Mouse ...</td>
                        <td>500.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Keyboard</td>
                        <td>Keyboard</td>
                        <td>lorem ipsum Keyboard ...</td>
                        <td>700.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Bag</td>
                        <td>Bag</td>
                        <td>lorem ipsum Bag ...</td>
                        <td>300.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Stationary</td>
                        <td>Stationary</td>
                        <td>lorem ipsum Stationary ...</td>
                        <td>25.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Doll</td>
                        <td>Doll</td>
                        <td>lorem ipsum Doll ...</td>
                        <td>125.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Pillow</td>
                        <td>Pillow</td>
                        <td>lorem ipsum Pillow ...</td>
                        <td>300.000</td>
                        <td>600</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-success border border-success  bg-green px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }}>Edit</button>
                                <button type="button" className="btn btn-danger border border-danger  bg-red px-4  me-3" style={{ paddingTop: "1px", paddingBottom: "1px", width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* <!-- Modal --> */}
            <div className="modal fade text-dark mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div class="modal-body border-white">
                            <p className='h5'>Delete Data</p>
                            <p>Are you sure want to delete this data?</p>
                        </div>
                        <div className="modal-footer border-white" style={{ marginTop: "-20px" }}>
                            <button type="button" className="btn btn-success px-5 bg-green" data-bs-dismiss="modal">Yes</button>
                            <button type="button" className="btn btn-danger px-5 bg-red">No</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            
        </div>
    )
}


export default Productlist