const goFPTModel = require('./GoFPTModel');
const moment = require('moment');

const addNew = async (typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
    endPoint, timeStart, dateStart, price, note, image, status, rate, comment) => {
    try {
        const post = {
            typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment
        }
        const p = new goFPTModel(post);
        await p.save();
        return true;
    } catch (error) {
        console.log('add error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return goFPTModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByIdUser = async (id, typeFind) => {
    try {
        const user = goFPTModel.find({ idUser: id, typeFind: typeFind });
        return user;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByTypeFind = async (typeFind, limit) => {
    try {
        const currentDate = moment().format('YYYY-MM-DD');
        const nextWeekDate = moment().add(30, 'days').format('YYYY-MM-DD');

        const result = await goFPTModel.find({
            typeFind: typeFind,
            dateStart: {
                $gte: currentDate,
                $lte: nextWeekDate
            }
        })
            .limit(limit)
        console.log(result.length);
        return result;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getByKeyWord = async (keyword, typeFind, limit) => {
    try {
        console.log('keyword: ', keyword);
        const user = goFPTModel.find({
            $or: [
                { startPoint: { $regex: new RegExp(keyword, 'i') } },
                { endPoint: { $regex: new RegExp(keyword, 'i') } },
            ],
            typeFind: typeFind
        })
            // .limit(limit)
        return user;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}


const getAll = async () => {
    try {
        return goFPTModel.find().skip(0).limit(10).sort({ dateStart: -1 })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const deleteById = async (id) => {
    try {
        console.log(id);
        return goFPTModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, typeFind, idUser, nameUser, phoneUser, studentCode, startPoint, endPoint, timeStart, dateStart, price, note, image, status, rate, comment) => {
    try {
        const post = await goFPTModel.findById(id)
        if (post) {
            post.typeFind = typeFind ? typeFind : post.typeFind;
            post.nameUser = nameUser ? nameUser : post.nameUser;
            post.phoneUser = phoneUser ? phoneUser : post.phoneUser;
            post.studentCode = studentCode ? studentCode : post.studentCode;

            post.startPoint = startPoint ? startPoint : post.startPoint;
            post.endPoint = endPoint ? endPoint : post.endPoint;
            post.timeStart = timeStart ? timeStart : post.timeStart;
            post.dateStart = dateStart ? dateStart : post.dateStart;
            post.dateStart = dateStart ? dateStart : post.dateStart;

            post.price = price ? price : post.price;
            post.note = note ? note : post.note;
            post.image = image ? image : post.image;
            post.status = status ? status : post.status;
            post.rate = rate ? rate : post.rate;
            post.comment = comment ? comment : post.comment;

            await post.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
module.exports = {
    addNew, getAll, deleteById, updateById,
    getById, getByIdUser, getByTypeFind, getByKeyWord
}