const mongoose = require('mongoose');


const reminderSchema = new mongoose.Schema({
    message: {type: String, required: true},
    dateTime: {type: Date, required: true},
    reminderType: {type: String, enum: ['email','sms'],required:true }
});

module.exports = mongoose.model('Reminder' ,reminderSchema );