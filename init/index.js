const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnbclone";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to db");

  await initDb(); // ✅ run AFTER connection
}

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("data was initialized");
};

main().catch(err => console.log(err));
