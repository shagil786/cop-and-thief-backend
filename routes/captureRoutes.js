const express = require("express");
const router = express.Router();
const cities = require("../controllers/cities");

const fugitiveCityIndex = Math.floor(Math.random() * cities.length);
const fugitiveCity = cities[fugitiveCityIndex];

router.post("/", async (req, res) => {
  try {
    let { cop1, cop2, cop3 } = req.body;
    const caputreStatus = [cop1, cop2, cop3].some(
      (cop) =>
        cop.city === fugitiveCity.name && cop.range >= fugitiveCity.distance,
    );
    res.json({
      message: caputreStatus ? "Captured" : "Not Captured",
      cities: caputreStatus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
