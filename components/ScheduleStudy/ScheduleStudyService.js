const ScheduleStudyModel = require('./ScheduleStudyModel')
const moment = require('moment');
const getAll = async () => {
    try {
        const res = await ScheduleStudyModel.find()
        console.log('res>>>>>', res)
        return ScheduleStudyModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const addNew = async (idSubject, shift, location, time, date, lesson) => {
    try {
        const SchedulesSubject = {
            idSubject, shift, location, time, date, lesson
        }
        //const mh = new 
        const p = new ScheduleStudyModel(SchedulesSubject);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new SchedulesSubject error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return ScheduleStudyModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByCurrentDay = async (currentDay) => {
    try {
        const startDate = currentDay + 'T00:00:00.000Z';
        const endDate = currentDay + 'T23:59:59.999Z';
        console.log(startDate);
        console.log(endDate);

        return await ScheduleStudyModel.find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy7Day = async (currentDay) => {
    try {
        let nextDate = moment(currentDay).add(1, 'days');
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(nextDate).add(7, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleStudyModel.find({
                date: {
                    $gte: nextDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBy14Day = async (currentDay) => {
    try {

        let nextDate = moment(currentDay).add(1, 'days');

        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(nextDate).add(14, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleStudyModel.find({
                date: {
                    $gte: nextDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }

    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBy30Day = async (currentDay) => {
    try {
        let nextDate = moment(currentDay).add(1, 'days');
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(nextDate).add(30, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleStudyModel.find({
                date: {
                    $gte: nextDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBy60Day = async (currentDay) => {
    try {
        let nextDate = moment(currentDay).add(1, 'days');
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(nextDate).add(60, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleStudyModel.find({
                date: {
                    $gte: nextDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBy90Day = async (currentDay) => {
    try {
        let nextDate = moment(currentDay).add(1, 'days');
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(nextDate).add(90, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleStudyModel.find({
                    date: {
                        $gte: nextDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleStudyModel.find({
                date: {
                    $gte: nextDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const deleteById = async (id) => {
    try {
        return ScheduleStudyModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, idSubject, shift, location, time, date, lesson) => {
    try {
        const SchedulesSubject = await ScheduleStudyModel.findById(id)

        if (SchedulesSubject) {
            SchedulesSubject.idSubject = idSubject ? idSubject : SchedulesSubject.idSubject;
            SchedulesSubject.shift = shift ? shift : SchedulesSubject.shift;
            SchedulesSubject.location = location ? location : SchedulesSubject.location;
            SchedulesSubject.time = time ? time : SchedulesSubject.time;
            SchedulesSubject.date = date ? date : SchedulesSubject.date;
            SchedulesSubject.lesson = lesson ? lesson : SchedulesSubject.lesson;
            await SchedulesSubject.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById, getByCurrentDay, getBy7Day,
    getBy14Day, getBy30Day, getBy60Day, getBy90Day,
}
