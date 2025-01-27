import sql from '../database.js'
import express from 'express'
import updateUserDetails from './updateUserDetails.js'
import getDashboardDetails from './getDashboardDetails.js'
import createWorkout from './createWorkout.js'

const router = express.Router()

router.put('/:id_user/details', updateUserDetails)
router.get('/:id_user/dashboard', getDashboardDetails)
router.post('/:id_user/workout', createWorkout)
//router.put('/:id_user/workout', editWorkout)
//router.delete('/:id_user/workout', deleteWorkout)

export default router