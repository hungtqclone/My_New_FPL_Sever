const ScheduleStudyService = require('./ScheduleStudyService');

const addNew = async (idSubject, shift, location, time, date, lesson) => {
    try {
        return await ScheduleStudyService.addNew(idSubject, shift, location, time, date, lesson);
    } catch (error) {
        console.log(error);
        return false;
    }
}
const getById = async (id) => {
    try {
        return await ScheduleStudyService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await ScheduleStudyService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await ScheduleStudyService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,idSubject, shift, location, time, date, lesson) => {
    try {
        return await ScheduleStudyService.updateById(id,idSubject, shift, location, time, date, lesson);
    } catch (error) {
        return false;
    }
}
const getByCurrentDay = async (currentDay) => {
    try {
        return await ScheduleStudyService.getByCurrentDay(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy7Day = async (currentDay) => {
    try {
        return await ScheduleStudyService.getBy7Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy14Day = async (currentDay) => {
    try {
        return await ScheduleStudyService.getBy14Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy30Day = async (currentDay) => {
    try {
        return await ScheduleStudyService.getBy30Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy60Day = async (currentDay) => {
    try {
        return await ScheduleStudyService.getBy60Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy90Day = async (currentDay) => {
    try {
        return await ScheduleStudyService.getBy90Day(currentDay);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByCurrentDay,getBy7Day,
    getBy14Day,getBy30Day,getBy60Day,getBy90Day,
};