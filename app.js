const express = require("express")
const app = express()
const mongoose = require ("mongoose")
const listing = require("./models/listings.js")
const path = require("path");

// MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnbclone";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

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

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

// listing route to get all the listings

app.get("/listings",async(req,res)=>{
 
    const alllistings =await listing.find();
  res.render("listings/index.ejs",{alllistings});

})

// show single route 
app.get("/listings/:id", async (req,res)=>{

     const onelisting = await listing.findById(req.params.id);
 res.render("listings/show.ejs", { onelisting });

})
app.listen( 8080,()=>{

    console.log("server is running");
});