const React = require("react");

function TopicPage({ title, topic }) {
  //   console.log(topic);


  return (
    <div className="newDiv">
      <a href={`question/${topic.id}`}>{topic.Name}</a>
    </div>
  );
}
module.exports = TopicPage;
