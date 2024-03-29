require('dotenv').config();
const sequelize = require('./database');
const User = require('./modules/user');
const Department = require('./modules/department')
const express = require('express');
const bodyParser = require('body-parser');

const path = require("path")
const routers = require('./routes/route')
const port = process.env.PORT
const app = express();
app.use(bodyParser.json());

app.use("/public/assets", express.static(path.join(__dirname, 'public', 'assets')))
app.use(routers);
sequelize;
app.listen(port, () => {
    console.log("Server is running on port 3000");
  });

