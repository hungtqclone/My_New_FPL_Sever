const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newsSchema = new Schema({
    id: { type: ObjectId },
    typeCategory:{type:ObjectId, ref:"Category"},
    title: { type: String, require: true },
    content: { type: String, require: true },
    author: { type: String, require: true },
    date: { type: Date, default: Date.now },
    image: { type: String, require: true },


});

module.exports = mongoose.models.news || mongoose.model('News', newsSchema);
