import database from "../configs/database"

export const getTasksService = async () => {
    let query = 'SELECT * FROM tasks'
    let [result] = await database.execute(query) 
    return result
}

export const getTasksByIdService = async (id: number) => {
    let query = `SELECT * FROM tasks WHERE id = ${id}`
    let [result] = await database.execute(query) 
    return result
}

interface Task {
    name: string
    status: string
}

export const addTaskService = async (data: Task) => {
    const {name, status} = data
    let query = `INSERT INTO tasks (name, status) VALUES ('${name}' , ${status} )`
    let [result] = await database.execute(query) 
    return result
}

export const updateTaskService = async (id: Number , data: Task) => {
    const {name, status} = data
    let query = `UPDATE tasks SET name = '${name}' , status = ${status} WHERE id = ${id}`
    let [result] = await database.execute(query) 
    return result
}

export const deleteTaskService = async (id: Number) => {
    let query = `DELETE FROM tasks WHERE id = ${id}`
    let [result] = await database.execute(query) 
    return result
}

