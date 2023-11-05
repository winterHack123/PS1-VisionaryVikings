import React from "react";

export default function CompanyDetails() {
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1498d2e8" }}>Company Details</h2>
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
        <div
          className="my-3 card-body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="container"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label htmlFor="companyName" className="form-label mx-2">
                Company Name:
              </label>
              <input
                type="text"
                id="companyName"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label htmlFor="jobRole" className="form-label mx-2">
                Job Role:
              </label>
              <input
                type="text"
                id="jobRole"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label htmlFor="ctc" className="form-label mx-2">
                CTC:
              </label>
              <input
                type="text"
                id="ctc"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label htmlFor="interviewMode" className="form-label mx-2">
                Interview Mode:
              </label>
              <select
                id="interviewMode"
                name="interview-mode"
                className="mx-2 my-3 rounded"
                style={{ border: "none", width: "100px" }}
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
