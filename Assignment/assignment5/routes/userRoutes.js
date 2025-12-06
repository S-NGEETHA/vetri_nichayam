const express = require("express");
const myroutes = express.Router();
const myController = require("../controller/userController");

myroutes.post("/user", myController.SignUp);
myroutes.get("/details",myController.GetUsers);
myroutes.put("/editdetails/:id",myController.UpdateUser);
myroutes.delete("/deletedetails/:id",myController.DeleteUser);



module.exports = myroutes;
