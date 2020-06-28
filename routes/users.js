const express = require('express');
const router = express.Router();
const userSchema = require('../models/users');
const bcrypt = require('bcrypt');
const salt  = 5;

router.post('/create', async(req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, salt);

    try {
        const user = await userSchema.findOne({email:email})
        if(user){
            res.status(200).send('already-exist');
        } else {
            const newUser = new userSchema({
                name:name,
                email:email,
                password:password
            })

            const created = await newUser.save();
            res.status(200).json({
                message:"success",
                content:created
            })
        }
    } catch (error) {
        res.status(400).send('error-occurred');
    }
})

router.post('/login', async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        const user = await userSchema.findOne({email:email});
        if(user){
            bcrypt.compareSync(password, user.password) ? res.status(200).send('success') : res.status(200).send("failed")
        } else {
            res.status(200).send('not-registered');
        }
    } catch (error) {
        res.status(400).send('error-occurred');
    }
})

router.post('/getbyemail', async(req, res) => {
    let email = req.body.email;

    try {
        const user = await userSchema.findOne({email:email})
        res.status(200).json({
            message:success,
            content:user
        })
    } catch (error) {
        res.status(400).send('error-occurred')
    }
})


module.exports = router;