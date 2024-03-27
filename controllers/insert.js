const { QueryTypes } = require("sequelize");
const sequelize = require("../database");
const user = require('../modules/user')

const insertdata = async(req,res)=>{
    const {
        id,
        firstname,
        lastname,
        email,
        password,
        gender,
        hobbies,
        departmentid
      } = req.body;
    
    try{
        await sequelize.query(`Insert INTO Users (id,firstname,lastname,email,password,gender,hobbies,departmentid)
        VALUES (${id},'${firstname}','${lastname}','${email}','${password}','${gender}','${hobbies}',${departmentid})`,
        {
            type:QueryTypes.INSERT,
        });
        res.status(200).json({ message: "User added successfully" });
    }
    catch(error){
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = insertdata;