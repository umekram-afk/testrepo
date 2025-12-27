const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied.' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};
module.exports = authMiddleware;
// src/services/userService.js
const User = require('../models/userModel');
// Function to find user by ID
exports.findUserById = async (userId) => {
    return await User.findById(userId);
};