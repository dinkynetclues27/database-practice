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
//const profilePicUploadMiddleware = require("../middlewares/profilepicmiddleware");
const routers = express.Router();

// Routes with authentication
routers.post("/insert", insertdata);
routers.put("/update/:id", authenticateUser, updatedata);
routers.get("/list", authenticateUser, listdata);
routers.get("/getbyid/:id", authenticateUser, getbyiddata);
routers.get("/userwdepartment", authenticateUser, getuserwithdepartment);
routers.get("/softdelete/:id", authenticateUser, softdelete);

// Route without authentication (login)
routers.post("/login", login);

module.exports = routers;
