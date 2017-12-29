var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TeamSchema = new mongoose.Schema({
    name: String,
    homeTown: String,
    logo: Buffer
})

TeamSchema.plugin(mongoosePaginate)
const Team = mongoose.model('Team', TeamSchema)

module.exports = Team;