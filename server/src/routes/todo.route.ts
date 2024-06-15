import express from 'express'
import { addTask, deleteTask, getTasks, getTasksById, updateTask } from '../controllers/todo.controller'
const toDoRouter = express.Router()


toDoRouter.get('/api/v1/tasks' , getTasks)
toDoRouter.get('/api/v1/task/:id' , getTasksById)
toDoRouter.post('/api/v1/task' , addTask)
toDoRouter.put('/api/v1/task/:id' , updateTask)
toDoRouter.delete('/api/v1/task/:id' , deleteTask)


export default toDoRouter