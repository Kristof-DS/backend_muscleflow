import express from 'express'
import createWorkout from './createWorkout.js'
import deleteWorkout from './deleteWorkout.js'
import editWorkout from './editWorkout.js'

const router = express.Router()

router.post('/', createWorkout)
router.delete('/:id_workout', deleteWorkout)
router.put('/:id_workout', editWorkout)

export default router