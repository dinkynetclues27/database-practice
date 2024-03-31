// const express = require("express");
// const authenticateUser = require("../middlewares/authenticate");

// const insertdata = require("../controllers/insert");
// const updatedata = require("../controllers/update");
// const listdata = require("../controllers/list")
// const getbyiddata = require("../controllers/getbyid")
// const getuserwithdepartment = require("../controllers/getuserwithdepartment")
// const softdelete = require("../controllers/softdelete")
// const login = require("../controllers/login")

// const routers = express.Router();

// routers.post("/insert",authenticateUser,insertdata);
// routers.put("/update/:id",authenticateUser,updatedata);
// routers.get("/list",authenticateUser,listdata);
// routers.get("/getbyid/:id",authenticateUser,getbyiddata);
// routers.get("/userwdepartment",authenticateUser,getuserwithdepartment);
// routers.get("/softdelete/:id",authenticateUser,softdelete);
// routers.post("/login",login)

// module.exports = routers;

const express = require("express");
const authenticateUser = require("../middlewares/authenticate");

const insertdata = require("../controllers/insert");
const updatedata = require("../controllers/update");
const listdata = require("../controllers/list")
const getbyiddata = require("../controllers/getbyid")
const getuserwithdepartment = require("../controllers/getuserwithdepartment")
const softdelete = require("../controllers/softdelete")
const login = require("../controllers/login")
const bookinsertdata = require("../controllers/book/bookinsert");
const bookupdatedata = require("../controllers/book/bookupdate");
const authorinsertdata = require("../controllers/author/authorinsert");
const authorupdatedata = require("../controllers/author/authorupdate");
const genreinsertdata = require("../controllers/genre/genreinsert")
const genreupdatedata = require("../controllers/genre/genreupdate")
const search = require("../controllers/search")
const deletebook = require("../controllers/delete")
//const profilePicUploadMiddleware = require("../middlewares/profilepicmiddleware");
const routers = express.Router();

// Routes with authentication
routers.post("/insert", insertdata);
routers.put("/update/:id", authenticateUser, updatedata);
routers.get("/list", authenticateUser, listdata);
routers.get("/getbyid/:id", authenticateUser, getbyiddata);
routers.get("/userwdepartment", authenticateUser, getuserwithdepartment);
routers.get("/softdelete/:id", authenticateUser, softdelete);
routers.post("/bookinsert",bookinsertdata)
routers.post("/authorinsert",authorinsertdata)
routers.get("/bookupdate/:bookid",authenticateUser,bookupdatedata)
routers.get("/authorupdate/:authorid",authenticateUser,authorupdatedata)
routers.post("/genreinsert",genreinsertdata)
routers.get("/genreupdate/:genreid",authenticateUser,genreupdatedata)
routers.get("/search",search)
routers.delete("/deletebook/:bookid", deletebook)
// Route without authentication (login)
routers.post("/login", login);

module.exports = routers;
