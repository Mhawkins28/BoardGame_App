const mongoose = require('mongoose')
const { Schema } = mongoose;

const reviewSchema = new Schema(
    {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    },
    { timestamps: true }
);

const gameSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
      },
    description: String,
    players: { 
        type: String, 
        pattern: "[0-9]{1}-[0-9]{1}"
        },
    duration: {
        type: String, 
        pattern: "[0-9]{2}-[0-9]{2}||[0-9]{2}-[0-9]{3}||[0-9]{2}"
        },
    img: [String], 
    category: [String], 
    reviews: [reviewSchema],
    },
  );
  
  module.exports = mongoose.model('Game', gameSchema);