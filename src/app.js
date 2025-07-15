const express = require('express')
const app = express()
const aiRoutes = require('./routes/ai_routes')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world, backend is running and I can see it in the browser screen!!')
})

app.use('/ai', aiRoutes)

module.exports = app