import React from "react";
import CardApi from "./CardApi";
import ServiceCard from "./ServiceCard";
import SoftwareApi from "./SoftwareApi";
import Software from "./Software";
import servicecoverpic from "../src/Image/servicecoverpic.svg";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <div className="my-3 col-10 mx-auto software_cover">
        <h1 className="text-left mb-3">Software Development Services</h1>
        <img src={servicecoverpic} alt="Cover Picture" className="mb-3" />
        <p>
          <strong>Software development services</strong> are aimed at designing,
          engineering, supporting, and evolving various software types. Serving
          <strong> mid & large enterprises</strong> and
          <strong> software product companies</strong> since 1989, Bits & Bytes
          develops quality software for retail, banking, manufacturing,
          healthcare, and other industries.
        </p>
        <h1>What Service Are You Looking For?</h1>
        <p>
          Choose your option and click the button below to jump straight to the
          detailed description of the service you are interested in.
        </p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {CardApi.map((data, index) => {
                return (
                  <ServiceCard
                    key={index}
                    imgsrc={data.imgsrc}
                    title={data.title}
                    discription={data.discription}
                  />
                );
              })}
            </div>
            <div className="row gy-4 mt-4 software_develop">
              <h1>Software We Develop</h1>
              <p className="mt-1">
                Click the icons to be redirected to the dedicated offerings.
              </p>
            </div>
            <div className="row mt-4 gy-4 gx-2">
              {SoftwareApi.map((itemval, index) => {
                return (
                  <Software
                    key={index}
                    imgsrc={itemval.imgsrc}
                    title={itemval.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
