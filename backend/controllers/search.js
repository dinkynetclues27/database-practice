const { QueryTypes } = require("sequelize");
const sequelize = require("../database");

const search = async (req, res) => {
    const keyword = req.query.keyword;
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10;
    const skip = (page - 1) * pagesize

    try {
        // const results = await sequelize.query(`
        //     SELECT 'Book' AS type, bookid AS book_id,title as book_title,description as book_description FROM book WHERE title LIKE '%${keyword}%' OR description LIKE '%${keyword}%'
        //     UNION
        //     SELECT 'Author' AS type, authorid AS author_id,authorname as author_name, biography as author_biography FROM author WHERE authorname LIKE '%${keyword}%' OR biography LIKE '%${keyword}%'
        //     UNION
        //     SELECT 'Genre' AS type, genreid AS genre_id, genrename as genre_name FROM genre WHERE genrename LIKE '%${keyword}%'
        //     Limit ${pagesize} offset ${skip}
        //     `, {
        //     type: QueryTypes.SELECT
        // });

        // res.status(200).json({ results });
        const books = await sequelize.query(`
            SELECT 'Book' AS type, bookid AS book_id, title AS book_title, description as book_description FROM book WHERE title LIKE '%${keyword}%' 
            LIMIT ${pagesize} OFFSET ${skip}
        `, {
            type: QueryTypes.SELECT
        });

        const authors = await sequelize.query(`
            SELECT 'Author' AS type, authorid AS author_id, authorname AS author_name, biography AS author_biography FROM author WHERE authorname LIKE '%${keyword}%' 
            LIMIT ${pagesize} OFFSET ${skip}
        `, {
            type: QueryTypes.SELECT
        });

        const genres = await sequelize.query(`
            SELECT 'Genre' AS type, genreid AS genre_id, genrename AS genre_name FROM genre WHERE genrename LIKE '%${keyword}%'
            LIMIT ${pagesize} OFFSET ${skip}
        `, {
            type: QueryTypes.SELECT
        });
        const results = [...books, ...authors, ...genres];
        res.status(200).json({ results });

    } catch (error) {
        console.error("Error searching:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = search;
