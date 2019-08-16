const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaisSchema = new Schema({
    codpais: {
        type: String,
        trim: true
    },
    nombpais: {
        type: String,
        trim: true
    },
    prefpais: {
        type: Number,
        trim: true
    },
    continente: {
        type: String,
        trim: true
    },
    estados: [{
        codestado: {
            type: String,
            trim: true
        },
        nombestado: {
            type: String,
            trim: true
        },
        localidades: [{
            codlocalidad: {
                type: String,
                trim: true
            },
            nomblocalidad: {
                type: String,
                trim: true
            }
        }]
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Paises', PaisSchema);