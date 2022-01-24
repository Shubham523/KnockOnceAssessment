require('dotenv').config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");

const port = 5000;

const bodyParser = require('body-parser');
const cookieParser  =require('cookie-parser');
const cors = require('cors');

//Routes
const appointmentRoutes = require("./routes/appointments");



  mongoose.connect(process.env.DATABASE, 
    {
     useNewUrlParser : true,
     useUnifiedTopology : true,
    })
    .then(() => 
    { 
        console.log("Db Connected");
    }
    ).catch(
        console.log("Error Occurred while connecting to the Database")
    );


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use('/api',appointmentRoutes)
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
  })