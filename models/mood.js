const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const moodSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    anger:{
        type:Number,
        default:0
    },
    happy:{
        type:Number,
        default:0
    },
    sad:{
        type:Number,
        default:0
    },
    normal:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('mood', moodSchema);