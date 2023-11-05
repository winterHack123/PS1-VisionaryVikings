import React from "react";

export default function Companies(props) {
  return (
    <div className="container mx-5 my-5 row">
      <div
        className="card my-3 mx-3 col-4"
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <div className="card-body">
          <h5 className="my-3" style={{ textAlign: "center" }}>
            Google
          </h5>
          <div className="container" style={{ textAlign: "center" }}>
            <p>Job Role: SDE</p>
            <p>CTC: 15LPA</p>
            <p>Interview Mode: online</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div
        className="card my-3 mx-3 col-4"
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <div className="card-body">
          <h5 className="my-3" style={{ textAlign: "center" }}>
            Microsoft
          </h5>
          <div className="container" style={{ textAlign: "center" }}>
            <p>Job Role: SDE</p>
            <p>CTC: 20LPA</p>
            <p>Interview Mode: online</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div
        className="card my-3 mx-3 col-4"
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <div className="card-body">
          <h5 className="my-3" style={{ textAlign: "center" }}>
            TCS
          </h5>
          <div className="container" style={{ textAlign: "center" }}>
            <p>Job Role: SDE</p>
            <p>CTC: 6LPA</p>
            <p>Interview Mode: online</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div
        className="card my-3 mx-3 col-4"
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <div className="card-body">
          <h5 className="my-3" style={{ textAlign: "center" }}>
            BioUrja
          </h5>
          <div className="container" style={{ textAlign: "center" }}>
            <p>Job Role: SDE</p>
            <p>CTC: 12LPA</p>
            <p>Interview Mode: online</p>
            <br />
            <button type="submit" className="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
