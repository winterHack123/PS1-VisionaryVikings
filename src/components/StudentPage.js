import React, { useState } from "react";

function StudentPage(props) {
  const [formData, setFormData] = useState({
    collegeRollNo: "",
    sitInCampusPlacement: "Yes",
    fullName: "",
    email: "",
    address: "",
    gender: "Male",
    yearOfPassing: "",
    degree: "",
    specialization: "",
    personalEmail: "",
    contactNumber: "",
    alternateContactNumber: "",
    fatherName: "",
    fatherMobileNumber: "",
    currentCGPA: "",
    tenthPercentage: "",
    twelthPercentage: "",
    jeeMainsRank: "",
    activeBacklogs: "",
    resumeLink: "",
    achievements: "",
  });

  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1498d2e8" }}>Mohana Mounika</h2>
      <div
        className="container my-3 rounded"
        style={{
          backgroundColor: "#8fb4ea",
          display: "flex",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
          height: "500px",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateZ(10px)",
        }}
      >
        <form>
          <div className="row">
            <div className="col-6">
              <label htmlFor="" className="form-label mx-2" name="">
                Name:
              </label>
              <input
                type="text"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
                disabled
              />
              <br />

              <label htmlFor="" className="form-label mx-2" name="">
                RollNo.:
              </label>
              <input
                type="text"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
                disabled
              />
              <br />
              <label htmlFor="dropdown">Department:</label>
              <select
                id="dropdown"
                name="department"
                className="mx-2 rounded"
                style={{ border: "none" }}
                disabled
              >
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CVE">CVE</option>
                <option value="MCE">MCE</option>
              </select>
              <br />

              <label
                htmlFor="exampleInputEmail1"
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

              <label htmlFor="dropdown">Designation:</label>
              <select
                id="dropdown"
                name="designation"
                className="mx-2 rounded"
                style={{ border: "none" }}
                disabled
              >
                <option value="student">student</option>
                <option value="co-ordinator">co-ordinator</option>
              </select>
              <br />

              <div className="my-3">
                <label htmlFor="formFile" className="form-label">
                  Upload Resume:
                </label>
                <input className="mx-2 rounded" type="file" id="formFile" />
              </div>
            </div>
            <br />
            <div className="col-6">
              <label htmlFor="" className="form-label mx-2" name="">
                Tenth Percentage:
              </label>
              <input
                type="text"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
              <br />

              <label htmlFor="" className="form-label mx-2" name="">
                Twelth Percentage:
              </label>
              <input
                type="text"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
              <br />
              <label htmlFor="dropdown">Gender:</label>
              <select
                id="dropdown"
                name="gender"
                className="mx-2 rounded"
                style={{ border: "none" }}
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <br />

              <label htmlFor="" className="form-label mx-2" name="">
                JeeMains Rank:
              </label>
              <input
                type="number"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
              <br />

              <label htmlFor="dropdown">Degree:</label>
              <select
                id="dropdown"
                name="degree"
                className="mx-2 rounded"
                style={{ border: "none" }}
                disabled
              >
                <option value="btech">Btech</option>
                <option value="metch">Mtech</option>
              </select>
              <br />

              <label htmlFor="" className="form-label mx-2" name="">
                Achievements:
              </label>
              <input
                type="text"
                className="rounded my-2"
                style={{ border: "none", width: "250px" }}
              />
              <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentPage;
