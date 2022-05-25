const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    birth: {
        type: Date
    },
    email: {
        type: String,
        unique: true
    },
    prefix: {
        type: String,
        default: '+57'
    },
    cel: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    type: {
        type: String,
        default: 'tipo1'
    },
    origin: {
        type: String,
        default: 'origin1'
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('contacts', ContactSchema)