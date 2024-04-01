// const { QueryTypes } = require("sequelize");
// const sequelize = require("../database");
// const user = require('../modules/user')
// const  bcrypt = require('bcrypt')

// const insertdata = async(req,res)=>{
    
//     const {
//         id,
//         firstname,
//         lastname,
//         email,
//         password,
//         gender,
//         hobbies,
//         departmentid
//       } = req.body;
    
//       const securPass = await bcrypt.hash(password,10)

//     try{
//         await sequelize.query(`Insert INTO Users (id,firstname,lastname,email,password,gender,hobbies,departmentid)
//         VALUES (${id},'${firstname}','${lastname}','${email}','${securPass}','${gender}','${hobbies}',${departmentid})`,
//         {
//             type:QueryTypes.INSERT,
//         });
//         res.status(200).json({ message: "User added successfully" });
//     }
//     catch(error){
//         console.error("Error adding user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = insertdata;

const { QueryTypes } = require("sequelize");
const sequelize = require("../database");
const user = require('../modules/user')
const  bcrypt = require('bcrypt')
const profilepictureauthenticate = require('../middlewares/profilepictureauthenticate')

const insertdata = async(req,res)=>{
    try{
        await profilepictureauthenticate(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ error: err });
            }

            if (!req.file) {
                return res.status(400).json({ error: "Error: No File Selected!" });
            }
    
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

      const securPass = await bcrypt.hash(password,10)

      const profile_picture = req.file

   

        await sequelize.query(`Insert INTO Users (id,firstname,lastname,email,password,gender,hobbies,departmentid,profile_picture)
        VALUES (${id},'${firstname}','${lastname}','${email}','${securPass}','${gender}','${hobbies}',${departmentid},'${profile_picture.filename}')`,
        {
            type:QueryTypes.INSERT,
        });
        res.status(200).json({ message: "User added successfully" });
    });
    }
    catch(error){
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = insertdata;