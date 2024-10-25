import React from 'react';
import { useNavigate } from "react-router-dom";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";


function Screen7() {
  let navigate = useNavigate();
  const Signup = () => {
    let path = `/dashboard`;
    navigate("/dashboard");
  };
  return (
    <>
    <div class="S1">
        <div class="header">
          <div class="logo">
          <img
              src={logo1} alt=""
              style={{
                width: "100px",
                height: "13vh",
                borderRadius: "50%",
                marginTop:"-15px"
              }}
            />
          </div>
          <div class="text">
            <h1 style={{fontSize:"55px"}}>FUND YOUR IDEA</h1>
          </div>
          <div class="img">
            <img
              src={logo2}
              style={{
                width: "80px",
                heigpadding: "2px",
                height: "10vh",
                borderRadius: "50%",
                paddingRight: "5px",}}alt=""/>
            <img
              src={logo3}
              style={{
                width: "80px",
                height: "10vh",
                borderRadius: "50%",
                paddingRight: "5px",
              }}
              alt=""
            />
            <img
              src={logo4}
              alt=""
              style={{
                width: "80px",
                height: "10vh",
                borderRadius: "50%",
                paddingRight: "5px",
              }}
            />
            <img
              src={logo5}
              alt=""
              style={{
                width: "80px",
                height: "10vh",
                borderRadius: "50%",
                paddingRight: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        class="main"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          height: "30vh",
          width: "40%",
          textAlign: "center",
          margin: "20%",
          marginLeft: "28%",
          borderRadius: "10px",
          marginTop: "18%",
        }}
      >
        <h5 style={{ textAlign: "center", paddingTop: "40px" }}>Alert</h5>
        <p>
          Your idea is Successfully submitted. Committee will review your idea and
          they will contact you through Call or Mail.
        </p>
        <button
        onClick={() => navigate("/dashboard")}
          style={{
            width: "70px",
            backgroundColor: "orange",
            border: "none",
            borderRadius: "10px",
            height: "35px",
            marginTop: "15px",
          }}
        >
          Ok
        </button>
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
          <a href="https://www.careerbridgeit.in/" style={{color:"violet"}}>Career Bridge IT Services</a>
        </div>
      </div>
</>

  );

}
  

export default Screen7;