const express = require("express");
const cors = require("cors");
const passport = require('passport')
const Router = require('./routes/routes')
require('dotenv').config()
require('./config/database')
const app = express()

// middlewares

app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use('/api', Router)

app.listen(4000 ,()=> console.log('Server listening on port 4000'))