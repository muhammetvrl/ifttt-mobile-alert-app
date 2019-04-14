const mongoose = require('mongoose');

module.exports = () => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://heroku_t5v8jh36:28bb607pp2deab5iqace8vf4bv@ds139896.mlab.com:39896/heroku_t5v8jh36', { useNewUrlParser: true });
  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

};