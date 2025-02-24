const express = require('../utils/Constants') 
const router = express.Router();

const AuthRoute = require("./UserRoutes")
const ChatRoutes = require('./ChatRoutes')

router.use('/auth', AuthRoute);
router.use('/room', ChatRoutes)


module.exports = router;