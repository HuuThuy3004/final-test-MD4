import express from 'express'
import toDoRouter from './routes/todo.route'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port: number = 8080


app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
app.use(cors())
app.use(toDoRouter)

app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})