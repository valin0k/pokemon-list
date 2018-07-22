import * as actionsTypes from 'app/reactTest/constants/AppConstants';
import axios from 'axios';

export const getPokemonList = (offset = 0) => (dispatch) => {
  dispatch({
    type: actionsTypes.START_LOADING,
  })

  const apiUrl = `http://pokeapi.co/api/v2/pokemon?offset=${offset}`;

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
    payload: keyword.toLowerCase(),
  });
};

export const addTypePokemon = (keyword) => (dispatch) => {
  dispatch({
    type: actionsTypes.ADD_TYPE_POKEMON,
    payload: keyword.toLowerCase(),
  });
};

export const removeTypePokemon = () => (dispatch) => {
  dispatch({
    type: actionsTypes.REMOVE_TYPE_POKEMON,
  });
};
