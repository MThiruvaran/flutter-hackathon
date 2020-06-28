const express = require('express');
const router = express.Router();
const PlannerSchema = require('../models/planner');

router.post('/create', async(req, res) => {
    let taskid = req.body.taskid
    let email = req.body.email
    let task = req.body.task
    let date = req.body.date

    try{
        const newTask = new PlannerSchema({
            taskid:taskid,
            email:email,
            task:task,
            date:date
        })

        await newTask.save();
        res.status(200).send('tesk-created')
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
    let taskid = req.body.taskid
    let email = req.body.email

    try {
        await PlannerSchema.deleteOne({email:email, taskid:taskid})
        res.status(200).send('deleted')
    } catch (error) {
        res.status(400).send('error-occurred')
    }
})

module.exports = router;