import React from "react";
import logo from "../../src/images/logo1.png";
import logo2 from "../../src/images/lalat.png";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div className="container my-5" style={{ textAlign: "center" }}>
        <img src={logo} alt="Logo" />
        <h1 className="my-5" style={{ color: "#1498d2e8" }}>
          Welcome to Training & Placement Cell
        </h1>
        <div className="row">
          <div className="col-3 my-5">
            <div className="container">
              <img
                src={logo2}
                alt="logo"
                className="my-3"
                style={{ color: "#1498d2e8" }}
              />
              <br />
              <b>Lalat Indu Guru</b>
              <br />
              <b>TNP Head</b>
            </div>
          </div>
          <div
            className="col-9 container my-5"
            style={{
              width: "800px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",

              transform: "translateZ(10px)",
            }}
          >
            <p className="container my-5">
              Welcome to the web interface of Training and Placement (T&P) cell
              of National Institute of Technology Goa (NIT Goa). It is an
              institute of national importance established by Ministry of Human
              Resources Development (MHRD), Government of India in 2010. The
              training and placement cell is endowed with the responsibility to
              cater to the needs of training and placement of its elite
              students. It helps the institute in inviting companies for campus
              recruitment, organising pre-placement talks, interviews and
              corporate interaction. This interface serves as a guide for the
              companies to make them familiar with the facts and process,
              pertaining to recruitment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// display: "flex",
// justifyContent: "center",
// alignItems: "center",
