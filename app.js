const sequelize = require('./database');
const User = require('./modules/user');
const Department = require('./modules/department')
const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/route')

const app = express();
app.use(bodyParser.json());
app.use(routers);
sequelize;
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

