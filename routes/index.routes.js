const router = require("express").Router();
const question = require("./question.routes");
const startPage = require("./startPage.routes.js");
const topicList = require("./topic.routes.js");
const answer = require("./answer.routes.js");
// const { LocalStorage } = require("node-localstorage");

// Чтение данных из localStorage
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.name);

router.use("/", startPage);
router.use("/topics", topicList);
router.use("/question", question);
router.use("/question/:id/", answer);

module.exports = router;
