require('dotenv').config()

const app = require('./src/app')


app.listen(3000, (err) => {
    if (err) console.log(err.message)
    else console.log('Server is running')
})