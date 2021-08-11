// ========== Toggle Reducer
const initialState = {
	toggle: false
}

const toggleReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_TOGGLE' : {
			return {
				...state,
				toggle: !state.toggle
			}
		}

		default : {
			return {
				...state
			}
		}
	}
}

export default toggleReducer;