// const { Int32 } = require('bson');
const mongoose= require('mongoose');


const moviesSchema= mongoose.Schema({

    name:{type: String, require},
    dir:{type: String, require},
    year:{
        type: Number,
        min: 1900,
        max: 3017,
        require
    }

})

const moviesModel=mongoose.model('movies',moviesSchema);
module.exports=moviesModel;