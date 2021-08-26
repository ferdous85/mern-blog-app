const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')


const app = express()
dotenv.config()

app.get('/', (req, res)=>{
  res.json({msg:'hello world'})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})

