const User = require("../models/userSchema");

const SignUp = async (req, res) => {
  try {
    const { name, age, city, landmark, pincode} = req.body;
    const user = await User.findOne({ name });
    if (user) {
      return res.send({ msg: "user existed" });
    }
    const newUser = await User.create({
      name,
      age,
      city,
      landmark,
      pincode,
    });
    res.send({ msg: "user added", newUser });
  } catch (error) {
    console.error(error);
    res.send({ msg: "internal serever error", error });
  }
};

const GetUsers = async(req,res)=>{
  try {
    const userdetails=await  User.find();
    res.send({msg:"users",userdetails})
  } catch (error) {
    res.send({msg:"fetching error",error})
  }
}

const UpdateUser=async(req,res)=>{
  try {
    const id=req.params.id;
    const {name,age, city, landmark, pincode}=req.body;
    const user= await User.findByIdAndUpdate(id,{name,age, city, landmark, pincode})
    res.send({msg:"user updated",user})
  } catch (error) {
    res.send({msg:"update error",error})
  }
}

const DeleteUser=async(req,res)=>{
  try {
    const id =req.params.id;
    const deleteuser=await User.findByIdAndDelete(id);
    res.send({msg:"user deleted",deleteuser})
  } catch (error) {
    res,send({msg:"delete error",error})
  }
}
const myController = { SignUp , GetUsers, UpdateUser, DeleteUser};
module.exports = myController;
