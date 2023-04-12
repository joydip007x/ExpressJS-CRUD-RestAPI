
const Express=require('express');
const mongoose= require('mongoose');

require('dotenv').config();

const moviesRoute= require('./routes/moviesRoute')

const dbURL= process.env.MONGODB_URL;
mongoose.connect(dbURL,{useUnifiedTopology:true, useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
    console.log('Mongo DB connection Successfull');
})

const app=Express();
app.use(Express.json())

app.get('/', (req,res)=>{
    res.send("<h2><b>Server ON</b><h2>")
})

app.use('/movies/',moviesRoute);

const port= process.env.PORT;
app.listen(port,()=>"Listen to $port")