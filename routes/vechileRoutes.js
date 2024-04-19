const express = require("express");
const router = express.Router();
const vechiles = require("../controllers/vechiles");

router.get("/", async (req, res) => {
  try {
    res.json({
      message: "Vechiles Data Fetched",
      vechiles: vechiles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
