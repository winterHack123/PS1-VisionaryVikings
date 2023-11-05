import React from "react";

export default function FacultyPage() {
  return (
    <div
      className="container my-5"
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1498d2e8" }}>
        Placement Status
      </h2>
      <form>
        <div className="container my-3" style={{ textAlign: "center" }}>
          <div
            className="row container my-5 rounded"
            style={{
              backgroundColor: "#8fb4ea",
              width: "900px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",

              justifyContent: "center",
              alignItems: "center",
              transform: "translateZ(10px)",
            }}
          >
            <div className="col-6">
              <label htmlFor="dropdown1">Department:</label>
              <select
                id="dropdown1"
                name="department"
                className="mx-2 my-3 rounded"
                style={{ border: "none", width: "100px" }}
              >
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CVE">CVE</option>
                <option value="MCE">MCE</option>
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="dropdown2">Tier:</label>
              <select
                id="dropdown2"
                name="tier"
                className="mx-2 my-3 rounded"
                style={{ border: "none", width: "250px" }}
              >
                <option value="tier1">Tier 1</option>
                <option value="tier2">Tier 2</option>
                <option value="tier3">Tier 3</option>
              </select>
            </div>
            <div clasName="list-items">
              <ul></ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
