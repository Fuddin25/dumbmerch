// Code Here
import React from 'react'





function Productlisthead() {
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
                    

                </tbody>


            </table>

            

        </div>
    )
}


export default Productlisthead