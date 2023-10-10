const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const chatSchema = new Schema(
    {
    // id: { type: ObjectId },
    // idSender: { type: ObjectId, ref: "User" },
    // idReceiver: { type: ObjectId, ref: "User" },
    // message: { type: String },
    // time: { type: Date, default: Date.now },
    // room: { type: Number }
    members: Array
},
    { timestamps: true, }
);

module.exports = mongoose.models.chat || mongoose.model('Chat', chatSchema);
