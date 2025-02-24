const express = require('../../utils/Constants') 
const router = express.Router();


const authRoutes = require("./AuthRoutes");


router.use("/v1", authRoutes); // route for all authentication


module.exports = router;