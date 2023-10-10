const newsModel = require('./NewsModel')

const addNew = async (typeCategory,title, content, author, date, image) => {
    try {
        const news = {
            typeCategory,title, content, author, date, image
        }
        const p = new newsModel(news);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new news error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return newsModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByTitle = async (title) => {
    try {

        const news = await newsModel.find({ title: { $regex: title, $options: 'i' }, });
        if (news.length === 0) {
            return false
        }
        return news
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getAll = async (createAt) => {
    try {
        return newsModel.find().skip(0).sort({content:-1})
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getSearchByCategory = async (id) => {
    try {

        return newsModel.find({typeCategory:id},'title author content date image typeCategory').populate("typeCategory","name")
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return newsModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, title, content, author, date,typeCategory) => {
    try {
        const news = await newsModel.findById(id)
        if (news) {
            news.typeCategory = typeCategory ? typeCategory : news.typeCategory;
            news.title = title ? title : news.title;
            news.content = content ? content : news.content;
            news.author = author ? author : news.author;
            news.date = date ? date : news.date;
            await news.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById, getByTitle,getSearchByCategory
}
