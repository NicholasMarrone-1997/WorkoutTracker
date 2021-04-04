const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Data,
        default: () => new Date()
    },
    exercises: [
        {
            type: String,
            required: "Please enter an exercise type"
        },
        wname: {
            type: String,
            required: "Please enter an exercise type"
        },
        duration: {
            type: Number,
            required: "Please enter an exercise duration in minutes"
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
    }
]


}

)