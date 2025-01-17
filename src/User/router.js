import sql from '../database.js'
import express from 'express'
import updateUserDetails from './updateUserDetails.js'


const router = express.Router()

router.put('/:id_user/details', updateUserDetails)

export default router