const mongoose = require('mongoose')

// Create a new Schema
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
}, 
{ timestamps: { createdAt: 'created_at' } })

// create a new model for the schema
    module.exports = mongoose.model('User', userSchema)