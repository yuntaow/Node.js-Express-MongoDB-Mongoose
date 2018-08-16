const express = require('express')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

if (process.env.NODE_ENV !== 'test'){
	mongoose.connect('mongodb://localhost/muber')
}


const app = express()
app.use(bodyParser.json())
routes(app)

app.use( (err, req, res, next) => {

	res.status(422).send({error: err.message})

})


app.post('/api')
app.put('/api')
app.delete('/api')

module.exports = app;