const mongoose = require('mongoose');

let alertDeviceSchema = new mongoose.Schema({
  appName: {type: String, required: true, max: 100},
  title: { type: String, required: true },
  msg: { type: String },
  time:{ type: String }
});

module.exports = mongoose.model('deviceAlert', alertDeviceSchema);