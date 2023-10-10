var express = require('express');
var router = express.Router();
const { createMessage, getMessage } = require('../../components/Message/MessageController')

// http://localhost:3000/message/api
router.post("/", createMessage)
router.get("/:chatId", getMessage)


module.exports = router;
