const React = require("react");
const Layout = require("./Layout");

// let counter = JSON.parse(localStorage.getItem("user")).counter;
let counter = 0;
function QuestionPage({ title, qa }) {
  //   console.log(topic);

  return (
    <Layout title={title}>
      <form className="js-form" data-id={qa.id}>
        <div>
          <label>
            <div>{qa[counter].question}</div>
            <input
              type="radio"
              name="answer"
              value={qa[counter].answ1}
              required
            />
            {qa[counter].answ1}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={qa[counter].answ2}
              required
            />
            {qa[counter].answ2}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={qa[counter].answ2}
              required
            />
            {qa[counter].answ3}
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value={qa[counter].answ2}
              required
            />
            {qa[counter].answ4}
          </label>
        </div>
        <button type="sumbit">Ответить</button>
      </form>

      <script defer src="/js/game.js" />
    </Layout>
  );
}
module.exports = QuestionPage;
