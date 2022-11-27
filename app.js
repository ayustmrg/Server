const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5555
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 

dbConnect()

app.use(cors());
app.use(express.json())
app.listen(PORT, () => {
    console.log("server running on PORT", PORT)
})

