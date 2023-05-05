const router = require("express").Router();
const StartPage = require("../components/StartPage");

router.get("/", (req, res) => {
  res.renderComponent(StartPage, { title: "Flash cards" });
});
module.exports = router;
