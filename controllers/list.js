const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const Users = require('../modules/user')

const listdata = async(req,res)=>{
    try{
        const fetchusers = await sequelize.query(
            `Select * from users`,
            {type: QueryTypes.SELECT}
        );
        res.status(200).json(fetchusers);
        console.log(fetchusers);
    }
    catch(error){   
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = listdata;