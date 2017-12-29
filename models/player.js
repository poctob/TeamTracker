var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PlayerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName: String,
    dateOfBirth: Date,
    jerseyNumber: String,
    position: String,
    teamId: ObjectId
})

PlayerSchema.plugin(mongoosePaginate)
const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player;