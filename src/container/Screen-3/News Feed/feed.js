import React from "react";
import "./feed.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svr.png";
import logo4 from "./pss.jpeg";
import logo5 from "./chiranjeevi.jpg";
import News from "./news.jpg"
import Nav from '../nav';

const Feed = () => {
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
          <div class="img" >
            <img
              src={logo2}
              style={{ width: "80px", height: "10vh", borderRadius: "50%", paddingRight: "5px",}}
              alt=""
            />
            <img
              src={logo3}
              style={{ width: "80px", height: "10vh", borderRadius: "50%" ,paddingRight: "5px",}}
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
              style={{ width: "80px", height: "10vh", borderRadius: "50%" ,paddingRight: "5px",}}
            />
          </div>
        </div>
        {/*  */}
        <Nav/>
        <h1><center style ={{color:"#ff9900",marginTop: "180px",}}><u> News Feed </u></center> </h1>
        <div  class="cards container  d-flex justify-content-center " > 
            
              <div class="col-md-5">
                <div class="card">
                  <img src={News}  style={{width: "100%", height:"35vh", marginTop: "5px",}}/>
                  <div class="matter">
                      <h5>News Feed</h5>
                      <p> Use your news aggregation platform to create a custom newsfeed for "Fund Your Idea." Add keywords and topics related to crowdfunding, grants, investments, and other funding opportunities that are relevant to your project.</p>
                      
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
    </>
  );
};

export default Feed;