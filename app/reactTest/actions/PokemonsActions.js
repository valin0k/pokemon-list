import * as actionsTypes from 'app/reactTest/constants/AppConstants'
import axios from 'axios'

export const getPokemonList = (offset = 0, loadedOffsets) => (dispatch) => {
  if(loadedOffsets && loadedOffsets.includes(offset)) {
    return dispatch({
      type: actionsTypes.CHANGE_OFFSET,
      payload: { offset }
    })
  }

  dispatch({
    type: actionsTypes.START_LOADING,
  })

  const apiUrl = `/v2/pokemon?offset=${offset}`

  return axios(apiUrl)
    .then(pokemonData => {
      const promises = pokemonData.data.results.map(item => axios(item.url))
      Promise.all(promises).then(pokemons => {
				dispatch({
					type: actionsTypes.GET_POKEMON_DATA,
					payload: {
						pokemons,
						offset
					}
				})

        dispatch({
          type: actionsTypes.END_LOADING,
        })
      })
    }).catch((error) => {
      dispatch({
        type: actionsTypes.ERROR_LOADING,
      })
    })
}

export const filterPokemons = (keyword) => (dispatch) => {
  dispatch({
    type: actionsTypes.FILTER_POKEMONS,
    payload: {
    	keyword: keyword.toLowerCase()
		},
  })
}

export const addTypePokemon = (keyword) => (dispatch) => {
  dispatch({
    type: actionsTypes.ADD_TYPE_POKEMON,
    payload: {
    	type: keyword.toLowerCase()
		},
  })
}

export const removeTypePokemon = () => (dispatch) => {
  dispatch({
    type: actionsTypes.REMOVE_TYPE_POKEMON,
  })
}
