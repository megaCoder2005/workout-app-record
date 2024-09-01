import asyncHandler from 'express-async-handler'

import { prisma } from "../../prisma.js"
// @desc    update  workout log compleated
// @route   PATCH /api/workouts/log/complite/:id
// @access  Private
export const updateCompleteWorkoutLog = asyncHandler(async (req, res) => {
    const logId = +req.params.id
try {
    const workoutLog = await prisma.workoutLog.update({
        where: {
            id: logId
        }, 
        data: {
            IsCompleted: true
        }
    })
    res.json(workoutLog)
} catch(e) {
        res.status(404)
        throw new Error('Workout log not found!')
    
}
})



