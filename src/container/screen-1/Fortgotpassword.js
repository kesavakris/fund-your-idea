import React from 'react';
import "./S1.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import {useNavigate} from "react-router-dom";
function Forgot () {
    let navigate = useNavigate();
    const Signup = () =>{
        navigate("/")
    }


    return(
        <>
        <div class="S1">
        <div class="header">
          <div class="logo">
            <img
              src={logo1} alt=""
              style={{
                width: "110px",
                height: "14.5vh",
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
                padding: "2px",
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
        <div className='main' style={{marginTop:"250px"}}>
        <form>
        <div>
        <h1 style={{fontSize:"18px",marginLeft:"180px"}}>FORGOTPASSWORD</h1>
        </div>
              <label for=""> Username &nbsp;:</label>
          <input type="text" placeholder="Enter Username" />
          <button  style={{width: "95px",marginLeft: "230px", alignItems: "center"}} >Validation</button>

          <label for=""> New Password &nbsp;:</label>
          <input type="Password" placeholder="Enter New Password" />
          <label for="">Confirm Password &nbsp;:</label>
          <input type="Password" placeholder="Confirm Password" />
          <button style={{width: "90px",marginLeft: "230px"}} onClick={()=>navigate("/")}>Submit</button>
          </form>


          </div>
          <br />
      <br />
      <br />

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
    )
}
export default Forgot;