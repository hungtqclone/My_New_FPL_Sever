let express = require('express');
let router = express.Router();
const CategoryController = require('../../components/Phone/PhoneController')

//http://localhost:3000/category/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const category = await CategoryController.getAll();
        if (category) {
            return res.status(200).json({ result: true, category: category, message: "Success" });
        }
        return res.status(400).json({ result: false, category: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/phone/api/add-new
router.post('/add-new', async (req, res, next) => {
    try {
        const { name, price, quantity } = req.body;
        console.log(name, price, quantity);
        if (price > 0) {
            if (quantity > 0 && quantity < 100) {
                const category = await CategoryController.addNew(name, price, quantity);
                if (category) {
                    return res.status(200).json({ result: true, category: category, message: "Add category Success" });
                }

            } else {
                console.log("bbb");
                return res.status(400).json({ result: false, category: null, message: "Add category Failed" });
            }
        }
        else {
            console.log("aaaa");
            return res.status(400).json({ result: false, category: null, message: "Add category Failed" });
        }


    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/category/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const category = await CategoryController.getById(id);
        if (category) {
            return res.status(200).json({ result: true, category: category, message: "Success" });
        }
        return res.status(400).json({ result: false, category: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/category/api/get-by-name-category
router.get('/get-by-name-category', async (req, res, next) => {
    try {
        const { name } = req.query;
        const news = await CategoryController.getByName(name);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/category/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const category = await CategoryController.deleteById(id);
        if (category) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/category/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { name } = req.body;

        console.log(id);
        const category = await CategoryController.updateById(id, name);
        if (category) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});







module.exports = router;
