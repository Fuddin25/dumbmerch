// Code Here
import React from 'react'





function Productlistdata(component) {
    return (
        <div className="container">
            <table class="table text-white" style={{ borderBottomColor: "#C4C4C4", width: "100%", marginTop: "-16px" }}>
                <tbody>
                    <tr>
                        <th scope="row" width='50px'>{component.no}</th>
                        <td width='200px'>{component.photo}</td>
                        <td width='180px'>{component.productname}</td>
                        <td width='205px'>{component.productdesc}</td>
                        <td width='130px'>{component.price}</td>
                        <td width='80px'>{component.qty}</td>
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


export default Productlistdata