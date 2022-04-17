// Code Here
import React from 'react'

function Editcategory() {
    return (
        <div className="container">
            
            <div className="mt-5 mb-5  col-12">
                <div className="card-body">
                    <form action="" method="">
                        <p className='h4 text-white mb-5 mt-1'>Edit Category</p>
                        <div className="mb-3">
                            {/* <label for="inputEmail" className="form-label fw-bold">Email</label> */}
                            <input type="text" className="form-control bg-474747" placeholder='Mouse' id="inputCategory" name="inputCategory" />
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

export default Editcategory