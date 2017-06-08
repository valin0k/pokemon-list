import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import pokemonsReducer from 'app/reactTest/reducers/PokemonsReducer';

const logger = createLogger();

const rootReducer = combineReducers({
	pokemonsReducer,
});

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
    // applyMiddleware(thunk),
		applyMiddleware(thunk, logger),
	);
}

export default configureStore({});
