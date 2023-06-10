const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, require: true, default: 'null'},
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: false },
})

module.exports = mongoose.model('User', userSchema)