
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BidSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    openingDate: {
        type: Date, required: true, default: Date.now(),
    },
    closingDate: {
        type: Date, required: true,
    },
    // document_url: {
    //     type: String, trime: true, required: true,
    // },
    Specification: {
        type: String,
    },
    client_id: {
        type: Schema.Types.ObjectId, required: true, ref: 'client',
    },
    item_id:{type: Schema.Types.ObjectId, required: true, ref: 'bidde',
}
});



module.exports = mongoose.model('bid', BidSchema);

