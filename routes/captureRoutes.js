const express = require("express");
const router = express.Router();
const cities = require("../controllers/cities");

const fugitiveCityIndex = Math.floor(Math.random() * cities.length);
const fugitiveCity = cities[fugitiveCityIndex];

router.post("/", async (req, res) => {
  try {
    let { cop1, cop2, cop3 } = req.body;
    let capturedCop = null;

    const captureStatus = [cop1, cop2, cop3].some((cop) => {
      console.log(cop);
      const isWithinRange =
        cop.city === fugitiveCity.name && cop.range >= fugitiveCity.distance;
      if (isWithinRange) {
        capturedCop = cop.name; // Store the name of the capturing cop
      }
      return isWithinRange;
    });

    res.json({
      copName: capturedCop,
      caputreStatus: caputreStatus,
      message: captureStatus ? "Captured" : "Not Captured"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
