const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');
const bookupdatedata = async(req,res)=>{
    const{
        bookid,
    }=req.params
    const{
        title,
        description,
        publish_year,
        quantity        
        }=req.body

    try{
        await sequelize.query(
            `UPDATE book set
            title = '${title}',
            description = '${description}',
            publish_year = '${publish_year}',
            quantity = '${quantity}' 
            where bookid = '${bookid}'`,
            {type: QueryTypes.UPDATE});
            res.status(200).json({message: "updated"});
    }catch(error){
        console.error(error);
    }
}
module.exports = bookupdatedata;