// // import { SetStateAction, useEffect, useState } from "react"
// // import { MdDelete } from "react-icons/md"
// // import { FaEdit } from "react-icons/fa";


// interface Todo {
//   id: number
//   name: string
//   checked: boolean
// }

// export default function App() {
//   const [allTodos, setAllTodos] = useState<Todo[]>([])
//   const [todo, setTodo] = useState('')
//   const [currentEdit, setCurrentEdit] = useState('')
//   const [currentEditedItem, setCurrentEditedItem] = useState<Todo>({ id: 0, name: '', checked: false })


//   useEffect(() => {
//     let saveTodo = localStorage.getItem('list-todo')
//     if (saveTodo !== null) {
//       setAllTodos(JSON.parse(saveTodo))
//     }
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     setTodo(value)
//   }

//   //Chuc nang them moi
//   const handleAdd = () => {
//     if (todo === '') {
//       alert('Hãy nhập thông tin vào!!')
//     }
//     else {
//       let newTodoItem = {
//         id: Math.floor((Math.random() * 100)),
//         name: todo,
//         checked: false
//       }

//       const todoArr = localStorage.getItem('list-todo') ? JSON.parse(localStorage.getItem('list-todo')!) : []
//       todoArr.push(newTodoItem)
//       localStorage.setItem('list-todo', JSON.stringify(todoArr))

//       setAllTodos(todoArr)
//       setTodo('')
//     }
//   }

//   //Chuc nang xoa 1 cai todo
//   const handleDelete = (index: number) => {
//     let removeTodo = [...allTodos]
//     removeTodo.splice(index, 1)
//     localStorage.setItem('list-todo', JSON.stringify(removeTodo))
//     setAllTodos(removeTodo)
//   }

//   //Chuc nang hoan thanh khi click vao 1 todo
//   const handleComplete = (id: number) => {
//     const newTodoList = allTodos.map((item) => {
//       if (item.id == id) {
//         return { ...item, checked: !item.checked }
//       }
//       return item
//     })
//     setAllTodos(newTodoList)
//   }

//   //Chuc nang edit
//   const handleEdit = (index: SetStateAction<string>, item: any) => {
//     setCurrentEdit(index)
//     setCurrentEditedItem(item)
//   }

//   const handleUpdateTodo = (value: string) => {
//     setCurrentEditedItem((prev) => {
//       return { ...prev, name: value }
//     })
//   }

//   const btnUpdate = () => {
//     let newTodo = [...allTodos]
//     newTodo[Number(currentEdit)] = currentEditedItem
//     setAllTodos(newTodo)
//     setCurrentEdit('')
//     localStorage.setItem('list-todo', JSON.stringify(newTodo))
//   }

//   return (
//     <>
//       <div className="flex items-center justify-center h-screen w-full bg-gray-100">
//         <div className="bg-red-400 w-96 text-white p-8 border-t-8 border-l-8">
//           <div className="title">
//             <h1 className="text-5xl">Todo List</h1>
//             <small>Get things done one item at a time.</small>
//             <div className="border-y border-b-white border-t-red-400 mt-1"></div>
//           </div>
//           {allTodos.map((item , index) => {
//             if (currentEdit === String(index)) {
//               return (
//                 <div key={index} className="mt-7">
//                     <div className="mt-2">
//                       <div className="flex gap-2">
//                         <input
//                           placeholder="Update todo"
//                           className="p-2 text-xs text-white bg-red-400 border-x-2 border-y-2 w-[248px] focus:outline-none"
//                           value={currentEditedItem.name}
//                           onChange={(e) => { handleUpdateTodo(e.target.value) }}
//                         />
//                         <button
//                           className="outline outline-1 outline-offset-1 cursor-pointer text-xs p-2 rounded-sm hover:bg-slate-900 focus:outline-none"
//                           onClick={btnUpdate}
//                           >
//                           Update
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//               )
//             }
//             else {
//               return (
//                 <>
//                   <div className="flex items-center justify-between mt-8 bg-red-300 p-2" key={index}>
//                     <h1 className={`text-lg ${item.checked ? 'line-through' : ''}`}>{index + 1}. {item.name}</h1>
//                     <div className="flex gap-2">
//                       <div className="flex items-center">
//                         <input
//                           id="green-checkbox"
//                           type="checkbox"
//                           onChange={() => handleComplete(item.id)}
//                           className="w-4 h-4 text-green-800 bg-gray-100 border-gray-200 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-1 " />
//                       </div>
//                       <FaEdit
//                         className="h-6 w-5 cursor-pointer hover:text-neutral-500 ml-2"
//                         onClick={() => handleEdit(String(index), item)}
//                       />
//                       <MdDelete
//                         className="h-6 w-5 cursor-pointer hover:text-neutral-500"
//                         onClick={() => handleDelete(index)} 
//                         />
//                     </div>
//                   </div>
//                 </>
//               )
//             }
//           })}

//           <p className="flex text-xs mt-2 justify-end">
//             Move done item at the end ?
//           </p>
//           <div className="mt-10">
//             <h1>Add to the todo list</h1>
//             <div className="flex gap-2">
//               <input
//                 placeholder="Write todo here ??"
//                 className="p-2 text-xs text-black w-[239px] focus:outline-none"
//                 onChange={handleChange} 
//                 value={todo}
//               />
//               <button
//                 className="outline outline-1 outline-offset-1 cursor-pointer text-xs p-2 rounded-sm hover:bg-slate-900 focus:outline-none"
//                 onClick={handleAdd}
//                 >
//                 Add item
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }