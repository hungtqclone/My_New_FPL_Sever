const SubjectService = require('./SubjectService');

const addNew = async (nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt ) => {
    try {
        return await SubjectService.addNew(nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt );
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await SubjectService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await SubjectService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await SubjectService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt ) => {
    try {
        return await SubjectService.updateById(id,nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt );
    } catch (error) {
        return false;
    }
}
const getByName = async (nameSubject) => {
    try {
        return await SubjectService.getByName(nameSubject);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew , getById, getAll, deleteById,
    updateById,getByName,
};