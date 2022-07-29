import express from "express"
import connectDB from "./db/connectdb.js"
import web from "./Router/web.js"
const app = express()
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://kapil:kapil123@cluster0.yuhndfg.mongodb.net/geolocation?retryWrites=true&w=majority"

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes
app.use("/api", web)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
 })