import mongoose from 'mongoose'
const { Schema } = mongoose

// Initializing Schema
const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  taskColor: {
    type: String,
  },
})

// Creating Model
const taskModel = mongoose.model('Task', taskSchema)

export default taskModel
