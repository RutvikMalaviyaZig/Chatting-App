const express = require('../../utils/Constants') 
const router = express.Router();


const roomRoutes = require("./RoomRoutes");
const chatRoutes = require('./MessageRoutes')

router.use("/rm",roomRoutes); 
router.use('/msg', chatRoutes)


module.exports = router;