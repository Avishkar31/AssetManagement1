const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assetSchema = new Schema({
    issuedTo: {
        type: String,
        require: true
    },
    deskLocation: {
        type: String
    },
    type: {
        type: String
    },
    model: {
        type: String
    },
    nodeName: {
        type: String
    },
    serialNumber: {
        type: String
    },
    allocation: {
        type: String
    },
    period: {
        type: String
    },
    assessories: {
        "CPU": {
            type: Number
        },
        "LCD Monitor": {
            type: Number
        },
        "Docking Station": {
            type: Number
        },
        "Keyboard": {
            type: Number
        },
        "Mouse": {
            type: Number
        },
        "Power Adapter (Laptop)": {
            type: Number
        },
        "Power Adaptor (Docking station)": {
            type: Number
        },
        "Laptop Bag": {
            type: Number
        },
        "Modular Battery": {
            type: Number
        },
        "Laptop Lock": {
            type: Number
        },
        "Internal HDD/ External HDD": {
            type: Number
        },
        "Headphone": {
            type: Number
        },
        "Cardreader": {
            type: Number
        },
        "Printer": {
            type: Number
        },
        "Mobile": {
            type: Number
        }        
    },
    issuingPerson: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Asset', assetSchema);