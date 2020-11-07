const mongoose = require('mongoose');
const config = require('./config/config');

exports.connect = async () =>
  await mongoose.connect(config.conectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

exports.db = mongoose.connection;
