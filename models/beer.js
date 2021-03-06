const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  brewery: { type: String, required: true },
  description: { type: String, required: true },
  survey: { type: String },
  date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
