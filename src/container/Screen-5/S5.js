import React from "react";
import "./S5.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import { useNavigate } from "react-router-dom";

const S5 = () => {
  let navigate = useNavigate();
  const postyouridea = () => {
    let path = `/submit`;
    navigate("/submit");
  };
  return (
    <div class="S5">
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
            style={{
              width: "80px",
              height: "10vh",
              borderRadius: "50%",
              paddingRight: "5px",
            }}
            alt=""
          />
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
              width: "75px",
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
      <div class="main" style={{ marginTop: "130px" }}>
        <form class="form" action="">
          <h3 class="form-title" style={{marginLeft: "90%"}}>Application Form</h3>
          <label for="firstName" class="first-name">
            Name &nbsp;:<span style={{color:"red"}}>*</span>
          </label>
          <input id="firstName" type="text"  placeholder="Enter Name" />

          <label for="">Education &nbsp;:<span style={{color:"red"}}>*</span></label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">Intermediate</option>
            <option value="">Graduation</option>
            <option value="">Post Graduation</option>
            <option value="">Professional Course</option>
          </select>

          <label for="">Occupation &nbsp;:<span style={{color:"red"}}>*</span></label>
          <input type="text"  placeholder="Enter Occupation" />

          <label for="">Anuual Income &nbsp;:<span style={{color:"red"}}>*</span></label>
          <input type="text"  placeholder="Enter Annual Income"/>

          <label for="Father">State &nbsp;:</label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">Andhra Pradesh</option>
            <option value="">Telangana</option>
            <option value="">Tamilnadu</option>
            <option value="">Karnataka</option>
          </select>

          <label for="Father">District &nbsp;:</label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">East Godavari</option>
            <option value="">West Godavari</option>
            <option value="">Vizag</option>
            <option value="">Kakinada</option>
          </select>

          <label for="Father">Mandal &nbsp;:</label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">Rajahmundry</option>
            <option value="">Kovuur</option>
            <option value="">Peddavegi</option>
            <option value="">Eluru</option>
          </select>

          <label for="Father">Pincode &nbsp;:</label>
          <input id="lastName" type="text"  placeholder="Enter Pincode Name"/>

          <label for="Father">Father Name &nbsp;:</label>
          <input id="lastName" type="text"  placeholder="Enter Father Name"/>

          <label for="Father">Father Education &nbsp;:</label>
          <input id="lastName" type="text"  placeholder="Enter Father Education" />

          <label for="job"> Father Occupation&nbsp;:</label>
          <input id="job" type="text"   placeholder="Enter Father Occupation"/>

          <label>Mother Name &nbsp;:</label>
          <input id="lastName" type="text"  placeholder="Enter Mother Name"/>

          <label for="Father">Mother Education &nbsp;:</label>
          <input id="lastName" type="text"   placeholder="Enter Mother Education"/>

          <label for="job"> Mother Occupation&nbsp;:</label>
          <input id="job" type="text"   placeholder="Enter Mother Occupation"/>

          <label for="age"> Marital status&nbsp;:<span style={{color:"red"}}>*</span></label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">Married</option>
            <option value="">Unmarried</option>
          </select>

          <label for="">Spouse Name&nbsp;:<span style={{color:"red"}}>*</span></label>
          <input type="text"   placeholder="Enter Spouse Name"/>

          <label for="Father"> Spouse Education &nbsp;:<span style={{color:"red"}}>*</span></label>
          <input id="lastName" type="text"  placeholder="Enter Spouse Education" />

          <label for=""> Spouse Occupation&nbsp;:<span style={{color:"red"}}>*</span></label>
          <input type="text"  placeholder="Enter Spouse Occupation"/>

          <label for="">Children-1 Name&nbsp;:</label>
          <input type="text"  placeholder="Enter Children Name"/>

          <label for="">Children-1 Education&nbsp;:</label>
          <input type="text"   placeholder="Enter Children Education"/>

          <label for="">School Name&nbsp;:</label>
          <input type="text"   placeholder="Enter School Name"/>

          <label for="">School Fee&nbsp;:</label>
          <input type="text"  placeholder="Enter School Fee" />

          <label for="">Children-2 Name&nbsp;:</label>
          <input type="text"  placeholder="Enter Children Name"/>

          <label for="">Children-2 Education&nbsp;:</label>
          <input type="text"   placeholder="Enter Children Education"/>

          <label for="">School Name&nbsp;:</label>
          <input type="text"   placeholder="Enter School Name"/>

          <label for="">School Fee&nbsp;:</label>
          <input type="text"  placeholder="Enter School Fee" />

          <label for="" style={{borderRadius: "5px"}}> Vehicle&nbsp;:<span style={{color:"red",}}>*</span></label>
          <select name="" id="">
            <option value="">--Select Any Option--</option>
            <option value="">2 Wheeler</option>
            <option value="">4 Wheeler</option>
          </select>

          <label for="">Make&nbsp;:</label>
          <input type="text"   placeholder="Enter Make"/>

          <label for="">Model&nbsp;:</label>
          <input type="text"   placeholder="Enter Model"/>

          <label for="">Reference-1&nbsp;:</label>
          <input type="text"  placeholder="Enter Name " />
          <label></label>
          <input type="text"  placeholder="Enter E-Mail" />
          <label></label>
          <input type="text"  placeholder="Enter Phone Number" />

          <label for="">Reference-2&nbsp;:</label>
          <input type="text"  placeholder="Enter Name" />
          <label></label>
          <input type="text"  placeholder="Enter E-Mail" />
          <label></label>
          <input type="text"  placeholder="Enter Phone Number" />
          <button onClick={() => navigate("/submit")} style={{borderRadius: "5px", marginLeft:"90%"}}>Save & Next</button>
        </form>
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
            <a href="https://www.careerbridgeit.in/"  style={{color:"violet"}}>
              Career Bridge IT Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S5;
