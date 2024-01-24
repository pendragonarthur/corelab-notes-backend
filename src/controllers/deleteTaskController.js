import taskModel from '../db/taskSchema.js'

export default class deleteTaskController {
  async delete(req, res) {
    try {
      const id = req.params.id
      const task = await taskModel.findOneAndDelete({ _id: id })
      if (!task) {
        return res.status(404).json({ message: 'Task not found' })
      }
      return res.status(200).json({ message: 'Task deleted' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
