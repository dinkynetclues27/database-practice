const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");
const bookinsertdata = async(req,res)=>{
    const {
        bookid,
        title,
        description,
        publish_year,
        quantity
    } = req.body
    try{
        await sequelize.query(`Insert into book (bookid,title,description,publish_year,quantity) Values 
        (${bookid},'${title}','${description}','${publish_year}','${quantity}')`,
        {
            type:QueryTypes.INSERT,
        });
        res.status(200).json({ message: "Book added successfully" });
    }
    catch(error){
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = bookinsertdata;