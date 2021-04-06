const Workout = require("../models/workout");

//Gets workouts
module.exports = function(app){
    app.get("/api/workouts", function(req,res){
        Workout.find()
       // .populate()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
    });

    //creates workout
    app.post("/api/workouts", function(req,res){
        
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });

    //gets workouts in range
    app.get("/api/workouts/range", function(req,res){
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

    //creates workouts in range
    app.post("/api/workouts/range", function(req,res){
        Workout.create({})
        .then(data => {
            console.log(data);
            res.json(data)})
        .catch(err => {
            res.json(err)
        })
    });

    //adds exercise
    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body} },
            {new: true,runValidators:true}
        )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });
}