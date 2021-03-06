const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Please enter an exercise type"
        },
        name: {
            type: String,
            required: "Please enter an exercise name"
        },
        duration: {
            type: Number,
            required: "Please enter exercise length in minutes"
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }]
});

workoutSchema.set('toObject', { virtuals: true })
workoutSchema.set('toJSON', { virtuals: true })

workoutSchema.virtual("totalDuration")
    .get(function () {
        return this.exercises.reduce((ttl, exc) => { //Basically like an accumulator, reduces total and exercise to a single value
            return ttl + exc.duration;
        }, 0); // start from 0
    })
    .set(function(totalDuration){
        this.totalDuration = totalDuration;
    });

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;