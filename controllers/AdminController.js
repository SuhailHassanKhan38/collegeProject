// const UserModel = require("moongose/models/user_model");
const userModel = require("../models/userModel");

//   Get DonarList ,Admin

const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel.find({ role: "donar" }).sort({
      createdAt: -1,
    });
    ////
    return res.status(200).send({
      success: true,
      TotalCount: donarData.length,
      message: " Admin! DonarList Data Fetched Successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in  DonarList API",
      error,
    });
  }
};

const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel.find({ role: "hospital" }).sort({
      createdAt: -1,
    });
    ////
    return res.status(200).send({
      success: true,
      TotalCount: hospitalData.length,
      message: " Admin! HospitalList Data Fetched Successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in  HospitalList API",
      error,
    });
  }
};

const getOrganisationListController = async (req, res) => {
  try {
    const organisationData = await userModel
      .find({ role: "organisation" })
      .sort({
        createdAt: -1,
      });
    ////
    return res.status(200).send({
      success: true,
      TotalCount: organisationData.length,
      message: " Admin! organisationList Data Fetched Successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in  OrganisationList API",
      error,
    });
  }
};

//  Delete records button

const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: " Donar Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in deleting",
      error,
    });
  }
};

module.exports = {
  getDonarsListController,
  getHospitalListController,
  getOrganisationListController,
  deleteDonarController,
};
