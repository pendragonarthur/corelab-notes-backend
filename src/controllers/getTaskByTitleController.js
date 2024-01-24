import taskModel from '../db/taskSchema.js'

export default class getTaskByTitleController {
  async get(req, res) {
    try {
      // Getting task title via body
      let title = req.body.title
      // Getting task title via params, if it's not in the body
      if (!title) {
        title = req.params.title
      }
      const task = await taskModel.find({ title: new RegExp(title, 'i') })
      if (!task || task.length === 0) {
        return res.status(404).json({ message: 'Task title not found' })
      }
      return res.status(200).json(task)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
