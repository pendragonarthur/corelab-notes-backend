import taskModel from '../db/taskSchema.js'

export default class getAllNotes {
  async get(req, res) {
    try {
      // Find all tasks and sort by isFavorite (favorites first)
      const task = await taskModel.find().sort({ isFavorite: -1 })
      if (!task) {
        return res.status(404).json({ message: 'No tasks found' })
      }

      return res.status(200).json(task)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
