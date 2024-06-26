const express = require("express");
const cors = require("cors");
const app = express();
const projectsControllers = require("./Controllers/projectsControllers.js");
const userControllers = require("./Controllers/userControllers.js");


app.use(cors());
app.use(express.json());

app.use("/projects", projectsControllers);
app.use("/users", userControllers);


app.get("/", (req, res) => {
  res.send("Welcome to Batista Portfolio /projects to see data");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});

module.exports = app;
