const express = require('express')
const router = express.Router();
const {saveRate, editRate, deleteRate} = require('./controller')

router.post('/api/rate' , saveRate)
router.delete('/api/rate/:id' ,  deleteRate) 
router.post('/api/rate/edit', editRate)


module.exports = router

