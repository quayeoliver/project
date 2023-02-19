const mongoose = require('mongoose')

const studentsportfolio = mongoose.model('User',{
    id:Number,
    name: String,
    programme: String,
    level: Number,
    hallofresidence: String
})
module.exports = studentsportfolio;