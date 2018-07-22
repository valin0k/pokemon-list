import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import pokemons from 'app/reactTest/reducers/pokemons'

const rootReducer = combineReducers({
	pokemons,
})

function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk),
	)
}

export default configureStore({})
