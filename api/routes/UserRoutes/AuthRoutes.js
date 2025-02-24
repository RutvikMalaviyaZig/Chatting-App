const express = require('../../utils/Constants')
const { verifyAuthMiddleware } = require('../../middleware/verfiyAuthMIddleware')

const {
  handleEmailLogin,
  handleMobileLogin,
  handleSignup,
  handleLogout,
} = require("../../controllers/userController/AuthController");

const router = express.Router();

router.post("/email/login", handleEmailLogin); // Login with email and password
router.post("/mobile/login", handleMobileLogin);  // Login with mobile number and password
router.post("/signup", handleSignup); // Signup
router.post("/logout", verifyAuthMiddleware, handleLogout); // Logout

module.exports = router;