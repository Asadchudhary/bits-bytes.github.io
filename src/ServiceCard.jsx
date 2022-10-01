import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-10 d-flex  ">
        <div className="card card_body d-flex flex-column">
          <img
            src={props.imgsrc}
            className="card-img-top ImageSize"
            alt="Cards"
          />
          <div className="card-body">
            <h5 className="card-title card_title">{props.title}</h5>
            <p className="card-text card_discription">{props.discription}</p>
            <NavLink to="#" className="card_btn ml-10 ">
              Check Details
              <ArrowForwardIcon className="arrow" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
//➡ <strong className="arrow"></strong>
