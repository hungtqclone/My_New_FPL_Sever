let express = require('express');
let router = express.Router();
const SubjectController = require('../../components/Subject/SubjectController')

//http://localhost:3000/subject/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const subject = await SubjectController.getAll();
        if (subject) {
            return res.status(200).json({ result: true, subject: subject, message: "Success" });
        }
        return res.status(400).json({ result: false, subject: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/subject/api/add-new
router.post('/add-new', async (req, res, next) => {
    try {
        const { nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt } = req.body;
        const subject = await SubjectController.addNew(nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt);
        if (subject) {
            return res.status(200).json({ result: true, subject: subject, message: "Add subject Success" });
        }
        return res.status(400).json({ result: false, subject: null, message: "Add subject Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/subject/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const subject = await SubjectController.getById(id);
        if (subject) {
            return res.status(200).json({ result: true, subject: subject, message: "Success" });
        }
        return res.status(400).json({ result: false, subject: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/subject/api/get-by-name-subject
router.get('/get-by-name-subject', async (req, res, next) => {
    try {
        const { nameSubject } = req.query;
        const news = await SubjectController.getByName(nameSubject);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/subject/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const subject = await SubjectController.deleteById(id);
        if (subject) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/subject/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt } = req.body;

        console.log(id);
        const subject = await SubjectController.updateById(id, nameSubject, codeSubject, instructor, credits, description, createdAt, updatedAt);
        if (subject) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});







module.exports = router;
