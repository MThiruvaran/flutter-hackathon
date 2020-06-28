const mongoose = require('mongoose');
const { model } = require('./users');
mongoose.set('useCreateIndex', true)


const plannerSchema = mongoose.Schema({
    taskid:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    date:{
        type:Date
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('planner', plannerSchema);