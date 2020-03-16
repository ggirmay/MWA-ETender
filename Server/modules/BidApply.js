
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BidApplySchema = new Schema({
    
    applyingDate: {
        type: Date, required: true, default: Date.now(),
    },
    priceAmount: {
        type: Number, required: true,
    },
});



module.exports = mongoose.model('bidApply', BidApplySchema);

