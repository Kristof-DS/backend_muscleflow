import 'dotenv/config'
import express from 'express'
import reglogRouter from './src/Register-login/router.js'
import auth from './src/auth.js'
import cors from 'cors'


const app = express()

app.use(cors())

app.use(express.json())

//User registation and login
app.use('/api', reglogRouter)

//User navigation on the app

app.use(auth)

app.use('/api/user', userRoutes)

app.listen(process.env.PORT || 3000)
