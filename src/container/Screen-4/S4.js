import React from "react";
import "./S4.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import logo6 from "./lak.jpg";
import logo7 from "./start-up-funding.png";
import logo8 from "./poli.jpg";
import logo9 from "./suit.jpg";
import logo10 from "./nvrao.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "../Screen-3/nav";
const S4 = () => {
  let navigate = useNavigate();
  const postyouridea = () => {
    let path = `/application`;
    navigate("/application");
  };
  return (
    <>
      <div class="S4">
        <div class="header">
          <div class="logo" style={{ marginLeft: "24px" }}>
            <img
              src={logo1}
              style={{
                width: "100px",
                height: "13vh",
                borderRadius: "50%",
                marginTop: "-11px",
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
        <Nav />
        <h5 class="aboutus" style={{ marginTop: "-70px" }}>
          <u>
            <center> Fund Your Idea</center>
          </u>
        </h5>
        <div
          class="container  p-2 mb-4 bg-white rounded clever "
          style={{ marginTop: "30px" }}
        >
          <div class="row">
            <div class="col-md-6">
              <div class="shadow-lg p-2 mb-5 bg-white rounded">
                <img
                  src={logo7}
                  alt=""
                  style={{ width: "100%", height: "30vh" }}
                />
              </div>
            </div>
            <div class="col-md-6">
              <p>
                Self-financing or personal investment is the best way of
                financing used by several business start-ups. Even when you take
                a loan or ask a venture capitalist or government entity to
                provide funding for your start-up, they still have this
                question; how much capital you shall be investing in your
                start-up? Investing your own savings is the best option for
                first-time entrepreneurs. In the later stages of business, you
                can easily opt for business loans and lenders shall not have a
                reason to deny it, as they will consider the stability of
                business, as it will be low-risk factor for them
              </p>
            </div>
          </div>
        </div>
        <h1 class="aboutus" style={{ marginTop: "-190px" }}>
          <center>
            <u> committee</u>
          </center>
        </h1>
        <div class="cards">
          <div class="row  shadow p-5 mb-2 bg-white rounded">
            <div class="col-md-3">
              <div class="card">
                <img src={logo6} style={{ width: "100%", height: "40vh" }} />
                <div class="matter">
                  <h5>JD Lakshmi Narayana, IAS</h5>
                  <p>
                    Vasagiri Venkata Lakshminarayana popularly known as JD
                    Lakshmi Narayana is an Indian retired police officer from Andhra Pradesh. He served as the Additional
                    Director General of Police in Mumbai, Maharashtra.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={logo8} style={{ width: "100%", height: "40vh" }} />
                <div class="matter">
                  <h5>A.V. Ranganath, IPS</h5>
                  <p>
                    A V Ranganath, IPS, who has served as the Joint Commissioner
                    of Hyderabad Police (Traffic), has been appointed as the new
                    Mr. Ranganath will be taking over IPS officer Dr. Tarun
                    Joshi,transferred to the DGP Telangana.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={logo9} style={{ width: "100%", height: "40vh" }} />
                <div class="matter">
                  <h5>K.N. Kumar, IAS</h5>
                  <p>
                    Meghalaya fisheries and community and rural development
                    principal secretary KN Kumar has been selected for the
                    excellent/exceptional work for good governance.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={logo10} style={{ width: "100%", height: "40vh" }} />
                <div class="matter">
                  <h5>N. Venkateswara Rao</h5>
                  <p>
                  N. Venkateswara Rao, is working as  Managing Director at METROCHEM API PVT LTD in India. He has his expertise on various innovative Pharmaceutical Sciences experience in research, evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <button
            type="button"
            style={{ marginTop: "25px",height:"5vh",marginBottom:"80px" }}
            class="btn btn-success btn-lg"
            onClick={() => navigate("/application")}
          >
            Post Your Idea
          </button>
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
            <div class="credits">
              Designed by{" "}
              <a href="https://www.careerbridgeit.in/">
                Career Bridge IT Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S4;
