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
}, {
    toJSON: {
        virutals: true
    },
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;