const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskname: { type: String, required: true},
    technology: { type: String, required: true},
    startDate: { type: Date, required: true},
    proposedEndDate: { type: Date, required: true},

}, {
    timestamps: true,
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;