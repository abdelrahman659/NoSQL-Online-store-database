const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    try {
        const { userName, password } = req.body;
        // Check if the user already exists
        const existsUser = await User.findOne({ userName });
        if (existsUser) {
            return res.status(400).json({ message: "This user is already exist" })
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create a new user
        const newUser = new User({ userName, password: hashedPassword });
        await newUser.save();
        // Create a JWT token for authentication
        const token = jwt.sign({ userId: newUser._id }, 'your-secret-key');
        res.status(201).json({ userId: newUser._id, token });
    }
    catch (err) {
        res.status(501).json({ message: 'Registration failed' });

    }
};

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key');
        res.status(201).json({ userId: user._id, token })

    } catch (err) {
        res.status(500).json({ message: "Login failed" });
    }
}

const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "All users Data", users })
    }
    catch (err) {
        res.status(500).json(err)
    }
};


module.exports = {
    register,
    login,
    allUsers
}