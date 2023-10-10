const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const scheduleStudySchema = new Schema({
    id: { type: ObjectId },
    idSubject: { type: ObjectId, ref: "Subject" },//id môn để lấy mã môn mà các thông tin môn học
    shift: { type: Number, require: true },//ca học
    location: { type: String, require: true },//dia diem
    time: { type: String, require: true },//thoi gian
    date: { type: Date, default: Date.now },//ngay
    lesson: { type: Number, default: 1 },// buoi thứ

});

module.exports = mongoose.models.scheduleStudy || mongoose.model('ScheduleStudy', scheduleStudySchema);
