import { Timestamp } from "mongodb"
import mongoose from "mongoose"


const expschema=new mongoose.Schema({
  project:String,
    expense:String,
    person:String,
    from:Date,
    to:Date,
    advanceamount:Number,
    actualamount:Number,
    remarks:String

})

const taskschema=new mongoose.Schema({
  title:String,
  project:String,
  description:String


})
const dateschema=new mongoose.Schema({
  timeout:String,
  timein:String,
  date:Date,
  signin:String,
  loggedin:String,
  addressin:String,
  addressout:String

})


const loc=new mongoose.Schema({
  city:String,
  place:String,
  purpose:String

})

const image=new mongoose.Schema({
  uri:String,
  name:String,
  FileName:String,
  type:String


})

  
// Defining Schema
const userSchema = new mongoose.Schema({
  
  username:{type:String,required:true, trim:true},
  password:{type:String,required:true, trim:true},
  email:{type:String,required:true,trim:true,unique:true},
  age:{type:Number,required:true,trim:true},
  address:{type:String,required:true,trim:true},
  designation:{type:String,required:true,trim:true},
dates:[dateschema],
leaves:[{leavetype:String,head:String,appliedto:String,from:String,to:String,reason:String}],
exp:[expschema],
tasks:[taskschema],
reports:[{report:String}],
location:[loc],
imagedata:[image]




}

)

// Model 
const userModel = mongoose.model("users", userSchema)

export default userModel