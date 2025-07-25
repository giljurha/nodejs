const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    task: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
},
{
    timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
