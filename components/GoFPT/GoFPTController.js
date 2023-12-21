const goFPTService = require('./GoFPTSevice');

const addNew = async (typeFind, idUser, nameUser, phoneUser, studentCode, startPoint, endPoint, timeStart, dateStart, price, note, image, status, rate, comment) => {
    try {
        return await goFPTService.addNew(typeFind, idUser, nameUser, phoneUser, studentCode, startPoint, endPoint, timeStart, dateStart, price, note, image, status, rate, comment);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await goFPTService.getAll();
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await goFPTService.getById(id);
    } catch (error) {
        return false;
    }
}
const getByIdUser = async (id, typeFind) => {
    try {
        return await goFPTService.getByIdUser(id, typeFind);
    } catch (error) {
        return false;
    }
}
const getByTypeFind = async (typeFind, page) => {
    try {
        return await goFPTService.getByTypeFind(typeFind, page);
    } catch (error) {
        return false;
    }
}
const getByKeyWord = async (keyword, typeFind, limit) => {
    try {
        return await goFPTService.getByKeyWord(keyword, typeFind, limit);
    } catch (error) {
        return false;
    }
}

const deleteById = async (id) => {
    try {
        return await goFPTService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id, typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
    endPoint, timeStart, dateStart, price, note, image, status, rate, comment) => {
    try {
        return await goFPTService.updateById(id, typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getAll, deleteById, updateById,
    getById, getByIdUser, getByTypeFind, getByKeyWord
}