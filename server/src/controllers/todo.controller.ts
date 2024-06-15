import { addTaskService, deleteTaskService, getTasksByIdService, getTasksService, updateTaskService } from "../services/todo.service"
import { Request , Response } from 'express'   


interface Task {
    id: number;
    status: string;
}

export const getTasks = async (req: Request , res: Response) => {
    try {
        const tasks = await getTasksService()
        res.send(tasks)
    } catch (error) {
        console.log(error);
    }
}

export const getTasksById = async (req: Request , res: Response) => {
    try {
        const {id} = req.params
        const tasks = await getTasksByIdService(Number(id))
        res.send(tasks)
    } catch (error) {
        console.log(error);
    }
}

export const addTask = async (req: Request , res: Response) => {
    try {
        const data = req.body
        const tasks = await addTaskService(data)
        console.log(444 , tasks);
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (req: Request , res: Response) => {
    try {
        const {id} = req.params
        const data = req.body
        const tasks = await updateTaskService(Number(id) , data)
        console.log('Update successfully !')
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req: Request , res: Response) => {
    try {
        const {id} = req.params
        const tasks = await deleteTaskService(Number(id))
        console.log('Delete successfully !')
    } catch (error) {
        console.log(error);
    }
}

