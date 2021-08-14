// ========== Root Reducer
// import all modules
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import authReducer from './auth';
import toggleReducer from './toggle';

const rootPersistConfig = {
	key: 'root',
	storage,
	blacklist: ['auth', 'toggle'] 
}

const authPersistConfig = {
	key: 'auth',
	storage,
	stateReconciler: hardSet
}

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
	toggle: toggleReducer
});

export default persistReducer(rootPersistConfig, rootReducer)