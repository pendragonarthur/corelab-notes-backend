import taskModel from '../db/taskSchema.js'

export default class updateTaskController {
  async patch(req, res) {
    try {
      const id = req.params.id
      const { title, description, isFavorite, taskColor } = req.body
      const task = {
        title,
        description,
        isFavorite,
        taskColor,
      }
      const updatedTask = await taskModel.findOneAndUpdate({ _id: id }, task, {
        new: true,
        runValidators: true,
      })

      if (!updatedTask) {
        return res.status(400).json({ message: 'No task updated' })
      }
      return res.status(200).json(task)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
