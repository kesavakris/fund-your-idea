import React from "react";
import "./S3.css";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log("splitLocation", splitLocation);
  return (
    <div class="menu" style={{height:"58px"}}>
      <ul>
        <li style={{ backgroundColor: `${!splitLocation[2] ? "green" : ""}` }}>
          <a href="#" onClick={() => navigate("/dashboard")}>
            Home
          </a>
        </li>
        <li>
          <a href="#"style={{backgroundColor: `${splitLocation[2] === "about" ? "green" : ""}`,}} onClick={() => navigate("/dashboard/about")}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" style={{backgroundColor: `${splitLocation[2] === "postyouridea" ? "green" : ""}`,}} onClick={() => navigate("/dashboard/postyouridea")}>
            Post Your Idea
          </a>
        </li>
        {/* <li>
          <a href="#" href="#"style={{backgroundColor: `${splitLocation[2] === "news" ? "green" : ""}`,}} onClick={() => navigate("/dashboard/news")}>
            News Feed
          </a>
        </li> */}
        <li>
          <a href="#"style={{backgroundColor: `${splitLocation[2] === "agric" ? "green" : ""}`,}} onClick={() => navigate("/dashboard/agric")}>
            Best Agri Practices
          </a>
          <ul>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Video Gallery</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Forum</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px",}}>Social Acceptability</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"style={{backgroundColor: `${splitLocation[2] === "govt" ? "green" : ""}`}} onClick={() => navigate("/dashboard/govt")}>
            Govt. Schemes
          </a>
          <ul>
          <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Kapu Welfare</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Central Schemes</a>
            </li>
            <li>
              <a style={{textAlign: "left" ,marginLeft:"8px"}}>State Schemes</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>CSR Schemes</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"style={{backgroundColor: `${splitLocation[2] === "corner" ? "green" : ""}`,}} onClick={() => navigate("/dashboard/corner")}>
            Student Corner
          </a>
          <ul>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Notifications</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Funding</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>Opportunities</a>
            </li>
            <li>
              <a style={{textAlign: "left",marginLeft:"8px"}}>GovtSchemes</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            style={{
              backgroundColor: `${
                splitLocation[2] === "contact" ? "green" : ""
              }`,
            }}
            onClick={() => navigate("/dashboard/contact")}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
