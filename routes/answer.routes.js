const router = require("express").Router();
const AnswerPage = require("../components/AnswerPage");
const { QA } = require("../db/models");

router.get("/:idAnswer", async (req, res) => {
  //   const questionsAnswers = await QA.findAll({
  //     where: { id: req.params.idAnswer },
  //   });
  //   res.renderComponent(AnswerPage, {
  //     title: "Flash cards",
  //     qa: questionsAnswers,
  //   });
  res.send("1");
});
module.exports = router;
