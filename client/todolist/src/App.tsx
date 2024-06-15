import axios from "axios"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete'

interface Task {
  id: number
  name: string
  status?: boolean
}

export default function App() {
  const [tasks , setTasks] = useState<Task[]>([])
  const [task , setTask] = useState<Task>({
    id: 0,
    name: '',
    status: false
  })
  
  
  useEffect(() => {
    fetchTasksFromServer()
  }, [])
  
  const fetchTasksFromServer = async () => {
    try {
      const response = await axios.get<Task[]>('http://localhost:8080/api/v1/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  }
  //Input tasks  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setTask({
         ...task,
          [e.target.name]: value
        }
      )
  }

  //Add task
  const handleAdd = () => {
    if(task.name === ''){
      alert('Hãy nhập thông tin vào!!')
    }
    else{
      try {
        axios.post('http://localhost:8080/api/v1/task', task)
        alert('Add task successfully')   
      } catch (error) {
        console.log(error);
      }
    }
  }

  //Delete task
  const deleteTask = (id: number , index: number) => { 
    const conf = window.confirm('Do you want to delete this task ??')
    if (conf) {
        axios.delete('http://localhost:8080/api/v1/task/' + id)
        alert(`You deleted task: ${tasks[index].name} successfully !`)
    }
  }

  //Complete task
  const handleComplte = async (id: number) => {
    try {
      const newTasksList = tasks.map((task) => {
        if(task.id === id) 
          return {...task , status: !task.status}
        return task
      })
      setTasks(newTasksList)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
       <div className="flex items-center justify-center h-screen w-full bg-gray-100">
        <div className="bg-red-400 w-96 text-white p-8 border-t-8 border-l-8">
          <div className="title">
            <h1 className="text-5xl">Todo List</h1>
            <small>Get things done one item at a time.</small>
            <div className="border-y border-b-white border-t-red-400 mt-1"></div>
          </div>
          {tasks.map((task , index) => {
              return (
                <div key={index} className="mt-7">
                    <div className="flex items-center justify-between mt-8 bg-red-300 p-2" key={index}>
                      <div>
                        <span>{index + 1}.  </span> 
                        <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
                          {task.name}
                        </span>
                      </div> 
                      <div className="flex items-center gap-1">
                        <input type="checkbox" className="cursor-pointer" onClick={() => handleComplte(task.id)}/>
                        <DeleteIcon className="cursor-pointer" onClick = {() => deleteTask(task.id , index)}/>
                      </div>
                    </div>
                </div>
              )
          })}
          <div className="flex text-xs mt-2 justify-end">
            Move done item at the end ?
          </div>
          <div className="mt-10">
            <h1>Add to the todo list</h1>
            <div className="flex gap-2">
              <input
                placeholder="Write todo here ??"
                className="p-2 text-xs text-black w-[239px] focus:outline-none"
                onChange={handleChange}
                name="name"
              />
              <button
                className="outline outline-1 outline-offset-1 cursor-pointer text-xs p-2 rounded-sm hover:bg-slate-900 focus:outline-none"
                onClick={handleAdd}
                >
                Add item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
