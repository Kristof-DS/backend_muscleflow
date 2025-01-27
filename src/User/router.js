import sql from '../database.js'
import express from 'express'
import updateUserDetails from './updateUserDetails.js'
import getDashboardDetails from './getDashboardDetails.js'


const router = express.Router()

router.put('/:id_user/details', updateUserDetails)
router.get('/:id_user/dashboard', getDashboardDetails)

export default router