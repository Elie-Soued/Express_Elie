const express = require("express");
const app = express();
const studentRoutes = require("./Routes/Students");
const port = 3000;

app.use("/students", studentRoutes);

app.listen(port, () => console.log(`this server is running on port ${port}`));
