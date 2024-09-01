import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { UserFields } from '../utils/user.utils.js'

// @desc    Create new exercise
// @route   POST /api/exercise
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})

	res.json(exercise)
})

// @desc    Get  exercises
// @route   GET /api/exercise
// @access  Private
export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: "desc"
		}
	})

	res.json(exercises)
})


// @desc    PUT  exercises
// @route   PUT /api/exercise/:id
// @access  Private
export const updateExercises = asyncHandler(async (req, res) => {
	const {name,times, iconPath} = req.body;
	try{
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				iconPath
			}
		})

		res.json(exercise)
	
	} catch(error) {
		res.status(400);
		throw new Error('Exercise not found!')
	}
	
})

// @desc    Delete  exercises
// @route   DELETE /api/exercise/:id
// @access  Private
export const deleteExercises = asyncHandler(async (req, res) => {
	try{
		const exercise = await prisma.exercise.delete({
			where: {
				id: +req.params.id
			},
			
		})

		res.json({message: "Ecxercise delete!"})
	
	} catch(error) {
		res.status(400);
		throw new Error('Exercise not found!')
	}
	
})
