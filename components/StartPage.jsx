const React = require("react");
const Layout = require("./Layout");

function StartPage({ title }) {
  return (
    <Layout title={title}>
      <div className="cont">
        <form action="/topics">
          <input type="text" id="input" placeholder="Введите имя игрока" />
          <button id="btn1" type="submit">
            Добавить
          </button>
        </form>
      </div>
      <script defer src="/js/index.js" />
    </Layout>
  );
}
module.exports = StartPage;
