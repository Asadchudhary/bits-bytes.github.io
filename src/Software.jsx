import React from "react";
import { NavLink } from "react-router-dom";
const Software = (props) => {
  return (
    <>
      <div className="col-md-4 col-8 d-flex gx-3  ">
        <div className="card  Software_Card">
          <NavLink to="/" className="Navlink">
            <div className="CircleImage">
              <img
                src={props.imgsrc}
                className="card-img-top Software_images"
                alt="Cards"
              />
            </div>
          </NavLink>
          <div className="card-body">
            <h5 className="card-title card_title">{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Software;
