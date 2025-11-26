const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    dishId: {
        type: String,
        unique: true,
        required: true
    },
    dishName: {
        type: String,
        required: true
        
    },
    imageUrl: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default:false
        
    }
});

module.exports = dishSchema;