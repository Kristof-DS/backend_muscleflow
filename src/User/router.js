import express from 'express'
import updateUserDetails from './updateUserDetails.js'
import getDashboardDetails from './getDashboardDetails.js'
import createWorkout from './Workouts/createWorkout.js'
import deleteWorkout from './Workouts/deleteWorkout.js'
import editWorkout from './Workouts/editWorkout.js'

const router = express.Router()

router.put('/:id_user/details', updateUserDetails)
router.get('/:id_user/dashboard', getDashboardDetails)
router.post('/:id_user/workout', createWorkout)
router.delete('/:id_user/workout', deleteWorkout)
router.put('/:id_user/workout', editWorkout)


export default router