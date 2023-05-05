const React = require("react");

function TopicPage({ title, topic }) {
  //   console.log(topic);

  return (
    <div>
      <a href={`question/${topic.id}`}>{topic.topicName}</a>
    </div>
  );
}
module.exports = TopicPage;
