import React from "react";

export const WhatWeDo = (props) => {
  return (
    // <div id="what_we_do" style={{marginTop: '-400px'}}>
    <div id="what_we_do">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="col-xs-12 col-md-6">
              <img src="images/card_2.png" className="img-responsive" alt="" />{" "}
              <br></br>
              <img src="images/card_3.png" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6 m-10" style={{textAlign: 'center',marginTop: 100}}>
              <img src="images/card_1.png" className="img-responsive" alt="" />{" "}
              <br></br>
              <img src="images/card-4.png" className="img-responsive" alt="" />{" "}
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
