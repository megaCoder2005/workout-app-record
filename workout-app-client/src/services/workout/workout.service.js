import { $axios } from '../../api'

export const WORKOUT = '/workouts'
class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUT)
	}
	async getById(id) {
		return $axios.get(`${WORKOUT}/${id}`)
	}
	//name, exerciseIds
	async create(body) {
		$axios.post(`${WORKOUT}`, body)
	}
	async update(id, body) {
		$axios.put(`${WORKOUT}/${id}`, body)
	}
	async delete(id) {
		$axios.delete(`${WORKOUT}/${id}`)
	}
}

export default new WorkoutService()
