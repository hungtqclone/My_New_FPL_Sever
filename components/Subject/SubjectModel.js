const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const subjectSchema = new Schema({
    id: { type: ObjectId },
    nameSubject: { type: String, require: true },
    codeSubject: { type: String, require: true },// ma mon
    instructor: { type: String, require: true },//Giang vien
    credits: { type: Number, default: 3 },// So tin chi
    description: { type: String, require: false },// mo ta
    createdAt: { type: Date, require: Date.now },
    updatedAt: { type: Date, require: Date.now },

});

module.exports = mongoose.models.subject || mongoose.model('Subject', subjectSchema);