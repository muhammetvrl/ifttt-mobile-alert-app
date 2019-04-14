const mongoose = require('mongoose');

let alertBatterySchema = new mongoose.Schema({
  powerSource: {type: String, required: true, max: 100},
  batteryPercentage: { type: String, required: true },
  occurredAt:{ type: String}
});

module.exports = mongoose.model('batteryAlert', alertBatterySchema);
