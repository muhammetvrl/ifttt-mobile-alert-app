const mongoose = require('mongoose');

module.exports = () => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://root:abc123@ds139896.mlab.com:39896/heroku_t5v8jh36', { useNewUrlParser: true });
  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

};