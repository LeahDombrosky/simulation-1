const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')
require('dotenv').config()
const controller = require('./controller');


const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db',dbInstance))
    .catch(console.log);

app.get('/api/bins/:shelf', controller.getBins);
app.get('/api/bin/', controller.getItem);

const port = process.env.PORT || 3000;
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );