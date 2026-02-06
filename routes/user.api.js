const express = requrie('express');
const router = express.Router();

router.post("/", userController.createUser);
router.post("/login", userController.loginWithEmail);

module.exports = router;