require('./connection');
const Game = require('../models/Game');
const User = require("../models/User");
const gameSeeds = require('./seeds.json');

Game.deleteMany({})
.then(() => User.deleteMany({}))
.then(() => {
    return User.create({
    name: "Megan",
    email: "megan.hawkins28@gmail.com",
    }).then((user) => {
    return gameSeeds.map((games) => ({ ...games, owner: user._id }));
    });
})
.then((games) => {
    return Game.insertMany(games);
})
.then((games) => {
    console.log(games);
})
.catch(console.error)
.finally(() => {
    process.exit();
});