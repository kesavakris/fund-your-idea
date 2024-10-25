import React, { useState } from "react";
import "./agri.css";
import logo1 from "./green-eco-innovations-concept-vector-19626105.jpg";
import logo2 from "./skd.jpeg";
import logo3 from "./svrimage.jpg";
import logo4 from "./alluimage.jpg";
import logo5 from "./chiranjeevi.jpg";
import K1 from "./rythu.jpg";
import K4 from "./palekar.jpg";
import K5 from "./farm.jpg";
import K2 from "./k2 (2).jpg";
import K3 from "./k3.jpg";
import Video1 from "./Video-1.mp4";
import Video2 from "./Video-2.mp4";
import Nav from "../nav";

import { Carousel, CarouselItem } from "react-bootstrap";
const Agri = () => {
  const [video, setVideo] = useState({ image1: false, image2: false });
  const handleImage = (data) => {
    console.log("data",data)
    const dummyData={...video}
    Object.assign(dummyData, { [data]: !dummyData[data] });
    setVideo({})
    setVideo(dummyData);
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
        <Nav />
        <h1 class="aboutus" style={{ marginTop: "-70px" }}>
          <u>
            <center>Best Agriculture Practices</center>
          </u>
        </h1>
        <div class="cards container">
          <div class="row ">
            <div class="col-md-4">
              <div class="card" style={{ height: "430px" }}>
                <h5 style={{ textAlign: "center", fontSize: "20px" }}>
                  Video Gallery
                </h5>
                {/* <Carousel>
                  <Carousel.Item>
                    <img
                      src={K1}
                      alt=""
                      style={{ width: "100%", height: "16vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={K4}
                      alt=""
                      style={{ width: "100%", height: "16vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={K5}
                      alt=""
                      style={{ width: "100%", height: "16vh" }}
                    />
                  </Carousel.Item>
                </Carousel> */}
                {/* <a href={Video1}> */}
                {!video.image1 ? (
                  <img
                    src={K5}
                    style={{ height: "23vh", width: "100%" }}
                    onClick={() => handleImage("image1")}
                  />
                ) : (
                  <video width="400" height="200"  onClick={() => handleImage("image2")} controls>
                    <source src={Video1} />
                  </video>
                )}

                {/* </a> */}
                <div class="matter">
                  {!video.image2 ? (
                    <img
                      src={K4}
                      style={{ height: "23vh", width: "100%" }}
                      onClick={() => handleImage("image2")}
                    />
                  ) : (
                    <div  onClick={() => handleImage("image1")}>
                    <video width="400" height="200"  controls>
                      <source src={Video2}   />
                    </video>
                    </div>
                  )}

                  {/* <Carousel>
                    <CarouselItem>
                      <video width="400" height="240" controls>
                        <source src={Video1} />
                      </video>
                    </CarouselItem>
                    <CarouselItem>
                      <video width="400" height="240" controls>
                        <source src={Video2} />
                      </video>
                    </CarouselItem>
                  </Carousel> */}
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style={{ height: "430px" }}>
                <h5 style={{ textAlign: "center", fontSize: "20px" }}>Forum</h5>
                <img
                  src={K2}
                  alt=""
                  style={{ width: "100%", height: "30vh" }}
                />
                <div class="matter">
                  <p style={{ padding: "10px" }}>
                    Colored wheat (Purple, Black) has been developed by NABI,
                    Mohali by the most accepted breeding method. Color in
                    biofortified wheat is due to plant pigment anthocyanins,
                    that act as antioxidants and protect the body from harmful
                    free radicles. In the current season, NABI will sell breeder
                    seeds of this wheat as per following rates:
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card" style={{ height: "430px" }}>
                <h5 style={{ textAlign: "center", fontSize: "20px" }}>
                  Social Acceptability
                </h5>
                <img
                  src={K3}
                  alt=""
                  style={{ width: "100%", height: "35vh" }}
                />
                <div class="matter">
                  <p style={{ padding: "10px" }}>
                    Social acceptance can be, described as how well the goals
                    and actions respond to the values and appreciations.
                  </p>
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
            <a
              href="https://www.careerbridgeit.in/"
              style={{ color: "violet" }}
            >
              Career Bridge IT Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agri;
