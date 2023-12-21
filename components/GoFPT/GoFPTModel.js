const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const goFPTSchema = new Schema({
    id: { type: ObjectId },
    typeFind: { type: Number, default: 1 },//1 find driver 2 find passenger
    idUser: { type: ObjectId, require: true },

    nameUser: { type: String, require: true },
    phoneUser: { type: String, require: true },
    studentCode: { type: String, require: true },

    startPoint: { type: String, require: true },
    endPoint: { type: String, default: "Toa T" },
    timeStart: { type: String, require: true },
    dateStart: { type: Date, default: Date.now, },

    price: { type: Number, default:10000 },
    note: { type: String, require: false },
    image: { type: String, require: true },
    status: { type: Number, default: 1 },//1 waiting 2 success 3 cancel
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    note: { type: String, require: false },
    //optional
    rate: { type: Number, require: false },
    comment: { type: String, require: false },


});

module.exports = mongoose.models.gofpt || mongoose.model('GoFPT', goFPTSchema);