const router = require("express").Router();
const StartPage = require("../components/StartPage");
// const express = require("express");
// const app = express();
// app.locals.title =
router.get("/", (req, res) => {
  res.renderComponent(StartPage, { title: "Flash cards" });
});
module.exports = router;
