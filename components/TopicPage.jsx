const React = require("react");
const express = require("express");
const app = express();
function TopicPage({ title, topic }) {
  console.log(app.locals);

  return (
    <div>
      <a href={`question/${topic.id}`}>{topic.topicName}</a>
    </div>
  );
}
module.exports = TopicPage;
