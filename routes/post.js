const router = require("express").Router();
const auth = require("../routes/protectedRoute");

router.get("/", auth, (req, res) => {
  res.send("private route");
});

module.exports = router;
