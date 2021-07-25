const express = require('express')
const mysql = require('mysql') 

const pool = mysql.createPool({
    connectionLimit: 1,
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

const sql = `insert into people(name) values ('Full Cycle')`
pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query(sql, (error, results, fields) => {
        connection.release()
        if(error) throw error
    })
})

const app = express()
app.get('/', (req, res) => {
    const sql = 'select name from people where id = 1'
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query(sql, (error, results, fields) => {
            connection.release()
            if(error) throw error
            res.send(`
                <h1>Curso Full Cycle</h1>
                <h2>${results[0].name}</h2>
            `)
        })
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})