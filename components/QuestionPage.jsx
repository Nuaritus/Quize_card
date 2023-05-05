const React = require("react");
const Layout = require("./Layout");

function QuestionPage({ title, qa }) {
  //   console.log(topic);

  return (
    <Layout title={title}>
      <form className="js-form">
        <div>
          <label>
            <input type="radio" name="answer" value={qa[0].answ1} required />
            {qa[0].answ1}
          </label>
          <label>
            <input type="radio" name="answer" value={qa[0].answ2} required />
            {qa[0].answ2}
          </label>
          <label>
            <input type="radio" name="answer" value={qa[0].answ2} required />
            {qa[0].answ2}
          </label>
          <label>
            <input type="radio" name="answer" value={qa[0].answ2} required />
            {qa[0].answ2}
          </label>
        </div>
        <button type="sumbit">Ответить</button>
      </form>

      <script defer src="/js/game.js" />
    </Layout>
  );
}
module.exports = QuestionPage;
