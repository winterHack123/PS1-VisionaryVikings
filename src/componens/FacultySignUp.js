import React from "react";

export default function FacultySignUp() {
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1498d2e8" }}>Faculty Registration Page</h2>
      <div
        className="container my-5 rounded"
        style={{
          backgroundColor: "#8fb4ea",
          width: "700px",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateZ(10px)",
        }}
      >
        <form>
          <div className="mb-3 my-3">
            <label for="" className="form-label mx-2" name="">
              Name:
            </label>
            <input
              type="text"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
            <br />

            <label htmlFor="dropdown">Deparment:</label>
            <select
              id="dropdown"
              name="fruit"
              className="mx-2 rounded"
              style={{ border: "none" }}
            >
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="CVE">CVE</option>
              <option value="MCE">MCE</option>
            </select>
            <br />

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
            <label for="" className="form-label mx-2" name="">
              Status:
            </label>
            <input
              type="text"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
            <br />

            <label htmlFor="dropdown">Designation:</label>
            <input
              type="text"
              className="rounded my-2 mx-2"
              style={{ border: "none", width: "250px" }}
            />
            <br />
            <label for="exampleInputPassword1" className="form-label mx-2">
              Password:
            </label>
            <input
              type="password"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}
