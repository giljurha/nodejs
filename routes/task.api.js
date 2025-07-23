const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const app = express();
app.use(bodyParser.json());
app.use('/api', indexRouter);
router.post('/', (req, res) => {
    res.send("create task");
});

router.get('/', (req, res) => {
    res.send("get all tasks");
});

router.put('/:id', (req, res) => {
    res.send(`update task with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`delete task with id ${req.params.id}`);
}); 