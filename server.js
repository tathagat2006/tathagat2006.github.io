const express = require('express')
const app = express()

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))

app.listen(5454 , () => {
    console.log('Server Started at http://localhost:5454')
})