const { Router } = require("express");
const router = Router();

/* @get method @access public @url home*/
router.get("/home", (req, res) => {
  res.render("../views/home", { title: " sucessfulley i render the page" });
});

module.exports = router;
