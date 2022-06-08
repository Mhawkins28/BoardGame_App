require('./connection');
// const User = require('../models/User')
const Game = require('../models/Game');
const gameSeeds = require('./seeds.json');

Game.deleteMany({})
.then(()=> {
    return Game.insertMany(gameSeeds)
    .then((games) => {
        console.log(games)
    })
})
.catch(console.error)
.finally(()=>{
    process.exit()
})