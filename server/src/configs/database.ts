import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const test = {
    hort: process.env.DB_HORT,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME
}

const database = mysql2.createPool(test)

export default database