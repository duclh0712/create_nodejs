const express = require('express')
const app = express()
const port =  3002


const route = require('./routes')

const handlebars = require('express-handlebars')

const morgan = require('morgan')

// log http request
app.use(morgan('combined'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


route(app)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})