import React from "react";

export default function FacultySignIn() {
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1498d2e8" }}>Faculty Sign-in Page</h2>
      <div
        className="container my-5 rounded"
        style={{
          backgroundColor: "#6e9ee5",
          width: "700px",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateZ(10px)",
        }}
      >
        <form>
          <div className="mb-3 my-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2"
              name="gridRadios"
            >
              Email:
            </label>
            <input
              type="email"
              aria-describedby="emailHelp"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
            <br />
            <label for="exampleInputPassword1" className="form-label m-2">
              Password:
            </label>
            <input
              type="password"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
          <p>
            Not registered?
            <a href="FacultySignUp" className="mx-2">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
