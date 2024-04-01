const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");
const genreinsertdata = async(req,res)=>{
    const {
        genreid,
        genrename
    } = req.body
    try{
        await sequelize.query(`Insert into genre (genreid,genrename) Values 
        (${genreid},'${genrename}')`,
        {
            type:QueryTypes.INSERT,
        });
        res.status(200).json({ message: "Genre added successfully" });
    }
    catch(error){
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = genreinsertdata;