var express = require('express');
var router = express.Router();
const { createChat, findChat, findUserChats } = require('../../components/Chat/ChatController')


router.post("/", createChat)
router.get("find-user-chats/:userId", findUserChats)
router.get("/find/:firstId/:secondId", findChat)

module.exports = router;
