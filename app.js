import 'dotenv/config'
import sql from './src/database.js'
import express from 'express'


const app = express()

app.get('/test', (req, res) => {
    res.send('Hello Jhonsons')
})

app.listen(process.env.PORT || 3000)
