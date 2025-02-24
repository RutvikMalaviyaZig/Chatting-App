const  express  = require('../../utils/Constants')

const router = express.Router();

const RoomController = require('../../controllers/chatController/RoomController')

const { verifyAuthMiddleware } = require('../../middleware/verfiyAuthMIddleware')


router.use(verifyAuthMiddleware)

router.post('/create', RoomController.createRoom)
router.post('join-room', RoomController.joinRoom)
router.post('/leave', RoomController.leaveRoom)


module.exports = router;