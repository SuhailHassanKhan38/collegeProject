const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
//  get Blood data
const bloodGroupDetailsController = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);

    const bloodGroupDataPromises = bloodGroups.map(async (bloodGroup) => {
      // Count total [IN] blood Details
      const totalIn = await inventoryModel.aggregate([
        {
          $match: {
            bloodGroup: bloodGroup,
            inventoryType: "in",
            organisation,
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$quantity" },
          },
        },
      ]);

      // Count total [OUT] blood Details
      const totalOut = await inventoryModel.aggregate([
        {
          $match: {
            bloodGroup: bloodGroup,
            inventoryType: "out",
            organisation,
          },
        },
        {
          $group: {
            _id: null,
            total: { $sum: "$quantity" },
          },
        },
      ]);

      // Calculate Total Blood Quantity
      const availableBlood =
        (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

      // Return Data for this blood group
      return {
        bloodGroup,
        totalIn: totalIn[0]?.total || 0,
        totalOut: totalOut[0]?.total || 0,
        availableBlood,
      };
    });

    // Wait for all promises to resolve
    const bloodGroupData = await Promise.all(bloodGroupDataPromises);

    // Returning Response
    return res.status(200).send({
      success: true,
      message: "Blood Group Data Fetched successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in bloodGroup data Analytics API",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsController };
