import express from 'express'
import postTaskController from '../controllers/postTaskController.js'
import getTaskByTitleController from '../controllers/getTaskByTitleController.js'
import getAllNotes from '../controllers/getAllTasksController.js'
import updateTaskController from '../controllers/updateTaskController.js'
import deleteTaskController from '../controllers/deleteTaskController.js'
import getTasksByColorController from '../controllers/getTasksByColorController.js'
import getFavoritedTasksController from '../controllers/getFavoritedTasksController.js'

// Initializing router
const router = express.Router()

// Post task route
router.post('/postTask', new postTaskController().post)

// Get task by title route
router.get('/getTaskByTitle/:title', new getTaskByTitleController().get)

// Get all tasks route
router.get('/getAllNotes', new getAllNotes().get)

// Get tasks by color
router.get('/getTasksByColor/:taskColor', new getTasksByColorController().get)

// Get favorited tasks
router.get('/getFavoritedTasks', new getFavoritedTasksController().get)

// Update task route
router.patch('/updateTask/:id', new updateTaskController().patch)

// Delete task route
router.delete('/deleteTask/:id', new deleteTaskController().delete)

export default router
