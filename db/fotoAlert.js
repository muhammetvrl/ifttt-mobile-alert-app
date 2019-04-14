const mongoose = require('mongoose');

let alertFotoSchema = new mongoose.Schema({
  photoUrl: {type: String, required: true, max: 100},
  publicPhotoUrl: { type: String, required: true },
  takenDate:{ type: String}
});

module.exports = mongoose.model('fotoAlert',alertFotoSchema);