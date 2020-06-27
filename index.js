const express = require('express');
const mongoose = require('mongoose');
const app = express();

const UserRouter = require('./routes/users');

const port = process.env.port || 8080;
const connectionString = "mongodb+srv://flutter_hackathon:hello@1234@flutterhackathon-cqmco.mongodb.net/pandemicHealer?retryWrites=true&w=majority";

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/api/user', UserRouter);

mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
    console.log("database connected");
})

app.listen(port, () => {
    console.log(`server running in the port: ${port}`);
});

