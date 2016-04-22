var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  name: String,
  date_created: {type: Date, default: new Date()}
})

var Song = mongoose.model('songDocument', songSchema);

module.exports = Song;
