import React from "react";

export const About = (props) => {
  return (
    <div id="about">
    <div className="about-main">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h5>OUR WORKS</h5><br></br><br></br>
                  <h2>See All Your Account & Add Investments in one place</h2>
                  <p>{props.data ? props.data.paragraph : "loading..."}</p> <br></br>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                {" "}
                <img src="images/artami_preview.gif" className="img-responsive" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
