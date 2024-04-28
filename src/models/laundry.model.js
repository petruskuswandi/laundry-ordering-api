const mongoose = require("mongoose");

const LaundrySchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  description: String,
  serviceType: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  contactInformation: {},
  openingHours: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  numRating: Number,
  images: [String],
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  open: Boolean,
  goods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Good",
    },
  ],
});

const Laundry = mongoose.model("Laundry", LaundrySchema);
module.exports = Laundry;
