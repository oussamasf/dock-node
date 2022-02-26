const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a name to complete the process"],
    trim: true,
  },
  character: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "message "],
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
