const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('dotenv');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing' });
  }
  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    } else {
      try {
        const user = await sequelize.query(
          `SELECT * FROM users WHERE email = '${decoded.email}'`,
          { type: QueryTypes.SELECT }
        );

        if (user.length === 0) {
          return res.status(401).json({ error: 'User not found' });
        }
        req.user = decoded;
        next();
      } catch (error) {
        console.error('Error verifying user:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }
  });
};

module.exports = authenticateUser;
