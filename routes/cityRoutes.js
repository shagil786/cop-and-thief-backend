const express = require("express");
const router = express.Router();
const cities = require("../controllers/cities");

router.get("/", async (req, res) => {
  try {
    res.json({
      message: "Cities Data Fetched",
      cities: cities,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
