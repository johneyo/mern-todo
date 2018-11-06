const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Todo = mongoose.model('todo', todoSchema)