const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let FactorySchema = new Schema({
  name: { type: String, required: true, max: 100 }
});

module.exports = mongoose.model("Factory", FactorySchema);
