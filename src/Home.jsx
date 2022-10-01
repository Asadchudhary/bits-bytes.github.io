import React from "react";
import Common from "./Common";
import web from "../src/Image/frontlayout.svg";
const Home = () => {
  return (
    <>
      <div className="homeDiv">
        <Common
          name="Grow Your Skills with"
          mission="We are here to help students learn and develop strong thinking and organizational skills"
          btnname="Get Started"
          btnvisit="/service"
          imgsrc={web}
        />
      </div>
    </>
  );
};

export default Home;
