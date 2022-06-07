const gameIndex = (req, res) => {
    res.send('This is the game index')
}

const newGameForm = (req, res) => {
    res.send('the add new game form will render here!')
}






module.exports = {
    gameIndex,
    newGameForm
}