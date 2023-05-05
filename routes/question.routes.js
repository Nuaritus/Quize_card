const router = require("express").Router();
const { where } = require("sequelize");
const QuestionPage = require("../components/QuestionPage");
const { QA } = require("../db/models");

router.get("/:idTopic", async (req, res) => {
  console.log(req.body);
  const questionsAnswers = await QA.findAll({
    where: {
      idTopic: req.params.idTopic,
    },
  });
  res.renderComponent(QuestionPage, {
    title: "Flash cards",
    qa: questionsAnswers,
  });
});
module.exports = router;
