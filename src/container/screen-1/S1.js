import "./S1.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import { useNavigate } from "react-router-dom";


function Screen1() {
  let navigate = useNavigate();
  const Signup = () => {
    let path = `/registration`;
    navigate("/registration");
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
      {/*  */}

      <div class="main">
        <form class="form1" action="" style={{marginTop:"15%"}}>
          <h1 class="form-title" style={{marginLeft:"80%",fontSize:"25PX"}}>Login</h1>

          <label for=""> Email / Phone Number &nbsp;:</label>
          <input type="text" placeholder="Enter Email/Phone Number" />

          <label for="">Password &nbsp;:</label>
          <input type="text" placeholder="Enter Password" />

          <a href="#" style={{marginTop:"8px"}} onClick={() => navigate("/forgot")}>Forgot Password</a>

          <div class="chec">
            <input type="checkbox" />&nbsp;
            <label for="">Remember Me</label>
          </div>

          <div style={{display:"flex",justifyContent:"center",marginLeft:"50%",}}>
          <a onClick={() => navigate("/registration")}>Signup</a>
          <button onClick={() => navigate("/dashboard")}>Login</button>
          </div>
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
  );
}

export default Screen1;
