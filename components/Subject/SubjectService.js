const subjectModel = require('./SubjectModel')

const addNew = async (nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt) => {
    try {
        const subject = {
            nameSubject, codeSubject, instructor, credits,
            description, createdAt, updatedAt
        }
        const p = new subjectModel(subject);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new Subjects error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {
        return subjectModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByName = async (nameSubject) => {
    try {

        const subject =await subjectModel.find({ nameSubject: { $regex: nameSubject, $options: 'i' }, });
        if (subject.length === 0) {
            return false
        }
        return subject
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getAll = async () => {
    try {
        return subjectModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return subjectModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt) => {
    try {
        const subject = await subjectModel.findById(id)
        if (subject) {
            subject.nameSubject = nameSubject ? nameSubject : subject.nameSubject;
            subject.codeSubject = codeSubject ? codeSubject : subject.codeSubject;
            subject.instructor = instructor ? instructor : subject.instructor;
            subject.credits = credits ? credits : subject.credits;

            subject.description = description ? description : subject.description;
            subject.createdAt = createdAt ? createdAt : subject.createdAt;
            subject.updatedAt = updatedAt ? updatedAt : subject.updatedAt;
            await subject.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}


module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByName
}
