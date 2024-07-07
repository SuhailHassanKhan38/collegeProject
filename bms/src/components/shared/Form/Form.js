import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HandleLogin,
  HandleRegister,
} from "../../../services/authenticationService";
import InputType from "./inputType";

// import { useDispatch } from "react-redux";
// import API from "../../../services/API";
// import { getCurrentUser } from "../../../redux/features/reduxAuth/authActions";
export default function Form({ checkbox, formType, submitBtn, formTitle }) {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  // const [organisation, setOrganisation] = useState("");
  // const [hospital, setHospital] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      HandleLogin(e, email, password, role);
      // const { data } = API.get("/auth/current-user");
      // if (data?.success) {
      //   dispatch(getCurrentUser(data.user)); // Assuming `data.user` contains user information
      // }
    } else if (formType === "register") {
      HandleRegister(e, role, name, email, password, phone, address);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {checkbox && (
          <div className="d-flex mb-3">
            <div className="form-check ms-2">
              <input
                type="radio"
                name="role"
                className="form-check-input"
                id="donarRadio"
                value="donar"
                checked={role === "donar"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="donarRadio" className="form-check-label">
                Donar
              </label>
            </div>

            {/* <div className="form-check ms-2">
              <input
                type="radio"
                name="role"
                className="form-check-input"
                id="adminRadio"
                value="admin"
                checked={role === "admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="adminRadio" className="form-check-label">
                Admin
              </label>
            </div> */}

            <div className="form-check ms-2">
              <input
                type="radio"
                name="role"
                className="form-check-input"
                id="hospitalRadio"
                value="hospital"
                checked={role === "hospital"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="hospitalRadio" className="form-check-label">
                Hospital
              </label>
            </div>

            <div className="form-check ms-2">
              <input
                type="radio"
                name="role"
                className="form-check-input"
                id="organisationRadio"
                value="organisation"
                checked={role === "organisation"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="organisationRadio" className="form-check-label">
                Organisation
              </label>
            </div>
          </div>
        )}

        {formType === "login" && (
          <>
            <InputType
              labelText={"Email"}
              labelFor={"forEMail"}
              inputType={"email"}
              name={"email"}
              value={email}
              placeHolder="Enter your email"
              onchange={(e) => setEmail(e.target.value)}
            />

            <InputType
              labelText={"Password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              placeHolder="Enter your password"
              onchange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        {formType === "register" && (
          <>
            {(role === "admin" || role === "donar") && (
              <InputType
                labelText={"Name"}
                labelFor={"forName"}
                inputType={"text"}
                name={"name"}
                value={name}
                placeHolder="Enter your name"
                onchange={(e) => setName(e.target.value)}
              />
            )}

            {role === "hospital" && (
              <InputType
                labelText={"Hospital Name"}
                labelFor={"forHospital"}
                inputType={"text"}
                name={"name"}
                value={name}
                placeHolder="Enter your  hospital name"
                onchange={(e) => setName(e.target.value)}
              />
            )}

            {role === "organisation" && (
              <InputType
                labelText={"Organisation Name"}
                labelFor={"forOrganisation"}
                inputType={"text"}
                name={"name"}
                value={name}
                placeHolder="Enter your Organisation name"
                onchange={(e) => setName(e.target.value)}
              />
            )}

            <InputType
              labelText={"Email"}
              labelFor={"forEMail"}
              inputType={"email"}
              name={"email"}
              value={email}
              placeHolder="Enter your email"
              onchange={(e) => setEmail(e.target.value)}
            />

            <InputType
              labelText={"Password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              placeHolder="Enter your password"
              onchange={(e) => setPassword(e.target.value)}
            />

            <InputType
              labelText={"Phone Number"}
              labelFor={"forPhone"}
              inputType={"text"}
              name={"phone"}
              placeHolder="Enter your phone number"
              value={phone}
              onchange={(e) => setPhone(e.target.value)}
            />

            <InputType
              labelText={"Address"}
              labelFor={"forAddress"}
              inputType={"text"}
              name={"address"}
              value={address}
              placeHolder="Enter your address"
              onchange={(e) => setAddress(e.target.value)}
            />
          </>
        )}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registered yet? &nbsp;
              <Link to="/register">Sign Up&nbsp;</Link>
            </p>
          ) : (
            <p>
              Already have an account? &nbsp;
              <Link to="/login">Sign In&nbsp;</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
}
