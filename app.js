import 'dotenv/config'
import express from 'express'
import reglogRouter from './src/Register-login/router.js'

const app = express()

app.use(express.json())



app.use('/api', reglogRouter)

app.listen(process.env.PORT || 3000)
