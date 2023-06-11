const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.dbURL
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () => {console.log('connected!')})
module.exports = con