const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const listing = require("./models/listings.js")
const path = require("path");

app.get("/", (req,res)=>{
    res.send("this api is working")
} )

// app.get("/testlistening", async(req,res)=>{
//     let samplistning = new listing({
//         title:"new title",
//         description:"nice building",
//         image:"",
//         price: 4554,
//         location:"mast location",
//         country:"india"
//     });
//    await samplistning.save()
//    console.log("sample was saved")
//    res.send("successfull")
// });



// listing route to get all the listings

app.get("/listings",async(req,res)=>{
 
    const alllistings =await listing.find();
  res.render("index.ejs",{alllistings});

})
app.listen( 8080,()=>{

    console.log("server is running");
});