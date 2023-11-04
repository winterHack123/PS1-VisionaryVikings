import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#2d7fc7" }}>
      <div className="row mx-2 ">
        <div className="col-3 my-3">
          <b>Contact Us</b>
          <br />
          <a>Ponda,Goa</a>
          <br />
          <a>+91 98765432100</a>
          <br />
          <a>support@FarmiGO.ac.in</a>
        </div>
        <div className="col-3 my-3">
          <b>Information </b>
          <br />
          <a>Privacy Policy</a>
          <br />
          <a>Terms & Conditions</a>
          <br />
          <a>Blogs</a>
        </div>
        <div className="col-3 my-3">
          <b>Account</b>
          <br />
          <a>About Us</a>
          <br />
          <a>Faq</a>
          <br />
          <a>Contact</a>
        </div>
        <div className="col-3 my-3">
          <b>Quick Links</b>
          <br />
          <a>Our Work</a>
          <br />
          <a>Our Growth</a>
          <br />
          <a>Sponsor</a>
        </div>
      </div>
      <div className="row mx-2 my-2">
        <a>
          <i className="fa fa-instagram mx-2 my-2"></i>
          <i className="fa fa-linkedin mx-2 my-2"></i>
          <i className="fa fa-github mx-2 my-2"></i>
          <i className="fa fa-youtube mx-2 my-2"></i>
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Made with dedication</p>
        <p>@2024</p>
      </div>
    </div>
  );
}
