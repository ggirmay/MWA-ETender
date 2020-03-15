
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
    document_url: {
        type: String, trime: true, required: true,
    },
    client_id: {
        type: Schema.Types.ObjectId, required: true, ref: 'client',
    },
    item:{itemName: {
        type: String, required: true,
    },
    quantity: {
        type: Number, required: true,
    },
    specification: {
        type: String,
    },
    catagory: [String]
}
});



module.exports = mongoose.model('bid', BidSchema);

