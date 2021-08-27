// ========= Student Reducer
const initialState = {
	students: [],
	loading: false
}

const studentReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_STUDENT' : {
			return {
				...state,
				students: action.payload.data
			}
		}

		case 'SET_LOADING' : {
			return {
				...state,
				loading: !state.loading
			}
		}

		default : {
			return {
				...state
			}
		}
	}
}

export default studentReducer;