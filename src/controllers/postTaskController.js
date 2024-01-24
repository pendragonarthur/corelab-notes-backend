import taskModel from '../db/taskSchema.js'

export default class postTaskController {
  async post(req, res) {
    try {
      const { title, description, isFavorite, taskColor } = req.body
      const task = await taskModel.create({
        title,
        description,
        isFavorite,
        taskColor,
      })
      if (!task) {
        return res.status(400).json({ message: 'Error creating task' })
      }
      return res.status(200).json(task)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
