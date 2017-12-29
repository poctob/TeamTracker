var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ActivitySchema = new mongoose.Schema({
    name: String,
    type: String,
    category: String
})

ActivitySchema.plugin(mongoosePaginate)
const Activity = mongoose.model('Activity', ActivitySchema)

module.exports = Activity;