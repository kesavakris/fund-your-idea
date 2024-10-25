import React from "react";
import "./govt.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import k4 from  "./k4.jpg";
import K5 from "./k5.jpg";
import K6 from "./K6.jpg";
import Nav from '../nav';
import K7 from './kapuc.jpg';

const Govt = () => {
  return (
    <>
      <div class="S2">
        <div class="header">
          <div class="logo">
            <img
              src={logo1}
              alt=""
              style={{
                width: "105px",
                height: "14.5vh",
                borderRadius: "50%",
                marginTop: "-12px",
              }}
            />
          </div>
          <div class="text">
            <h1>FUND YOUR IDEA</h1>
          </div>
          <div class="img">
            <img
              src={logo2}
              style={{ width: "80px", height: "10vh", borderRadius: "50%",paddingRight: "5px", }}
              alt=""
            />
            <img
              src={logo3}
              style={{ width: "80px", height: "10vh", borderRadius: "50%",paddingRight: "5px", }}
              alt=""
            />
            <img
              src={logo4}
              alt=""
              style={{ width: "75px", height: "10vh", borderRadius: "50%",paddingRight: "5px", }}
            />
            <img
              src={logo5}
              alt=""
              style={{ width: "80px", height: "10vh", borderRadius: "50%",paddingRight: "5px", }}
            />
          </div>
        </div>
        <Nav/>
        <h1 class="aboutus" style={{marginTop: "-70px"}}><u><center>Government Schemes</center></u></h1>
	<div class="cards container">
        <div class="row">  
        <div class="col-md-3">
            <div class="card"> 
              <img src={K7} alt="" style={{width: "100%", height:"34vh"}}/>
              <div class="matter">
                  <h5 style={{padding:"5px"}}>Kapu Welfare& Development Corporation</h5>
                  <p style={{padding:"10px"}}>Government, at all levels, announces Welfare Schemes for a cross section of the society.</p>
              </div>    
            </div>
          </div> 
          <div class="col-md-3">
            <div class="card"> 
              <img src={k4} alt="" style={{width: "100%",height: "36vh"}}/>
              <div class="matter">
                  <h5 style={{padding: "9px"}}>Centeral Schemas</h5>
                  <p style={{padding:"10px"}}>The Government of India has social welfare and social security schemes for India's citizens.</p>
              </div>    
            </div> 
          </div>

          <div class="col-md-3">
            <div class="card"> 
              <img src={K5} alt="" style={{width: "100%", height:"37vh"}}/>
              <div class="matter">
                  <h5 style={{padding:"5px"}}>State Schemes</h5>
                  <p style={{padding:"10px"}}>Government, at all levels, announces Welfare Schemes for a cross section of the society.</p>
              </div>    
            </div>
          </div>

          <div class="col-md-3">
            <div class="card"> 
              <img src={K6} alt="" style={{width:"100%", height:"37vh",}}/>
              <div class="matter">
                  <h5 style={{padding:"5px"}}>CSR SChemes</h5>
                  <p style={{padding:"10px"}}>The role of infrastructure is crucial for agriculture development and for taking the production.</p>
              </div>    
            </div>
          </div>
        </div>
      </div>

        <div class="footer">
          <div class="social-links">
            <a href="#" class="twitter">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" class="facebook">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" class="instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" class="skype">
              <i class="fa fa-skype" aria-hidden="true"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>

          <div class="copyright">
            &copy; Copyright@2023 <strong>Fund Your Idea</strong>. All Rights
            Reserved
          </div>
          <div class="credits">
            Designed by{" "}
            <a href="https://www.careerbridgeit.in/"  style={{color:"violet"}}>
              Career Bridge IT Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Govt;
