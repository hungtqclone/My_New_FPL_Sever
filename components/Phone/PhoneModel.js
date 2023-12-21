const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const phoneSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },

    
   


});

module.exports = mongoose.models.phone || mongoose.model('Phone', phoneSchema);
