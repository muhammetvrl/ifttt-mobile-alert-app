const mongoose = require('mongoose');

module.exports = () => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://root:abc123@ds139956.mlab.com:39956/heroku_qfw3zdb3', { useNewUrlParser: true });
  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

};