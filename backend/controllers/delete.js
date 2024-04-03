const { QueryTypes } = require("sequelize");
const sequelize = require("../database"); 

const deletebook = async (req,res) => {
    try {
        bookid = parseInt(req.params.bookid);
        const authors = await sequelize.query(
            `SELECT * FROM bookwauthor WHERE bookid = :bookid`,
            {
                replacements: { bookid },
                type: QueryTypes.SELECT
            }
        );

        const genres = await sequelize.query(
            `SELECT * FROM bookwgenre WHERE bookid = :bookid`,
            {
                replacements: { bookid },
                type: QueryTypes.SELECT
            }
        );

        if (authors.length > 0 || genres.length > 0) {
            console.log("Book cannot be deleted as it is associated with author or genre.");
            res.status(409).send("Book cannot be deleted as it is associated with author or genre.").end()
            return;
        }

        await sequelize.query(
            `DELETE FROM book WHERE bookid = :bookid`,
            {
                replacements: { bookid },
                type: QueryTypes.DELETE
            }
        );

        res.status(200).send("Done")
        console.log("book deleted successfully.");
    } catch (error) {
        console.error("Error deleting author:", error);
    }
};

module.exports = deletebook;
