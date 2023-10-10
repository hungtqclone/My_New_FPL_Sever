var express = require('express');
var router = express.Router();
const newsController = require('../../components/News/NewsController')
const upLoadImage = require("../../MiddleWare/UpLoadImage")


//http://localhost:3000/news/api/add-new
router.post('/add-new', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        let { body, file } = req;
        if (file) {
            file = `http://10.0.2.2:3000/images/${file.filename}`;
            body = { ...body, image: file };
            console.log("link upload hình:", file);
        }
        const { typeCategory,title, content,author, date ,image = file} = req.body;
        console.log("++++>",typeCategory,title, content,author, date ,image);
        const news = await newsController.addNew(typeCategory, title, content,author, date,image);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Add New Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Add New Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const news = await newsController.getById(id);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-by-title
router.get('/get-by-title', async (req, res, next) => {
    try {
        const { title } = req.query;
        const news = await newsController.getByTitle(title);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const {createAt}=req.query;
        const news = await newsController.getAll(createAt)
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/news/api/search-by-category
router.get('/search-by-category', async (req, res, next) => {
    try {
        const {id}=req.query;
        const news = await newsController.getSearchByCategory(id)
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//
//http://localhost:3000/news/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const news = await newsController.deleteById(id);
        if (news) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { title,content,author,date } = req.body;

        console.log(id);
        const news = await newsController.updateById(id,title,content,author,date);
        if (news) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});







module.exports = router;
