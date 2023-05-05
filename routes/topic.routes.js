const router = require("express").Router();
const TopicList = require("../components/TopicList");
const { Topic } = require("../db/models");

router.get("/", async (req, res) => {
  const topics = await Topic.findAll();
  //   console.log(topics);
  res.renderComponent(TopicList, {
    title: "Flash cards",
    topic: topics,
  });
});
module.exports = router;
