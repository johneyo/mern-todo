const express = require('express');
const router = express.Router();

const Todo = require('../../models/todoModel')

router.get('/', (req, res) => {
    Todo.find()
        .sort({date:-1})
        .then(todos => res.json(todos))
})

router.post('/', (req, res)=> {
    const newTodo = new Todo({
        title:req.body.title,
        description:req.body.description
    });

    newTodo.save().then(newTodo => res.json(newTodo))
})

router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => todo.remove(todo).then(()=> res.json({success:true})))
        .catch(err => res.status(404).res.json({success:false}))
})

module.exports = router;