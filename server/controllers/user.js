const express = require("express");
const userModel = require("../models/user");

exports.Register = async (req, res) => {
  console.log("body::", req.body.Users);
  const { username, email, password } = req.body.Users;
  const user = new userModel({ username, email, password });
  await user.save();
  res.send("success");
};

exports.Read = async (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.Remove = async (req, res) => {
  console.log("params::", req.params);
  const { _id } = req.params;
  const user = await userModel.findById({ _id }).exec();
  console.log("user console:", user);
  if (!user) return res.status(400).json({ msg: "User not found" });
  await user.deleteOne({ _id });
  return res.status(200).json({ msg: "User deleted" });
};

//  exports.Update= async(req,res)=>{
//     const newAge=req.body.newAge
//     const id=req.body.id
//     try {
//       await FriendModel.findById(id,(error,updateToFriend)=>{
//         updateToFriend.age=Number(newAge)
//         updateToFriend.save()
//       })
//     } catch (error) {
//       console.log(error)
//     }
//     res.send('updated')
//   }

// exports.Remove=async(req,res)=>{
//     const id=req.params.id
//     await userModel.findByIdAndRemove(id).exec(
//       res.send('deleted')
//     )
//   }
