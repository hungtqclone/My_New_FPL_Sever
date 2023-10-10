const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const scheduleExamSchema = new Schema({
    id: { type: ObjectId },
    idSubject: { type: ObjectId, ref: "Subject" },//id môn để lấy mã môn mà các thông tin môn học
    location: { type: String, require: true },//dia diem thi
    shift: { type: Number, require: true },//ca thi
    date: { type: Date, default: Date.now },//ngay thi
    time: { type: String, require: true }//thời gian thi

});

module.exports = mongoose.models.scheduleExam || mongoose.model('ScheduleExam', scheduleExamSchema);
