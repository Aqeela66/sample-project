import React from 'react'
import './App.css';
import LOGO from './assests/logo1.png'
const Header = () => {
    return (
      <>
      <div className="col-12 ">
<div className="App-header">
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div class="container">
    <a class="navbar-brand mx-5" href="#">
       <img width="114px" height="68px" src={LOGO} alt="Header Image Logo"/> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="NavBar">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a  href="#" className="CTA nav-link active" aria-current="page" >Start your free trail</a>
        </li>
        
  
      </ul>
      </div>
    </div>
  </div>
</nav>

<h3 className="text-center fw-bold mt-5 my-5">Transparent pricing, no hidding charges</h3>
<p style={{fontSize:"14px" , textAlign:"center", marginTop:"-24px"}}>We offer two affordable planWe offer two affordable plan <br/>We offer two affordable plan</p>
</div>
</div>

      </>
    )
}

export default Header