const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db')

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/userauth', require('./routes/user'));
app.use('/api/companyauth', require('./routes/company'));
app.use('/api/job', require('./routes/job'));

app.listen(port, ()=>{
    console.log(`applistening on port on port ${port}`)
})