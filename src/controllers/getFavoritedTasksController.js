import taskModel from '../db/taskSchema.js'

export default class getFavoritedTasksController {
  async get(req, res) {
    try {
      const tasks = await taskModel.find({ isFavorite: true })
      if (!tasks) {
        return res.status(400).json({ message: 'No tasks found' })
      }
      return res.status(200).json(tasks)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
