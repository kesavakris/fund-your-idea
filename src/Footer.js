import React from "react";
import { BsTwitter } from "react-icons";
import {} from "react-icons"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-links">
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
        <div className="copyright">
          &copy; Copyright@2023 <strong>Fund Your Idea</strong>. All Rights
          Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.careerbridgeit.in/">Career Bridge IT Services</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
