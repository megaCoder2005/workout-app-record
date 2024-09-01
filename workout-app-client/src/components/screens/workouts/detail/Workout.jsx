import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../../ui/Loader'

import WorkoutLogService from '../../../../services/workout/workout-log.service'

import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})
	// console.log(data)
	return (
		<>
			<HeaderWorkout workoutLog={workoutLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 !== 0 &&
									index !== workoutLog.exerciseLogs.length - 1 && (
										<div className={styles.line} />
									)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Workout
