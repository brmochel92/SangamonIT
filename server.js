const express = require('express');

const cors = require('cors')


const connectDB = require('./DB/Connection');
const app = express();

connectDB();


app.use(cors());


app.use(express.json({ extended:false }));

app.use('/api/userModel', require('./Api/User'));
app.use('/api/usercellQuotes', require('./Api/cellQuotes'));
app.use('/api/userconsoleQuotes', require('./Api/consoleQuotes'));
app.use('/api/usercustompcQuotes', require('./Api/custompcQuotes'));
app.use('/api/userlaptopQuotes', require('./Api/laptopQuotes'));
app.use('/api/userserverQuotes', require('./Api/serverQuotes'));
const Port = process.env.Port || 5000;

app.listen(Port, () => console.log("Server started"));


