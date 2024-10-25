import React from "react";
import "./contact.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import Nav from "../nav";
const Contact = () => {
  return (
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
      <div>
        <h1 className="contact"><u>Contact Us</u></h1>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
          <div style={{marginLeft:"38px", fontSize:"30px"}}>
            <h5>Contact Us</h5>
            </div>
            <div>
              <li>
                <ul>Further information please do call or email:</ul>
                <ul>Phone: +91 XXXXXXXXXX</ul>
                <ul>Email: hi@gmail.com</ul>
              </li>
            </div>
          </div>
          <div class="col-md-4">
          <div style={{marginLeft:"38px",fontSize:"30px"}}>
            <h5>Our Services</h5>
            </div>
            <div>
              <li>
                <ul>Post Your Idea</ul>
                <ul>News Feed</ul>
                <ul>Best Agriculture Practices</ul>
                <ul>Govt. Schemes</ul>
                <ul>Student Corner</ul>
              </li>
            </div>
          </div>
          <div class="col-md-4">
          <div style={{marginLeft:"38px",fontSize:"30px"}}>

            <h5>Links</h5>
            </div>
            <div>
              <li>
                <ul> Home</ul>
                <ul>About us</ul>
                <ul>Services</ul>
                <ul>Privacy policy</ul>
              </li>
            </div>
          </div>
        </div>
        <div class="footer" style={{marginLeft:"-12px"}}>
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
    </div>
  );
};

export default Contact;
