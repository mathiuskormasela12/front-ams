// ========== Root Reducer
// import all modules
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';
import studentReducer from './student';

const rootPersistConfig = {
	key: 'root',
	storage,
	blacklist: ['auth', 'toggle', 'student'] 
}

const authPersistConfig = {
	key: 'auth',
	storage,
	stateReconciler: hardSet
}

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
	student: studentReducer
});

export default persistReducer(rootPersistConfig, rootReducer)