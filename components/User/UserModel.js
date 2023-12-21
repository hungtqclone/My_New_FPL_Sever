const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var currentdate = new Date();
var datetime = currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds();

const userSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String, require: true },
  email: { type: String, default: "", unique: true },
  password: { type: String, default: "123456abc" },

  studentCode: { type: String, require:true },//MSSV
  class: { type: String, default: "CP17310" },//lop
  period: { type: Number, default: 1 },//ki
  major: { type: String, default: "CNTT" },
  gender: { type: Boolean, default: true },//true female false male

  address: { type: String, default: "" },
  dob: { type: Date, default: Date.now },
  avatar: { type: String, default: "" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },

  status: { type: Number, default: 1 },//1 active 2 block
  role: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },

});

module.exports = mongoose.models.user || mongoose.model('User', userSchema);
