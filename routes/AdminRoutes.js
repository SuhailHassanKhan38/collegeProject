const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrganisationListController,
  deleteDonarController,
  deleteHospitalController,
  deleteOrganisationController,
} = require("../controllers/AdminController");
const AdminMiddleware = require("../middlewares/AdminMiddleware");

//  Create Router obj
const router = express.Router();

// Get DonarList
router.get(
  "/donar-list",
  authMiddleware,
  AdminMiddleware,
  getDonarsListController
);

// Get HospitalList
router.get(
  "/hospital-list",
  authMiddleware,
  AdminMiddleware,
  getHospitalListController
);

// Get OrganisationList
router.get(
  "/organisation-list",
  authMiddleware,
  AdminMiddleware,
  getOrganisationListController
);

//  Delete Donar records | Get

router.delete(
  "/delete-donar/:id",
  authMiddleware,
  AdminMiddleware,
  deleteDonarController
);

//  Delete Hospital records | Get

router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  AdminMiddleware,
  deleteHospitalController
);

//  Delete Organisation records | Get

router.delete(
  "/delete-organisation/:id",
  authMiddleware,
  AdminMiddleware,
  deleteOrganisationController
);
module.exports = router;
