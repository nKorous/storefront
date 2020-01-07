const express = require('express')
const cors = require('cors')
const mssql = require('mssql/msnodesqlv8') // if you are using <SQL2017 require mssql instead

const PORT = process.env.PORT | 5200

const app = express()

app.use(cors())

app.listen(PORT, () => { // This is the path the app will 'listen' for incoming requests
    console.log(`Running on ${PORT}`)
})

/*** Connect to MSSQL Server */
const dbConfigString = require('./conn.json').mssqlConnectionString

const conn = new mssql.ConnectionPool(dbConfigString)
conn.connect(err => {
    if (err) console.error('SQL ERROR:', err)
    else console.log('Connected to database')
})
const request = new mssql.Request(conn)

function logSQLError(msg, err) {
    console.error(`SQL Error: `, err)
}

app.get('/', (req, res) => {
    res.status(200).send({ MSG: 'Your API works!' })
})

app.get('/productList', async (req, res) => {
    await request.query('select * from products', (error, results) => {
        if (results) res.status(200).send(results.recordset)
        else {
            logSQLError(error); res.status(500).send({ MSG: 'Internal Error: 500' })
        }
    })
})