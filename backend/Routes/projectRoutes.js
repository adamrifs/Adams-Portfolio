const express = require('express')
const { addProject, getProject, deleteProject, editProject, updateProjectOrder } = require('../Controllers/projectControllers')
const upload = require('../Middleware/multer')
const router = express.Router()

router.post('/addProject', upload.single('image'), addProject)
router.get('/getProject', getProject)
router.delete('/deleteProject/:id', deleteProject)
router.put('/updateProject/:id',upload.single('image'), editProject)
router.put('/updateOrder', updateProjectOrder)

module.exports = router