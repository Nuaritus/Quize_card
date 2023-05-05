const router = require("express").Router();
const startPage = require("./startPage.routes.js");
const topicList = require("./topic.routes.js");

router.use("/", startPage);
router.use("/topics", topicList);

module.exports = router;
