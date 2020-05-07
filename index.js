const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./routes/index'); //
//const rutasProtegidas = require('./routes/autenticacion');

const config = require('./config/config');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = config.url;

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


console.log(config.url);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(rutasProtegidas);
app.use( rutas);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});