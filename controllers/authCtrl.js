const express = require('express');
const Game = require('../models/Game');

const login = (req, res) => {
    res.render('games/login')
}


module.exports = {
    login,
}