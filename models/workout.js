const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Data,
        default: () => new Date()
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
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
}, {
    toJSON: {
        virutals: true
    }
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;