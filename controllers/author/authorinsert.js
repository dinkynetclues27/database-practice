const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");
const authorinsertdata = async(req,res)=>{
    const {
        authorid,
        authorname,
        biography
    } = req.body
    try{
        await sequelize.query(`Insert into author (authorid,authorname,biography) Values 
        (${authorid},'${authorname}','${biography}')`,
        {
            type:QueryTypes.INSERT,
        });
        res.status(200).json({ message: "Author added successfully" });
    }
    catch(error){
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = authorinsertdata;