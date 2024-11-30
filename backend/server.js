const express= require('express');
const cors=require('cors');
const router = require('./router/indexRouter');
require('dotenv').config();
const app= express();
app.use(express.json());
app.use(cors());
const port= process.env.PORT;
app.use('/',router);

app.listen(port,()=>{
    console.log(`Litening on ${port}`);
});
