const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');
const authorupdatedata = async(req,res)=>{
    const{
        authorid,
    }=req.params
    const{
        authorname,
        biography        
        }=req.body

    try{
        await sequelize.query(
            `UPDATE author set
            authorname = '${authorname}',
            biography = '${biography}' 
            where authorid = '${authorid}'`,
            {type: QueryTypes.UPDATE});
            res.status(200).json({message: "updated"});
    }catch(error){
        console.error(error);
    }
}
module.exports = authorupdatedata;