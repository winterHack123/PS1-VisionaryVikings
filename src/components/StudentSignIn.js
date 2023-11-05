import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentSignIn() {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("../StudentPage");
  };
  return (
    <div className="container my-3" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#1498d2e8" }}>Student Sign-in Page</h2>
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
          <div className="mb-3">
            <fieldset className="col form-check">
              <label htmlFor="" className="form-label mx-2 my-2">
                student
              </label>
              <input
                type="radio"
                className="form-label mx-2 my-2"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />

              <label htmlFor="" className="mx-2 my-2">
                admin
              </label>
              <input
                type="radio"
                className="form-label mx-2 my-2"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
            </fieldset>

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
            <label htmlFor="exampleInputPassword1" className="form-label m-2">
              Password:
            </label>
            <input
              type="password"
              className="rounded my-2"
              style={{ border: "none", width: "250px" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleOnclick}
          >
            Login
          </button>
          <p>
            Not registered?
            <a href="StudentSignUp" className="mx-2">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
