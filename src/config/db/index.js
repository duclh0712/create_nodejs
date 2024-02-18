const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://localhost/test')
        .then(() => console.log('Connected'))
        .catch(() => console.log('Failed!'))
}

module.exports = { connect }