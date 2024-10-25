import React from "react";
import "./corner.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import Notification from "./notifications.jpg";
import Option from "./options.jpg";
import Funding from "./funding.jpg";
import Kapu from './KAPU.jpeg'
import Nav from '../nav';

const Corner = () => {
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
              style={{ width: "80px", height: "10vh", borderRadius: "50%" ,paddingRight: "5px",}}
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
        <h1 class="aboutus" style={{marginTop: "-80px"}}><u><center>Student Corner</center></u></h1>
            <div class="cards container">
                <div class="row">
                  <div class="col-md-3">
                    <div class="card " style={{height:"500px"}}> 
                      <img src={Notification} style={{width: "100%", height:"40vh",}}/>
                      <div class="matter">
                          <h5>Notifications</h5>
                          <p> There are many notification systems available, such as Pusher, Firebase, and OneSignal.Individuals with innovative ideas</p>
                      </div>    
                    </div>
                  </div>
                    
                  <div class="col-md-3">
                    <div class="card" style={{height:"500px"}}> 
                      <img src={Option} alt="" style={{width:"100%", height:"40vh",}}/>
                      <div class="matter">
                          <h5>Opportunities</h5>
                          <p>Individuals with innovative ideas in different fields such as science, technology, arts, and education.projects by raising money </p>                      
                        </div>    
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card" style={{height:"500px"}}> 
                      <img src={Funding} alt="" style={{width:"100%", height:"40vh",}}/>
                      <div class="matter">
                          <h5>Funding</h5>
                          <p>Crowdfunding platforms such as Kickstarter, Indiegogo, and GoFundMe allow individuals to fund their ideas and projects by raising money </p>                    
                          </div>    
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="card " style={{height:"500px"}}> 
                      <img src={Kapu} style={{width: "100%", height:"40vh",}}/>
                      <div class="matter">
                          <h5>Govt. Schemes For Kapu</h5>
                          <ol>
                        <li style={{color:"black",marginLeft:"-12px"}}>Kapu Nestham</li>
                        <li style={{color:"black",marginLeft:"-12px"}}>Vidhesi Vidya Dhevena for Kapu</li>
                        <li style={{color:"black",marginLeft:"-12px"}}>Kapu Welfare Development Fund</li>
                        </ol>
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

export default  Corner;