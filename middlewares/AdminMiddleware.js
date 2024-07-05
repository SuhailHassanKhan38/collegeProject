// const JWT = require("jsonwebtoken");
// const UserModel = require("moongose/models/user_model");

const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    // const user = await serModel.findById(req.body.userId);
    const user = await userModel.findById(req.body.userId);

    // Admin Validation

    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Authorization Failed ",
        error,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Authorization failed,Admin API",
      error,
    });
  }
};
