const express = require("express");

const insertdata = require("../controllers/insert");
const updatedata = require("../controllers/update");
const listdata = require("../controllers/list")
const getbyiddata = require("../controllers/getbyid")
const getuserwithdepartment = require("../controllers/getuserwithdepartment")
const softdelete = require("../controllers/softdelete")
const login = require("../controllers/login")

const routers = express.Router();

routers.post("/insert",insertdata);
routers.put("/update/:id",updatedata);
routers.get("/list",listdata);
routers.get("/getbyid/:id",getbyiddata);
routers.get("/userwdepartment",getuserwithdepartment);
routers.get("/softdelete/:id",softdelete);
routers.get("/login",login)

module.exports = routers;