var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var WorkoutSchema = new mongoose.Schema({
    playerId: ObjectId,
    activityId: ObjectId,
    weight: Number,
    time: Number,
    reps: Number,
    date: Date
})

WorkoutSchema.plugin(mongoosePaginate)
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;