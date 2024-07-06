import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";

const OrganisationList = () => {
  const [data, setData] = useState([]);

  // Get Donar Records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/admin/organisation-list");
      if (data?.success) {
        setData(data?.organisationData);
      } else {
        throw new Error("Failed to fetch Organisation List records");
      }
    } catch (error) {
      console.log("Error fetching Organisation List records:", error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  //    Delete record function

  const handleDelete = async (id) => {
    try {
      let answer = prompt(
        "Are you sure want to delete Organisation the record",
        "sure"
      );
      if (!answer) {
        return;
      }
      const { data } = await API.delete(`/admin/delete-organisation/${id}`);

      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        {/* <h2>Organisation Records</h2> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.name || record.organisationName + " (ORG)"}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY")}</td>
                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => handleDelete(record._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  {/* <i className="fa-solid fa-trash" /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OrganisationList;
