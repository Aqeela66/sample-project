import React from 'react'
import { useState } from "react";

const Body = () => {
  const [val, setVal] = useState("");
    return (
     <>
     <div className="container col-sm-12  art-work bg-dark">
    <div className="row">
  <div className="col-lg-12 mt-2  col-md-12">
    <div className="d-flex col-md-12 text-white flex-wrap justify-content-start">
      <div className="p-5 ">
        <h5 className="card-title  artwork-sec-1">Pay for</h5>
        <p className="card-text fw-bold fs-3">What you need</p>
        <p style={{width:"23rem", fontSize:"18px", fontFamily:"sans-serif"}} className="text-wrap  text-justify card-text">Pay for what you need, no hidden feePay for what you need, no hidden feePay for what you need, no hidden feeou need, no hidden fee </p>
      </div>
      <div className=" p-5 artwork-sec-2">
        <h5 className="card-title ">How many art work do you need?</h5>
        <p style={{fontFamily:"sans-serif", fontWeight:"lighter"}} className="card-text ">Number of artworks</p>
        <div className="input-group-lg col-md-1">
  
  <input value={val} onChange={e => setVal(e.target.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))} type="text" className="  form-control bg-transparent" placeholder=""  id="validationCustom01"/>
  <p className="mt-2 mb-0">Price</p>
  <p className="fs-2 mb-0">{val}<sup className="mx-2 fs-5">USD</sup> </p>
</div>
     
      </div>
    </div>
  </div>
  {/* <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div> */}
</div>
</div>
  
     </>
    )
}

export default Body