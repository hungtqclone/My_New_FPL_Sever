const newsService = require('./NewsService');

const addNew = async (typeCategory,title, content,author, date,image) => {
    try {
        return await newsService.addNew(typeCategory,title, content,author, date,image);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await newsService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async (createAt) => {
    try {
        return await newsService.getAll(createAt);
    } catch (error) {
        return false;
    }
}

const getSearchByCategory = async(id) =>{
    try {
        return await newsService.getSearchByCategory(id);
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await newsService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (typeCategory,id,title,content,author,date) => {
    try {
        return await newsService.updateById(typeCategory,id,title,content,author,date);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await newsService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByTitle,getSearchByCategory
};