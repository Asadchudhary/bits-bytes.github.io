import React from "react";
import Common from "./Common";
import web from "../src/Image/about.svg";
import about from "../src/Image/Acover.jpg";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="col-10 mx-auto AboutCoverP">
        {/* <img src="..." class="img-fluid" alt="..."></img> */}
        <img src={about} alt="cover" className="img-fluid AboutCover" />
        <p>
          <strong>Founded in 1989,</strong> ScienceSoft is a provider of
          <strong className="blueColor"> IT consulting</strong> and
          <strong className="blueColor"> software development services</strong>.
          Having started as a small AI product company, we switched to IT
          services in 2002 and ever since we have helped non-IT organizations
          and software product companies improve business performance and
          quickly win new customers.
        </p>
      </div>
      <Common
        name="We exist to unlock creativity"
        mission="Our company strives to support improvements in education and make a positive difference in students lives by providing software solutions that help students learn to think."
        btnname="Contact Us"
        btnvisit="/contact"
        imgsrc={web}
      />

      <div className="col-10 mx-auto AboutPage container-fluid">
        <div className="Aboutheading">
          <h1>ScienceSoft in Numbers</h1>
        </div>
        <div className="Aboutcontainer">
          <div className="box1 box">
            <h1>33</h1>
            <p>year in IT</p>
          </div>
          <div className="box2 box">
            <h1> {">"} 700</h1>
            <p>IT professionals</p>
          </div>
          <div className="box3 box">
            <h1> {">"} 3,300</h1>
            <p>success stories</p>
          </div>
          <div className="box4 box">
            <h1> {">"} 30</h1>
            <p>industries covered</p>
          </div>
        </div>
        <h1 className="Aboutheadings">Our Geography</h1>
        <p>
          <strong>Headquartered in the US and operating internationally</strong>
          , our team drives digital transformation for businesses globally. We
          ensure on-site presence to deliver services to our
          <strong> major target markets</strong> in:
        </p>
        <div className="MainGeography  col-10">
          <div className="Geography">
            <div className="gbox">
              <h1>North America</h1>
              <ul>
                <li>
                  <span>Office locations:USA</span>
                </li>
                <li>
                  <span>Number of customers:~350</span>
                </li>
              </ul>
            </div>
            <div className="gbox">
              <h1>Europe and the UK 700</h1>
              <ul>
                <li>
                  <span>Office locations:Finland, Latvia </span>
                </li>
                <li>
                  <span>Number of customers:~360</span>
                </li>
              </ul>
            </div>
            <div className=" gbox">
              <h1>The Gulf</h1>
              <ul>
                <li>
                  <span>Office locations:UAE</span>
                </li>
                <li>
                  <span>Number of customers:~30 </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default About;
