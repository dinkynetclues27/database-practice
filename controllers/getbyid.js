const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const Users = require('../modules/user')

const getbyiddata = async(req,res)=>{
    const{
        id,
    }=req.params
    console.log(id);

    try{
        const data = await sequelize.query(
            `Select * from users where id = ${id}`,
            {type: QueryTypes.SELECT}
        );
        res.status(200).json(data);
    }
    catch(error){   
        console.error(error);
    }
};

module.exports = getbyiddata;