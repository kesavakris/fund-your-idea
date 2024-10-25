import React from "react";
import "./S3.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg"
import logo5 from "./chiranjeevi.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "./nav";
import News from "./news.jpg";
import Group from './groupchatimage.png';
import Success from "./successstories.jpg";
import Greenko from './greenkoAnilimage.jpeg';
import Chat from './chatting.jpg'

const S3 = () => {
  let navigate = useNavigate();
  const postyouridea = () => {
    let path = `/dashboard/postyouridea`;
    navigate("/dashboard/postyouridea");
  };
  return (
    <>
      <div class="S3">
        <div class="header">
          <div class="logo" style={{ marginLeft: "24px" }}>
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
        <h1 style={{marginTop:"-40px"}}>
          <center>Welcome To Fund Your Idea</center>
        </h1>
        <div class="cards container">
        <div class="row"> 
        <div class="col-md-4">
                <div class="card" style={{height:"450px"}}>
                   <img src={News}  style={{width: "50%", height:"12vh",marginLeft:"25%"}}/>
                  <div class="matter">
                      <div class="Noti" style={{textAlign:"center"}}>
                      <h5>Notifications</h5>
                        <ol>
                        <li>UPSC Notification 2023</li>
                        <li>SSC Notification 2023</li>
                        <li>AIIMS Notification 2023</li>
                        <li>UGC NET Notification 2023</li>
                        <li>JEE(Advanced) Notification 2023</li>
                        <li>SSC MTS Notification 2023</li>
                        <li>Railway Notification 2023</li>
                        <li>Postal Notification 2023</li>
                        <li>State Notification 2023</li>
                        <li>Central Notification 2023</li>
                        </ol>
                        </div>                      
                  </div>    
                </div>
              </div> 
              <div class="col-md-4">
            <div class="card" style={{overflow:"auto",height:"450px"}}> 
             <img src={Success} alt="" style={{width: "50%", height:"12vh",marginLeft:"25%"}}/>
              <div class="matter">
                  <h5 style={{textAlign:"center"}}>Success Story of Greenko</h5>
                  <img src={Greenko} style={{width:"100%",height:"20vh"}} />
                  <p>Mr. Chalamalasetty had an extended entrepreneurial career during which he was involved in evolving start-up businesses in Information Technology, Infrastructure and Environmental sectors in the United Kingdom and India.</p>
              </div>    
            </div>
          </div> 
        <div class="col-md-4">
            <div class="card" style={{overflow:"auto",height:"450px"}}> 
             <img src={Group} alt="" style={{width: "50%", height:"12vh",marginLeft:"25%"}}/>
              <div class="matter">
                  <h5 style={{textAlign:"center"}}>Group Chat</h5>
                  <img src={Chat} style={{width:"75%",height:"20vh",marginLeft:"12%"}} />
                  <p style={{padding:"10px"}}>Group chat is similar to chat features in that it gives you the ability to send instant messages to others in an organization</p>
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
            <a href="#" class="skpye">
              <i class="fa fa-skype" aria-hidden="true"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <div />
            <div class="copyright">
              &copy; Copyright@2023 <strong>Fund Your Idea</strong>. All Rights
              Reserved
            </div>
              <div className="credits">
          Designed by{" "}
          <a href="https://www.careerbridgeit.in/">Career Bridge IT Services</a>
        </div>
          </div>
           
        </div>
      </div>
    </>
  );
};

export default S3;
