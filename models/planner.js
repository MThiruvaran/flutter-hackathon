const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)


const plannerSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('planner', plannerSchema);