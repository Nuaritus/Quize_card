const React = require("react");
const Layout = require("./Layout");
const TopicPage = require("./TopicPage");

function TopicList({ title, topic }) {
  //   console.log(topic);

  return (
    <Layout title={title}>
      <div>
        {topic.map((el) => (
          <TopicPage topic={el} key={el.id} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = TopicList;
