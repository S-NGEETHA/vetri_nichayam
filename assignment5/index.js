const express = require("express");
const app = express(); //instace
const PORT = 8000;
const mongoose = require("mongoose");
// const middleware=require("./middleware")
const userRoutes = require("./routes/userRoutes");
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/adm");
    console.log("connected");
  } catch (err) {
    console.log("err");
  }
};

connect();

app.use("/userdetails", userRoutes);

app.listen(PORT, () => {
  console.log("server started");
});
