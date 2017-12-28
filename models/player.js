var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TeamTrackerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName: String,
    dateOfBirth: Date,
    jerseyNumber: String,
    position: String
})

TeamTrackerSchema.plugin(mongoosePaginate)
const Player = mongoose.model('Player', TeamTrackerSchema)

module.exports = Player;