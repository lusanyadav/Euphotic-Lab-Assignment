const User = require("../model/dish.model");


// Logic for getting all dishes list and sending to frontend
const allDishes = async(req, res) => {
    try {
        const Dishes = await User.find();
        res.status(200).json({
          Dishes,
        });
    } catch (error) {
        console.log(error);
    }
}

// Logic for updating th dish in database with the help of dishID

const dishStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { isPublished } = req.body;
        await User.findOneAndUpdate(
          { dishId: id },
          { isPublished: isPublished }
        );

        res.status(200).json({
            message: "Updated successfully",
            status: true
        })
        
    } catch (error) {
      console.log(error);
    }
};
module.exports = { allDishes, dishStatus };