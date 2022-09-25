const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routersUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE, ()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routersUrls)
app.listen(4000,() => console.log("server is up and running"))