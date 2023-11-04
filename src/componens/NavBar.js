import React from "react";

export default function NavBar() {
  return (
    <div className="text-white">
      <nav className=" navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid text-white"
          style={{
            backgroundColor: "#052c65",
            color: "#fff !important",
          }}
        >
          <a className="navbar-brand" href="/Home">
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
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/StudentPage">
                  Student Page
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Companies
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link mx-2"
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
