import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import pokemonsReducer from 'app/reactTest/reducers/PokemonsReducer'

const rootReducer = combineReducers({
	pokemonsReducer,
});

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
    // applyMiddleware(thunk),
		applyMiddleware(thunk),
	);
}

export default configureStore({})
