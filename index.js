const express = require('express')
const routes = require('./routes/routes');
const database = require('./database');
const app = express();
const port = 3000;
app.use(express.json())
app.use(routes);

database.connect();
database.db.on('error', console.error.bind(console, 'connection error:'));
database.db.once('open', function() {
  console.log('conectadooppa');
});
app.listen(port, ()=> console.log(`Started in ${port}`))