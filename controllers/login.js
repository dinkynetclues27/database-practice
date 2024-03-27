const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database');

const login = async (req, res) => {
    const { firstname, password } = req.body;

    try {
        const fname = await sequelize.query(
            `SELECT * FROM users WHERE firstname = :firstname`,
            {
                replacements: { firstname },
                type: QueryTypes.SELECT
            }
        );
        if (fname.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await sequelize.query(
            `SELECT * FROM users WHERE password = :password`,
            {
                replacements: { password },
                type: QueryTypes.SELECT
            });
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = login;
