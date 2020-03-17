const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const apiRouter=require('./routes/api')
const app = express();
const port = 3000;

// const url = 'mongodb://localhost:27017';
// const dbName = 'etender';
// let db;
const bidRouter=require('./routes/bidApplyApi');

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors());

// app.post('/api/message', (req, res) => {
//     console.log(req.body);
//     db.collection('etender').insertOne({'msg': req.body});
//     res.status(200).send();
// })


// MongoClient.connect(url, function (err, client) {

app.use('/', apiRouter)


// app.use('/postBid',apiRouter);
app.use('/',apiRouter);

// MongoClient.connect(url, function (err, client) {

//     if(err) return console.log('mongodb error', err);
//     console.log("Connected successfully to server");
//     db = client.db(dbName);
// });

app.listen(port, () => console.log('App running on port', port));