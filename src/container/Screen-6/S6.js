import React from "react";
import "./S6.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import { useNavigate } from "react-router-dom";

const   S6 = () => {
  let navigate = useNavigate();
  const Signup = () => {
    let path = `/alert`;
    navigate("/alert");
  };
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
                height: "14.0vh",
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
        <div className="main" style={{ marginTop: "150px" }}>
          <form action="" className="form">
          <h3 class="form-title" style={{marginLeft: "70%"}}>Submit Your Idea</h3>

            <label for="">Title :</label>
            <input type="text" placeholder="Enter Title Here" />
            <label for="">Field :</label>
            <select name="" id="">
              <option value="">--Select Any Option--</option>
              <option value="">Agriculture</option>
              <option value="">Women Empowerment</option>
              <option value="">Food Processing</option>
              <option value="">Mechanical</option>
              <option value="">IT Sector</option>
              <option value="">Others</option>
            </select>
            <label for="">Description :</label>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Enter Description Here"
            ></textarea>
            <label for="">Upload Project Document :</label>
            <input
              type="file"
              style={{ border: "None", backgroundColor: "transparent", borderRadius:"5px" }}
            />

            <div class="check">
              <input type="checkbox"/>
              <label>&nbsp;&nbsp;Agreed to give my consent to share my idea to Screening Committee.</label>
            </div>
            
            <button style={{borderRadius:"5px", marginLeft:"90%",marginTop:"70px"}} onClick={() => navigate("/alert")}>Submit</button>
          </form>
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

export default S6;
