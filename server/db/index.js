const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://food-ordering:food-ordering@cluster0.p61igz7.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db