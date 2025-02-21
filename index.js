const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port=process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors());




app.get('/',(req,res)=>{
    res.send('server is running on trippo')
})


app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})