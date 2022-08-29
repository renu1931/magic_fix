import React from "react";

export default function Footer() {
  return (
    <div>
      {/*footer start */}

      <div
        className="container-fluid pt-5 "
        style={{ backgroundColor: "rgb(245, 79, 176)" }}
      >
        <div
          className="row pt-5"
          id="footer-row"
          style={{
            tectAlign: "center",
            paddingLeft: "5rem",
            marginRight: "5rem",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="col-sm-3 "
            style={{ borderBottom: "2px solid white" }}
          >
            <h5
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "23px",
              }}
            >
              Magic Fix
            </h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              India's No.1 Matrimony
            </p>
          </div>

          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "23px",
                paddingTop: "15px",
              }}
            >
              Phone No.
            </h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              <i className="fa-solid fa-phone"></i> (+91)9354311177
            </p>
          </div>
          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "23px",
                paddingTop: "15px",
              }}
            >
              Email
            </h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              <i className="fa-solid fa-envelope"></i> jangsher.gill@gmail.com
            </p>
          </div>
          <div className="col-sm-3" style={{ borderBottom: "2px solid white" }}>
            <h5
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "23px",
                paddingTop: "15px",
              }}
            >
              Address
            </h5>
            <p
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Magic Fix, Haryana, India
            </p>
          </div>

          <div className="col-sm-12">
            <h6
              style={{
                color: "white",
                marginTop: "6rem",
                textAlign: "center",
                marginBottom: "1rem",
                fontWeight: "600",
              }}
            >
              Magic Fix © 2022. All Right Reserved, Designed By Gill Telecom
              Service.
            </h6>
          </div>
        </div>
      </div>
      {/*footer complete */}
    </div>
  );
}
