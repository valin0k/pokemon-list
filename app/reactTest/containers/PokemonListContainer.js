import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PokemonListComponent from "app/reactTest/components/PokemonListComponent"
import {
  getPokemonList,
  filterPokemons,
  addTypePokemon,
  removeTypePokemon
} from "app/reactTest/actions/PokemonsActions"

const mapStateToProps = (state) => {
  const { filterKeyword, filterLabel, offset, pokemons, loadedOffsets, isLoading } = state.pokemons

  const filterByName = pokemonList => pokemonList.filter(item => item.name.indexOf(filterKeyword) !== -1)

  const filterByType = pokemonList => (
    filterLabel.length
      ? pokemonList.filter(pokemon => pokemon.types
          .filter(pokemonType => pokemonType.type.name === filterLabel[0]).length)
      : pokemonList
  )

  const getFilteredPokemons = () => {
    const start = offset + 1
    const end = offset + 21
    const currentPokemons = pokemons.filter(item => item.id >= start && item.id <= end)
    return filterByName(filterByType(currentPokemons))
  }

  return {
    pokemonList: getFilteredPokemons(),
    filterLabel: filterLabel[0],
    loadedOffsets,
    isLoading,
    offset
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
