const express = require("express");
const { allDishes, dishStatus } = require("../controller/dishes.controller");
const dishRouter = express.Router();



// Route for listing all dish
dishRouter.route("/allDishes").get(allDishes);


// Route for updating the publish status of a dish
dishRouter.route("/:id").put(dishStatus);


module.exports = dishRouter;