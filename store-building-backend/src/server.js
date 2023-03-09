const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes.js')

const app = express()
const port = 5000

mongoose.connect("mongodb://127.0.0.1:27017/store-building",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));


app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})