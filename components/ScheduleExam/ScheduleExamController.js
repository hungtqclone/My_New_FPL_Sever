const ScheduleExamService = require('./ScheduleExamService');

const addSchedule = async (idSubject,location,shift,date,time) => {
    try {
        return await ScheduleExamService.addSchedule(idSubject, location, shift,date,time);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await ScheduleExamService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await ScheduleExamService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await ScheduleExamService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,subject,location,shift,date) => {
    try {
        return await ScheduleExamService.updateById(id,subject,location,shift,date);
    } catch (error) {
        return false;
    }
}
const getBysubject = async (subject) => {
    try {
        return await ScheduleExamService.getByTitle(subject);
    } catch (error) {
        return false;
    }
}
const getByCurrentDay = async (currentDay) => {
    try {
        return await ScheduleExamService.getByCurrentDay(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy7Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy7Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy14Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy14Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy30Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy30Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy60Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy60Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy90Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy90Day(currentDay);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,getByCurrentDay,getBy7Day,getBy14Day,getBy30Day,getBy60Day,getBy90Day
};