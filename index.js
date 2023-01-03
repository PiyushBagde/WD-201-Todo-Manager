/* eslint-disable quotes */
/* eslint-disable semi */
const app = require("./app");
const express = require("express");
const path = require("path");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Started express sever on port ${PORT}`);
});
