const express = require('express')
const routes = require('./routes/routes')
const app = express()

app.get('/api', (req, res)=> {

	res.send({ hi: 'there' })

})

routes(app)

app.post('/api')
app.put('/api')
app.delete('/api')

module.exports = app;