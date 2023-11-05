import React from "react";

export default function NavBar(props) {
  return (
    <div className="text-white">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#052c65",
          color: "#fffff",
        }}
      >
        <div
          className="container-fluid text-white"
          style={{
            backgroundColor: "#052c65",
            color: "white",
          }}
        >
          {/* <a className="navbar-brand text-white" href="/Home">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-white" href="/StudentSignIn">
                  Student Page
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2 text-white" href="/Companies">
                  Companies
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link mx-2 text-white"
                  aria-disabled="true"
                  href="/FacultySignIn"
                >
                  Faculty Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
