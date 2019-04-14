const mongoose = require('mongoose');

let alertCallSchema = new mongoose.Schema({
  contactName: {type: String, required: true, max: 100},
  occurredAt: { type: String, required: true },
  toNumber:{ type: String},
  callLength:{ type: String}
});

module.exports = mongoose.model('callAlert', alertCallSchema);
