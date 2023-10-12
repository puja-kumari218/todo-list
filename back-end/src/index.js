const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const app=express();
dotenv.config();

const todoRoutes = require('./routes/todo');

app.use(express.json());
app.use(cors());
app.use("/api", todoRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.listen(process.env.PORT || 3001,()=>{
    console.log('Server is running on port ' + process.env.PORT || 3001);
});