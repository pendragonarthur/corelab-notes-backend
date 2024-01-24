/* eslint-disable no-undef */
import express from 'express'
import dotenv from 'dotenv'
import router from '../src/router/router.js'
import mongoose from 'mongoose'
import cors from 'cors'

// Setting dotenv
dotenv.config()

// Initializing express
const app = express()

// Disabling eslint on "process.env.PORT"
const port = 5000 || process.env.PORT

// Using express.json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Using and configuring cors
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

// Using router
app.use(router)

// Home endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// Connect to MongoDB
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qnvaww2.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
    console.log('Connected to database')
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error}`)
  })
