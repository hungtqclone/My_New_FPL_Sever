const categoryService = require('./CategoryService');

const addNew = async (name) => {
    try {
        return await categoryService.addNew(name);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await categoryService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async (createAt) => {
    try {
        return await categoryService.getAll(createAt);
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await categoryService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,name) => {
    try {
        return await categoryService.updateById(id,name);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await categoryService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByTitle,
};