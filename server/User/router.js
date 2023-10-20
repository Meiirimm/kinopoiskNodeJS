const express = require('express')
const router = express.Router();
const {saveToWatch, deleteUser, editUser} = require('./controller')

router.post('/api/saveToWatch' , saveToWatch)
router.delete('/api/user/:id' , deleteUser)
router.post('/api/user/edit',  editUser)


module.exports = router