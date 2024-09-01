import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

export const useCompleteLog = () => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()
	const { id } = useParams()
	const { mutate, error: errorCompleted } = useMutation(
		['complete log'],
		body => ExerciseLogService.complete(id, body),
		{
			onSuccess: () => navigate(`/Workout/${data.workoutLogId}`)
		}
	)
	return {
		comletelog: mutate,
		errorCompleted
	}
}
