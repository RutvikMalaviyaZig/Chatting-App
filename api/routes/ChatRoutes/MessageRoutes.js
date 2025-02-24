const  express  = require('../../utils/Constants')

const router = express.Router();

const MessageController = require('../../controllers/chatController/MessageContoller')


router.post('/create', MessageController.sendMessage)
router.post('/read', MessageController.isRead)

module.exports = router;