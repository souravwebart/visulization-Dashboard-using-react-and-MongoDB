const mongoose = require('mongoose');
const bootcampSchema = new mongoose.Schema({
    end_year:{
        type: Number,
    },
    intensity:{
        type: Number,
        required: [true, 'please provide a intensity']
    },
    sector: {
        type: String,
        required: [true, 'please provide a sector name']
    },
    topic:{
        type: String,
        required: [true, 'please provide a topic name']
    },
    insight:{
        type: String,
        required: [true, 'please provide a topic name']
    },
    url:{
        type: String,
        required: [true, 'please provide a link']
    },
    region:{
        type: String,
        required: [true, 'please provide a region name']
    },
    start_year:{
        type: Number,
    },
    impact:{
        type: String,
    },
    added:{
        type: String,
        required: [true, 'please provide a added value']
    },
    published:{
        type: String,
        required: [true, 'please provide a published value']
    },
    country:{
        type: String,
        required: [true, 'please provide a country name']
    },
    relevance:{
        type: Number,
        required: [true, 'please provide a relevance number']
    },
    pestle:{
        type: String,
        required: [true, 'please provide a pestle name']
    },
    source:{
        type: String,
        required: [true, 'please provide a source name']
    },
    title:{
        type: String,
        required: [true, 'please provide a title']
    },
    likelihood:{
        type: Number,
        required: [true, 'please provide a likelihood number']
    },


})

const Bootcamp = mongoose.model('Bootcamp', bootcampSchema);

module.exports = Bootcamp;