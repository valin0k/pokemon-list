import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PokemonListComponent from "app/reactTest/components/PokemonListComponent"
import {
  getPokemonList,
  filterPokemons,
  addTypePokemon,
  removeTypePokemon
} from "app/reactTest/actions/PokemonsActions"

const mapStateToProps = ({ pokemons }) => {
  const { filterKeyword, filterLabel } = pokemons

  const filterByName = pokemonList => pokemonList.filter(item => item.name.indexOf(filterKeyword) !== -1)

  const filterByType = pokemonList => {
    if (!filterLabel.length) return pokemonList

    return pokemonList.filter(pokemon => pokemon.types
			.filter(pokemonType => pokemonType.type.name === filterLabel[0]).length)

    return pokemonList.filter(pokemon => {
      const isTypeIsset = pokemon.types.filter(
        pokemonType => pokemonType.type.name === filterLabel[0]
      )
      return isTypeIsset.length
    })
  }

  return {
    isLoading: pokemons.isLoading,
    pokemonList: filterByName(filterByType(pokemons.pokemons)),
    offset: pokemons.offset,
    filterLabel: pokemons.filterLabel[0]
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      getPokemonList,
      filterPokemons,
      addTypePokemon,
      removeTypePokemon
    }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListComponent)
