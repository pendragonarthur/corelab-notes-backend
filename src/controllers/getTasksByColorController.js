import taskModel from '../db/taskSchema.js'

export default class getTasksByColorController {
  async get(req, res) {
    try {
      let taskColor = req.params.taskColor
      if (!taskColor) {
        taskColor = req.body.taskColor
      }
      const tasks = await taskModel.find({ taskColor: taskColor })
      if (tasks.lenght === 0) {
        return res.status(400).json({ message: 'Task color not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
