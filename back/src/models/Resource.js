const { Schema, model } = require('mongoose');

const Resouce = new Schema({
    title: {
        type: String,
        required: true
    },
    key: [String],
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        unique: true,
        required: true
    },
    resourceType: {
        testimony: {
            type: String,
            required: true
        },
        report: {
            type: String,
            required: true
        },
        case: {
            type: String,
            required: true
        },
    },
    coverage: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = model('Resouce', Resouce);
