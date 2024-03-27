const { QueryTypes } = require('sequelize');
const sequelize = require('../database');

const getuserwithdepartment = async(req,res)=>{

    try{
        const userwithdata = await sequelize.query(
            `Select u.*,d.departmentname from users u INNER JOIN departments d on u.departmentid = d.departmentid`,
            {type: QueryTypes.SELECT}
        );
        res.status(200).json(userwithdata);
        console.log(userwithdata);
    }
    catch(error){   
        console.error(error);
    }
};

module.exports = getuserwithdepartment;