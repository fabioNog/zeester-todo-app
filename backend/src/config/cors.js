module.exports = function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATH,DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Aceppt')
    next()
}