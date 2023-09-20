const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");

// router.post('/createUser', async (req, res) => {
//     try {
//         const { userName, password } = req.body;
//         const user = new User({
//             userName,
//             password
//         });

//         await user.save();
//         res.status(200).json({ message: "User created Successfully", user });
//     }
//     catch (err) {
//         res.status(501).json(err)
//     }
// });

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get("/allUsers", userController.allUsers);

module.exports = router;