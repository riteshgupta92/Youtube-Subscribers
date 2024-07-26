const express = require("express");
const mongoose = require("express");
const router = express.Router();
const {
  getAllSubscribers,
  getSubscriberByNames,
  getSubscriberById,
} = require("../controllers/subscribers");

module.exports = router;

router.route("/").get(getAllSubscribers);
router.route("/names").get(getSubscriberByNames);
router.route("/:id").get(getSubscriberById);
