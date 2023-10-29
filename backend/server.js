const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', require('./routes/api'));


 app.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`)
 })