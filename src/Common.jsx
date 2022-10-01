import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-10 col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-2 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name">
                      <br />
                      Bits & Bytes
                    </strong>
                  </h1>
                  <h2 className="my-3">{props.mission}</h2>
                  <div className="my-3">
                    <NavLink
                      to={props.btnvisit}
                      className="btn btn-outline-primary rounded-pill"
                    >
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-5 my-4 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated image_styling"
                    alt="Home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
