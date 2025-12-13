const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();


app.use(cors());
app.use(express.json());



run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Dhanshidy Studio Server is Running...");
});

app.listen(port, () => {
  console.log("Dhanshidy Studio Server Running");
});
