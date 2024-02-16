const express = require('express')
const dotenv = require('dotenv').config()
const cors = require ('cors')
const {mongoose} = require ('mongoose')
const app  = express();
const cookieParser = require('cookie-parser')


//databse connection
mongoose.connect (process.env.MONGO_URL)
.then(() =>{
    console.log("Database Connected");
})
.catch(() =>{
    console.log(error);
})

//middelware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/',require('./routes/authRoutes.jsx'))
app.use(cors())

app.get('/api/data', async (req, res) => {
    try {
      const data = await DataModel.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const port = 8000;
app.listen(port , () =>{
    console.log(`Server is running on ${port}`);


})