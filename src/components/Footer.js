import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#2d7fc7" }}>
      <div className="row mx-2 ">
        <div className="col-3 my-3">
          <b>Contact Us</b>
          <br />
          <p>Ponda,Goa</p>
          <br />
          <p>+91 98765432100</p>
          <br />
          <p>support@tnp.ac.in</p>
        </div>
        <div className="col-3 my-3">
          <b>Information </b>
          <br />
          <p>Privacy Policy</p>
          <br />
          <p>Terms & Conditions</p>
          <br />
          <p>Blogs</p>
        </div>
        <div className="col-3 my-3">
          <b>Account</b>
          <br />
          <p>About Us</p>
          <br />
          <p>Faq</p>
          <br />
          <p>Contact</p>
        </div>
        <div className="col-3 my-3">
          <b>Quick Links</b>
          <br />
          <p>Our Work</p>
          <br />
          <p>Our Growth</p>
          <br />
          <p>Sponsor</p>
        </div>
      </div>
      <div className="row mx-2 my-2">
        <p>
          <i className="fa fa-instagram mx-2 my-2"></i>
          <i className="fa fa-linkedin mx-2 my-2"></i>
          <i className="fa fa-github mx-2 my-2"></i>
          <i className="fa fa-youtube mx-2 my-2"></i>
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>Made with dedication</p>
        <p>@2024</p>
      </div>
    </div>
  );
}
