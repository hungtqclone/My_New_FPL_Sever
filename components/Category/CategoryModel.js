const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, require: true },
   


});

module.exports = mongoose.models.category || mongoose.model('Category', categorySchema);
