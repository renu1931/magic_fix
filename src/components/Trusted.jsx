import React from "react";
import gift_box from "../images/gift_box.png";

export default function Trusted() {
  return (
    <div>
      {/*Trusted section start */}
      <div className="container text-center py-5 my-3">
        <div className="row">
          <div className="col-md-11 m-auto">
            <img src={gift_box} alt="s-icon -pic" id="mmw-logo1" />
            <h3 id="trusted-h3">
              Magic Fix - Trusted by over 35 Million Members
            </h3>
            <p id="trusted-p">
              Magic Fix, one of India&#39;s best known brands and the
              world&#39;s largest matrimonial service was founded with a simple
              objective - to help people find happiness. The company pioneered
              online matrimonials in 1996 and continues to lead the exciting
              matrimony category after more than a decade. By redefining the way
              Indian brides and grooms meet for marriage, Magic Fix has created
              a world-renowned service that has touched over 35 million people
              <span id="trusted-btn">
                Learn More <i className="fa-solid fa-caret-right"></i>
              </span>
            </p>
            <p id="trusted-btn">
              India | USA | Canada | UK | Singapore | Australia | UAE | NRI
              Matrimonials
            </p>
            <button id="trusted-btn1">Trusted by Millions</button>
            <div
              className="d-flex justify-content-around pt-4 pb-3"
              id="trusted-line"
            >
              <p>
                <i className="fa-solid fa-users"></i>
                Best Matches
              </p>
              <p>
                <i className="fa fa-check"></i>
                Verified Profiles
              </p>
              <p>
                <i className="fa-solid fa-lock"></i>
                100% Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Trusted section complete */}
    </div>
  );
}
