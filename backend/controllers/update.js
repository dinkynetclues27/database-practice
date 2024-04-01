const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const Users = require('../modules/user')

const updatedata = async(req,res)=>{
    const{
        id,
    }=req.params
    console.log(id);
    const{
    firstname,
    lastname,
    email,
    password,
    gender,
    hobbies
    
    }=req.body
    try{
        await sequelize.query(
            `UPDATE Users set 
            firstname = '${firstname}',
            lastname = '${lastname}',
            email = '${email}',
            password = '${password}',
            gender = '${gender}',
            hobbies = '${hobbies}'
          
            where id = ${id}`,
            {type: QueryTypes.UPDATE}
        );
        res.status(200).json({message: "updated"});
    }
    catch(error){   
        console.error(error);
    }
};

module.exports = updatedata;