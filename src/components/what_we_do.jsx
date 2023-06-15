import React from "react";

export const WhatWeDo = (props) => {
  return (
    <div id="what_we_do" style={{marginTop: '-600px'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="col-xs-12 col-md-6">
              <img src="images/artwork_bisdev.png" className="img-responsive" alt="" />{" "}
              <img src="images/artwork_hosting.png" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6 m-10" style={{textAlign: 'center',marginTop: 200}}>
              <img src="images/artwork_security.png" className="img-responsive" alt="" />{" "}
              <img src="images/artwork_sosmed.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h5>What We Do</h5><br></br><br></br>
              <h2>Social Media Management</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p> <br></br>
              <div className="row">
                <div className="col-md-2">
                  <img src="icon/ic_instagram.png" className="img-responsive" alt="" />{" "}
                </div>
                <div className="col-md-2">
                  <img src="icon/ic_tiktok.png" className="img-responsive" alt="" />{" "}
                </div>
                <div className="col-md-2">
                  <img src="icon/ic_youtube.png" className="img-responsive" alt="" />{" "}
                </div>
              </div>
              <br></br>
              <div>
                <h5>Learn More</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
