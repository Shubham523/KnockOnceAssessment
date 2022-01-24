const mongoose = require("mongoose");



const appointmentsSchema = new mongoose.Schema({

    name : {type : String, required : true},
    email : {type : String, required : true},
    phoneNumber : {type : String, required : true},
    date : {type:String, required : true },

},{timestamps:true});

module.exports = mongoose.model("Appointments",appointmentsSchema,"Appointments");

