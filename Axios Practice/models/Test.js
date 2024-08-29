const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'Please Provide Name'],
        maxlength: 50,
        minlength: 3,
    },
    msg: {
        type: String,
        required: [true , 'Please provide a message'],
        maxlength: 100,
        minlength: 1,
    }
});

module.exports = mongoose.model('Message' , TestSchema);