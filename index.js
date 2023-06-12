require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

const mongoose = require('mongoose')
try {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection;
  if (!db) console.log("Error connecting db")
  else console.log("Db connected successfully")
} catch (error) {
  console.error(error)
}

const account = require('./account/routes');
app.use('/account', account)

const product = require('./product/routes')
app.use('/product', product)


app.get('/', (req, res, next) => {
  res.send('It works')
})

app.listen(port, () => {
  console.log(`run on http://localhost:${port}`)
})