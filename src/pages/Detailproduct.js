// Code Here
import React from 'react'
import mouse from '../assets/mouse.png'
import keyboard from '../assets/keyboard.png'

function Detailproduct() {
    return (
        <div className="container">

            <div class="row ms-5 mt-5">
                <div class="col-md-5 col-sm-4-center">

                    <div className="card bg-0b0b0b text-white mb-5">
                        <img src={mouse} className="card-img no-border-radius" alt="..." />
                    </div>

                </div>

                <div class="col-sm-6">
                    <div className="card me-3 mb-5 bg-0b0b0b text-white">
                        <div className="card-body">
                            <p className="card-title text-red fw-bold h1">Mouse</p>
                            <p className="card-text">Stock : 600</p>
                            <p className="card-text">
                                - Wireless Mouse <br />
                                - Konektivitas wireless <br />
                                - Jarak wireless hingga 10m <br />
                                - Plug and Play <br />
                                - Baterai tahan hingga 12 bulan <br />
                                <br />
                            </p>
                            <p className="card-text text-justify" >
                                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa.Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil.Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                            </p>
                            <p className="card-title text-red fw-bold h4 text-end">Rp.300.900</p>
                            <div className="d-grid gap-2 mt-5">
                                <button className="btn btn-danger border border-danger bg-red text-white  px-4" type="submit">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="d-flex justify-content-start ms-5 mt-3">
                <div className="card me-3 bg-0b0b0b text-white mb-5" style={{ width: "25rem" }}>
                    <img src={mouse} className="card-img no-border-radius" alt="..." />
                </div>

                <div className="card me-3 bg-0b0b0b text-white" style={{ width: "34rem" }}>
                    <div className="card-body">
                        <p className="card-title text-danger fw-bold h1">Mouse</p>
                        <p className="card-text">Stock : 600</p>
                        <p className="card-text">
                            - Wireless Mouse <br /> 
                            - Konektivitas wireless <br /> 
                            - Jarak wireless hingga 10m <br /> 
                            - Plug and Play <br />
                            - Baterai tahan hingga 12 bulan <br />
                            <br/>
                        </p>
                        <p className="card-text text-justify" >
                            Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa.Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil.Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                        </p> 
                        <p className="card-title text-danger fw-bold h4 text-end">Rp.300.900</p>
                        <div className="d-grid gap-2 mt-5">
                            <button className="btn btn-danger border border-danger bg-danger text-white  px-4" type="submit">Buy</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Detailproduct