const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment');


const RateSchema = new mongoose.Schema({
    rate: Number,
    text: String,
    filmId: {type: Schema.Types.ObjectId, ref: 'film'},
    authorId: {type: Schema.Types.ObjectId, ref: 'user'},
    date: {
        type: Date,
        default: Date.now()
    }
})

RateSchema.virtual('formattedDate').get(function() {
    return moment(this.date).format('DD.MM.YYYY');
});

module.exports = mongoose.model('rate' , RateSchema)