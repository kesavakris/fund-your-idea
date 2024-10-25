import React from "react";
import "./S2.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg"
import logo5 from "./chiranjeevi.jpg";
import { useNavigate } from "react-router-dom";

const S2 = () => {
  let navigate = useNavigate();
  const login = () => {
    let path = `/`;
    navigate("/");
  };
  return (
    <>
      <div class="S2">
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
        <div class="Main" style={{ marginTop: "130px" }}>
          <form class="form1" action="">
            <h1 class="form-title" style={{marginLeft:"85%"}}>Registration form</h1>
            <label for="fullName" class="full name">
              Full Name &nbsp;:
            </label>
            <input id="fullName" type="text" placeholder="Enter Name" />

            <label for="">Phone Number &nbsp; :<span style={{color:"red"}}>*</span></label>
            <input type="text" placeholder="Enter Phone Number" />

            <label for="">Email&nbsp;:<span style={{color:"red"}}>*</span></label>
            <input type="text" placeholder="Enter Email" />

            <label for="">Date of Birth&nbsp;:</label>
            <input type="Date"  placeholder="Enter Date Of Birth"/>

            <label for="">Aadhaar Number&nbsp;:</label>
            <input type="text" placeholder="Enter Aadhaar Number"/>

            <label for="">Gender&nbsp;:</label>
            <select name="" id="">
              <option value="">--Select Any Option--</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Trans Gender</option>
            </select>

            {/* <label for="">Marital Status&nbsp;:</label>
            <select name="" id="">
              <option value="">--Select Any Option--</option>
              <option value="">Married</option>
              <option value="">Unmarried</option>
            </select>

            <label for="">Education&nbsp;:</label>
            <input type="text"  placeholder="Enter Education"/>

            <label for="">Area of Interest&nbsp;:</label>
            <select name="" id="">
              <option value="">--Select Any Option--</option>
              <option value="">Agriculture</option>
              <option value="">Electrical</option>
              <option value="">Food Processing</option>
              <option value="">Mechanical</option>
              <option value="">IT Sector</option>
            </select>

            <label for="">Address&nbsp;:</label>
            <input type="text"  placeholder="Enter Address"/> */}

            <label for="">Password &nbsp;:</label>
            <input type="text"  placeholder="Enter Password"/>

            <label for="">Confirm Password&nbsp;:</label>
            <input type="text"  placeholder="Confirm Password" />

            <button onClick={() => navigate("/")} style={{marginLeft: "180px"}} >Register</button>
          </form>
          <br />
          <br />
          <br />
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
            <a href="https://www.careerbridgeit.in/" style={{color:"violet"}}>
              Career Bridge IT Services
            </a>
          </div>
        </div>
    </>
  );
};

export default S2;
