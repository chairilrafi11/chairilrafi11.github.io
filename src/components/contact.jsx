import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div>
            <div>
              <div className="section-title">
                <h2>LET'S COLLABORATE</h2>
                <p>
                  Ready to Explore Your Potential Digital Ecosystem?, Connect with Us Today.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name*"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email*"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Phone Number*"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Company*"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Fill Message*"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="row">
          <div className="col-md-4 text-center">
            <p>
              &copy; @2023 Lazcore ID All Righrs reserved.
            </p>
          </div>
          <div className="col-md-4">
            <div className="col-md-3">
              <a href="#what_we_do" className="page-scroll">
                What We Do
              </a>
            </div>
            <div className="col-md-3">
              <a href="#about" className="page-scroll">
                About
              </a>
            </div>
            <div className="col-md-3">
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </div>
            <div className="col-md-3">
              <a href="#contact" className="page-scroll">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-1">
                <img src="icon/ic_instagram.png" className="img-responsive" alt="" />{" "}
              </div>
              <div className="col-md-1">
                <img src="icon/ic_tiktok.png" className="img-responsive" alt="" />{" "}
              </div>
              <div className="col-md-1">
                <img src="icon/ic_youtube.png" className="img-responsive" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
