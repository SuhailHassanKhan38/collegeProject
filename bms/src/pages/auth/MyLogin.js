import React from "react";
import bmsPic2 from "../../AllImages/bmsPic2.jpg";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

export default function MyLogin() {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{error}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 g-0 form-banner">
            <img src={bmsPic2} alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              checkbox={false}
              formTitle="Login Page"
              submitBtn="Login"
              formType="login"
            />
          </div>
        </div>
      )}
    </>
  );
}
