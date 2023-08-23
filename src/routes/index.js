const homeRouter = require('./home.route')

function route (app) {
    app.get('/',homeRouter)
    
}

module.exports = route