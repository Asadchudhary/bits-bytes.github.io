import React from "react";
import "./Footer.css";
import "./Responsive.css";
const HomeFooter = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="footerhome">
        <p>
          copyright &copy; {date} <a href="#">Bits&Bytes</a> All Rights Reserved
          | Terms and Conditions
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
