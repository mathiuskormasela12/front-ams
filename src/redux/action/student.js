// ========== Student Action

export const setStudent = (data) => ({
	type: 'SET_STUDENT',
	payload: {
		data
	}
})

export const setLoading = () => ({
	type: 'SET_LOADING'
})