const mongoose = require('mongoose');

const cassetteSchema = new mongoose.Schema({
    denomination: { type: Number, required: true, enum: [ '10', '20', '50', '100' ], default: '€'},
    count: { type: Number, required: true },
    image: { type: String, default: '/assets/Cassette.jpg'}
});

const Cassette = mongoose.model('cassettes', cassetteSchema, 'cassettes');

module.exports = Cassette;