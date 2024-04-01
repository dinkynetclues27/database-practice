const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');
const genreupdatedata = async(req,res)=>{
    const{
        genreid,
    }=req.params
    const{
        genrename       
        }=req.body

    try{
        await sequelize.query(
            `UPDATE genre set
            genrename = '${genrename}'
            where genreid = '${genreid}'`,
            {type: QueryTypes.UPDATE});
            res.status(200).json({message: "updated"});
    }catch(error){
        console.error(error);
    }
}
module.exports = genreupdatedata;