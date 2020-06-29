const express = require('express');
const router = express.Router();
const PlannerSchema = require('../models/planner');

router.post('/create', async(req, res) => {
    
    let email = req.body.email
    let task = req.body.task
    

    try{
        const newTask = new PlannerSchema({
            email:email,
            task:task,
        })

        await newTask.save();
        res.status(200).send('task-created')
    } catch (error) {
        res.status(400).send('error-occurred')
    }

})


router.post('/get', async(req, res) => {
    let email = req.body.email

    try {
        const tasks = PlannerSchema.find({email:email})
        if(tasks){
            res.status(200).json({
                message:success,
                content:tasks
            })
        } else {
            res.status(200).send('empty')
        }
    } catch (error) {
        res.status(400).send('error-occurred')
    }
})


router.post('/delete', async(req, res) => {
    let id = req.body.id;
    let email = req.body.email

    try {
        await PlannerSchema.deleteOne({email:email, _id:id})
        res.status(200).send('deleted')
    } catch (error) {
        res.status(400).send('error-occurred')
    }
})

module.exports = router;