import express from 'express'
import updateUserDetails from './updateUserDetails.js'
import getDashboardDetails from './getDashboardDetails.js'
import workoutRouter from '../User/Workouts/router.js'


const router = express.Router()

router.put('/:id_user/details', updateUserDetails)
router.get('/:id_user/dashboard', getDashboardDetails)
router.use('/:id_user/workout', workoutRouter)



export default router