const mongoose = require('mongoose')
const { Schema } = mongoose;

const reviewSchema = new Schema(
    {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 1 },
    }
);

const gameSchema = new Schema(
    {
    title: String,
    description: String,
    playerMin: Number,
    playerMax: Number,
    durationMin: Number,
    durationMax: Number,
    img: [String], 
    review: [reviewSchema],
    },
);

module.exports = mongoose.model('Game', gameSchema);
