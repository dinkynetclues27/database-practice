const { QueryTypes } = require('sequelize');
const sequelize = require('../database');


const softdelete = async(req,res)=>{
    const{
        id,
    }=req.params

    try{
        await sequelize.query(`update users set is_deleted = true where id = ${id}`,{type:QueryTypes.UPDATE});

        const users = await sequelize.query(
            `Select * from users where is_deleted = false`,
            {type: QueryTypes.SELECT}
        );
        res.status(200).json(users);
    }
    catch(error){   
        console.error(error);
    }
};

module.exports =softdelete;