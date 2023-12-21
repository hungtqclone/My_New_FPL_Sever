let express = require('express');
let router = express.Router();
const goFPTController = require('../../components/GoFPT/GoFPTController');
const upLoadImage = require("../../MiddleWare/UpLoadImage")

//http://localhost:3000/gofpt/api/add-new
router.post('/add-new', async (req, res, next) => {
    try {
        console.log("asdadsad");

        const { typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment } = req.body;
        console.log("asdadsad", typeFind, idUser, nameUser, phoneUser, studentCode, startPoint);
        const post = await goFPTController.addNew(typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment);
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, category: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/gofpt/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const post = await goFPTController.getAll();
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});


//http://localhost:3000/gofpt/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const post = await goFPTController.deleteById(id);
        if (post) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/gofpt/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const post = await goFPTController.getById(id);
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, post: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/gofpt/api/get-by-typeFind
router.get('/get-by-typeFind', async (req, res, next) => {
    try {
        const { typeFind, page } = req.query;
        const post = await goFPTController.getByTypeFind(typeFind, page);
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, post: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});


//http://localhost:3000/gofpt/api/get-by-location
router.get('/get-by-location', async (req, res, next) => {
    try {
        const { keyword, typeFind, limit } = req.query;
        console.log(keyword, typeFind, limit);
        const post = await goFPTController.getByKeyWord(keyword, typeFind, limit);
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, post: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/gofpt/api/get-by-idUser
router.get('/get-by-idUser', async (req, res, next) => {
    try {
        const { idUser, typeFind } = req.query;
        const post = await goFPTController.getByIdUser(idUser, typeFind);
        if (post) {
            return res.status(200).json({ result: true, post: post, message: "Success" });
        }
        return res.status(400).json({ result: false, post: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/gofpt/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment } = req.body;

        console.log(id);
        const category = await goFPTController.updateById(id, typeFind, idUser, nameUser, phoneUser, studentCode, startPoint,
            endPoint, timeStart, dateStart, price, note, image, status, rate, comment);
        if (category) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/user/gofpt/upload-image
router.post('/upload-image', [upLoadImage.single('image')], async (req, res, next) => {
    try {
        const { file } = req;
        if (file) {
            const link = `http://10.0.2.2:3000/images/${file.filename}`;
            return res.status(200).json({ result: true, link: link })
        }
        return res.status(400).json({ result: false, link: null })

    } catch (error) {
        console.log("Failed to updaload error:" + error);
        return res.status(500).json({ result: false, massage: "Failed to updaload avatar" })
    }
})
module.exports = router;