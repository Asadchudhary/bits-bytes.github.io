import React, { useState } from "react";
import Footer from "./Footer";
const Contact = () => {
  const [input, setInput] = useState({
    fullname: "",
    phone: "",
    mail: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setInput((preData) => {
      return { ...preData, [name]: value };
    });
  };
  const InputSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${input.fullname}. Phone No. is ${input.phone}, Email is ${input.mail} and my message is ${input.msg}`
    );
    setInput({
      fullname: "",
      phone: "",
      mail: "",
      msg: "",
    });
  };

  return (
    <div>
      <div className="my-1 contact_heading">
        <h1 className="text-center">Contact Us</h1>
        <h5 className="text-center">
          Swing by for a cup of coffee, or leave us a message:
        </h5>
      </div>
      <div className="container contact_us">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={InputSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={input.fullname}
                  onChange={InputEvent}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={input.phone}
                  onChange={InputEvent}
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput4"
                  name="mail"
                  value={input.mail}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Leave Your Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={input.msg}
                  onChange={InputEvent}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
