const express = require('express')
const mongoose = require('mongoose')
const morgan = require ('morgan')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(express.json());

app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/', (req, res) =>{
    res.send('Hello')
})





app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  
    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      console.log("connected to mongo");
    });
  });