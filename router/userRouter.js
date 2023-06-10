const express = require('express')
const router = express.Router()
const User = require('../model/userModel')


//  Get all user API
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch (error) {
        res.send('Error: ' + error)
    }
})
// Get user by id API
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch (error) {
        res.send('Error: ' + error)
    }
})

// Add user API
router.post('/add', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    })
    try {
        const u1 = await newUser.save()
        res.json(u1)
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// Patch user API
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (Object.keys(req.body).length) {
            for (const property in req.body) {
                user[`${property}`] = req.body[`${property}`]
            }
        }
        res.json(await user.save())
    }
    catch (error) {
        res.send('Error: ' + error)
    }
})

// Delete user API
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const query = { id: req.params.id }
        const resp = await user.deleteOne(query)
        User.schema.pre('remove')
        res.json({ 'User': 'resp' })
    }
    catch (error) {
        res.send('Error: ' + error)
    }
})


module.exports = router