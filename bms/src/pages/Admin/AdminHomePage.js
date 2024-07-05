import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHomePage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHomePage;
