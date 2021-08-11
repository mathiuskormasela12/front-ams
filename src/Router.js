// ========== Router
// import all modules
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistedStore from './redux/store';

// import all views
import Home from './views/Home';

function Router() {
	const { store, persistor } = persistedStore()
  return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default Router;