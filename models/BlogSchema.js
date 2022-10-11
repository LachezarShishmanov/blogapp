const mongoose = require('mongoose')

// Create a new Schema
const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    likes: {type: Number, default: 0},
    sponsored: {type: Boolean, default: false},
}, 
{ timestamps: { createdAt: 'created_at' } })

// create a new model for the schema
    module.exports = mongoose.model('Blog', blogSchema)