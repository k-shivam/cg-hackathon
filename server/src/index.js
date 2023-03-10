const express = require("express");
const { Task } = require("./models/taskModel");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
var cors = require('cors');

require("./db/mongoose");

const app = express();
const port = process.env.port || 3001;

app.use(cors())
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Up and running on prt ${port}`);
});
