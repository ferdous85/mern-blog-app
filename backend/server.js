const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

const notes = require('./data/notes')


const app = express()
dotenv.config()

app.get('/', (req, res)=>{
  res.json({msg:'hello world'})
})

app.get('/notes/:id', (req, res)=>{
  const note = notes.find((n)=>n._id === req.params.id)  
  res.send(note)
})

app.get('/notes', (req, res)=>{  
  res.send(notes)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})

