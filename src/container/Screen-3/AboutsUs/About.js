import React from "react";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import "./About.css";
import Nav from '../nav';

const About = () => {
  return (
    <>
      <div class="S3">
        <div class="header">
          <div class="logo" style={{ marginLeft: "24px",marginTop:"7px" }}>
            <img
              src={logo1}
              style={{ width: "100px", height: "13vh", borderRadius: "50%" }}
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
        
        <div className="main" style={{ marginTop: "-70px" }}></div>
        <Nav/>
        <div class="aboutus">
          <h1>
            <u>
              <center> About Us</center>
            </u>
          </h1>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card1">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "70%", height: "65%", marginLeft: "35px" }}
                />
                <div>
                  <h5 style={{ marginLeft: "10px" }}>Fund Your Ideas</h5>
                  <p style={{ marginLeft: "10px" }}>
                    A card is a flexible and extensible content container. It
                    includes options for headers and footers.It includes options
                    for headers and footersIt includes options for headers and
                    footers
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card1">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "70%", height: "65%", marginLeft: "35px" }}
                />
                <div>
                  <h5 style={{ marginLeft: "10px" }}>MIssion</h5>
                  <p style={{ marginLeft: "10px" }}>
                    A card is a flexible and extensible content container. It
                    includes options for headers and footers.It includes options
                    for headers and footersIt includes options for headers and
                    footers
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card1">
                <img
                  src={logo1}
                  alt=""
                  style={{ width: "70%", height: "65%", marginLeft: "35px" }}
                />
                <div>
                  <h5 style={{ marginLeft: "10px" }}>Services</h5>
                  <p style={{ marginLeft: "10px" }}>
                    A card is a flexible and extensible content container. It
                    includes options for headers and footers.It includes options
                    for headers and footersIt includes options for headers and
                    footers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="footer" style={{marginLeft:"-207px"}}>
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
              <a href="#" class="skpye">
                <i class="fa fa-skype" aria-hidden="true"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <div />
              <div class="copyright">
                &copy; Copyright@2023 <strong>Fund Your Idea</strong>. All
                Rights Reserved
              </div>
              <div class="credits">
                Designed by{" "}
                <a href="https://www.careerbridgeit.in/">
                  Career Bridge IT Services
                </a>
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
