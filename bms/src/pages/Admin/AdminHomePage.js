// import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
// import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
const AdminHomePage = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  // Get Blood Group Data
  const getBloodGroupData = async () => {
    try {
      const response = await API.get("/analytics/bloodGroups-data");
      if (response.data?.success) {
        setData(response.data.bloodGroupData);
      } else {
        throw new Error("Failed to fetch blood group data");
      }
    } catch (error) {
      console.log("Error fetching blood group data:", error);
    }
  };

  // Get Recent Blood Records
  const getBloodRecords = async () => {
    try {
      const response = await API.get("inventory/get-recent-inventory");
      if (response.data?.success) {
        setInventoryData(response.data.inventory);
      } else {
        throw new Error("Failed to fetch recent blood records");
      }
    } catch (error) {
      console.log("Error fetching recent blood records:", error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
    getBloodRecords();
  }, []);
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="cardBloodGroups">
        <div className="d-flex flex-row flex-wrap">
          {data.map((record, i) => (
            <div
              className="card m-2 p-1"
              key={i}
              style={{ width: "18rem", backgroundColor: colors[i] }}
            >
              <div className="card-body">
                <h1 className="card-title bg-light text-dark text-center mb-3">
                  {record.bloodGroup}
                </h1>
                <p className="card-text">
                  totalIn: <b>{record.totalIn} (ML)</b>
                </p>
                <p className="card-text">
                  totalOut: <b>{record.totalOut} (ML)</b>
                </p>
              </div>
              <div className="card-footer text-light bg-dark text-center">
                Total Available: <b>{record.availableBlood} (ML)</b>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            welcome Admin <i className="text-success">{user?.name}</i>
          </h1>

          <h1>Blood Management System</h1>
          <p>
            A blood bank is a facility where blood collected through blood
            donation is kept and maintained for future use in blood
            transfusions. A blood bank is a term used to refer to that portion
            of the hospital where the blood samples are stored, and appropriate
            Blood testing is done to reduce the risk of transfusion-related mis
            happenings.
            <br />
            However, it may also refer to a collection facility that some
            hospitals have. The blood banking process includes several steps
            like collecting blood followed by processing the collected blood,
            testing, separating, and storing the blood.
          </p>
        </div>
      </div> */}
    </Layout>
  );
};

export default AdminHomePage;
