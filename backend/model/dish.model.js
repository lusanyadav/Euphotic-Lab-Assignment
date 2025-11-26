const mongoose = require("mongoose");
const dishSchema = require("../schema/dish.schema");

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;