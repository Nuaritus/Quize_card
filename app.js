require("@babel/register");
const express = require("express");
const indexRouter = require("./routes/index.routes");
const path = require("path");
const app = express();
const renderComponent = require("./middleware/renderComponent");

const PORT = 3003;

app.use(express.static(path.join(__dirname, "public")));
app.use(renderComponent);

app.use(express.urlencoded({ excendet: true }));
app.use(express.json());

app.use("/", indexRouter); // первая маршрутизация

app.listen(PORT, () => {
  console.log(`Ура сервер на ${PORT} работает`);
});
