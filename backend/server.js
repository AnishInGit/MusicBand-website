import express from 'express'
import connectToMongo from "./db.js"
import cors from 'cors'
import router from './routers/route.js'

const port = 4000

const app = express()
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/',router)

app.listen(port, () => {
    connectToMongo();
  console.log(`Server app listening on port ${port}`)
})