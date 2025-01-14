import express from 'express'
import login from './login.js'
import register from './registration.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

export default router
