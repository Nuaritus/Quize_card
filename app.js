require("@babel/register");
const express = require("express");
const indexRouter = require("./routes/index.route");
const path = require("path");
const app = express();

const PORT = 3000;
app.use(express.urlencoded({ excendet: true }));
app.use(express.json());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Ура сервер на ${PORT} работает`);
});
