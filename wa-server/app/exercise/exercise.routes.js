import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { createNewExercise, deleteExercises, getExercises, updateExercises } from './exercise.controller.js'
import { createNewExerciseLog } from './log/exercise-log.controler.js'
import { getExerciseLog } from './log/get-exercise-log.controller.js'
import { completeExerciseLog, updateExerciseLogTime } from './log/update-exercise-log.controller.js'
const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)
router.route('/:id').put(protect, updateExercises).delete(protect,deleteExercises)

router.route('/log/:id')
.post(protect, createNewExerciseLog)
.get(protect, getExerciseLog)

router.route('/log/complete/:id')
.patch(protect, completeExerciseLog)

router.route('/log/time/:id').put(protect, updateExerciseLogTime)


export default router
