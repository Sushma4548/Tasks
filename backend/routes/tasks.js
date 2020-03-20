const router = require('express').Router();
let Task = require('../models/Task.model');

router.route('/').get((req, res) => {
    Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const taskname = req.body.taskname;
const technology = req.body.technology;
const startDate = Date.parse(req.body.startDate);
const proposedEndDate = Date.parse(req.body.proposedEndDate);

const newTask = new Task({
    taskname,
    technology,
    startDate,
    proposedEndDate,
});

newTask.save()  
.then(() =>res.json('Task added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    console.log('deleting')
    Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res)=>{
    console.log('updating')
    Task.findById(req.params.id)
    .then(task=>{
        task.taskname = req.body.taskname;
        task.technology=req.body.technology;
        task.startDate = Date(req.body.startDate);
        task.proposedEndDate= Date(req.body.proposedEndDate);
        
        task.save()
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
         
    })
    .catch(err=>res.status(400).json('Error: ' + err));
});



module.exports = router;
