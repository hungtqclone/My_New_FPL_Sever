var express = require('express');
var router = express.Router();
const scheduleStudyController = require('../../components/ScheduleStudy/ScheduleStudyController')

//http://localhost:3000/scheduleStudy/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const scheduleStudy = await scheduleStudyController.getAll();
        console.log("======>", scheduleStudy);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, schedule: null, message: "Failed" });
    } catch (error) {
        console.log("500 >>>>> ", error);
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const scheduleStudy = await scheduleStudyController.getById(id);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-current-day
router.get('/get-by-current-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        console.log("currentDay",currentDay);
        const scheduleStudy = await scheduleStudyController.getByCurrentDay(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-7-day
router.get('/get-by-7-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        console.log(currentDay);
        const scheduleStudy = await scheduleStudyController.getBy7Day(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});


//http://localhost:3000/scheduleStudy/api/get-by-7-day
router.get('/get-by-14-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleStudy = await scheduleStudyController.getBy14Day(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-7-day
router.get('/get-by-30-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleStudy = await scheduleStudyController.getBy30Day(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-7-day
router.get('/get-by-60-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleStudy = await scheduleStudyController.getBy60Day(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/get-by-7-day
router.get('/get-by-90-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleStudy = await scheduleStudyController.getBy90Day(currentDay);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/scheduleStudy/api/add-new
router.post('/add-new', async (req, res, next) => {
    try {
        const { idSubject, shift, location, time, date, lesson } = req.body;
        const scheduleStudy = await scheduleStudyController.addNew(idSubject,shift,location,time,date,lesson);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, scheduleStudy: scheduleStudy, message: "Add scheduleStudy Success" });
        }
        return res.status(400).json({ result: false, scheduleStudy: null, message: "Add scheduleStudy Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { idSubject, shift, location, time, date, lesson } = req.body;

        console.log(id);
        const scheduleStudy = await scheduleStudyController.updateById(id,idSubject,shift,location,time,date,lesson);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleStudy/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const scheduleStudy = await scheduleStudyController.deleteById(id);
        if (scheduleStudy) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

module.exports = router;