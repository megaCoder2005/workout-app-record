import { useMutation } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import WorkoutService from '../../../services/exercise/exercise.service'
import Layout from '../../layout/Layout'

import styles from './NewWorkout.module.scss'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		control,
		isSuccess,
		error,
		isLoading,
		onSubmit
	} = useNewWorkout()
	return (
		<>
			<Layout
				bgImage='images/new-workout-bg.jpg'
				heading='Create new workout'
				backLink='/new-workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button callback={() => {}}>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
