const PORT = process.env.PORT || 3000;
require('dotenv').config()

const app = require('./src/app')


app.listen(PORT, (err) => {
    if (err) console.log(err.message)
    else console.log('Server is running')
})