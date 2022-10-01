import React from "react";
import "./Footer.css";
import "./Responsive.scss";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="col-md-12 col-10 mx-auto">
        <div className="footer-content col-md-12 col-10 mx-auto">
          <h3>Bits & Bytes</h3>
          <p>
            Our company strives to support improvements in education and make a
            positive difference in students lives by providing software
            solutions that help students learn to think.
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
          <div className="footer-bottom col-md-12 col-10 mx-auto">
            <p>
              copyright &copy; {date} <a href="#">Bits&Bytes</a>
            </p>
            <div className="footer-menu">
              <ul className="f-menu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer className="col-md-10 col-10 mx-auto bg-light text-center footer_style">
        <p>© {date} Bit & Bytes. All Rights Reserved | Terms and Conditions</p>
      </footer> */}
    </>
  );
};

export default Footer;
