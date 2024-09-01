import asyncHandler from 'express-async-handler'

import { prisma } from "../../prisma.js"
import { addPrevValues } from './add-prev-values.util.js'
// @desc    get new exerciseLog
// @route   GET /api/exercises/log/:id

// @access  Private
export const getExerciseLog = asyncHandler(async (req, res) => {

    const exerciseLog = await prisma.exerciseLog.findUnique({
        where: {
            id: +req.params.id
        },
        include: {
            exercise: true,
            times: {
                orderBy: {
                    id:  'asc'
                }
            }
        }
    })

    if (!exerciseLog) {
        res.status(404)
        throw new Error('Log not found!')
    }

    const prewExerciseLog = await prisma.exerciseLog.findFirst({
        where: {
            exerciseId: exerciseLog.exerciseLogId,
            userId: req.user.id,
            isCompleted: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            times: true
        }
    })

    
    res.json({ ...exerciseLog, times:  addPrevValues(exerciseLog, prewExerciseLog)})
})
