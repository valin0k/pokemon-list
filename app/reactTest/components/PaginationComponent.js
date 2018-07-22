import React from 'react'
import PropTypes from 'prop-types'
import {withHandlers} from 'recompose'

const enhance = withHandlers({
	handleNextClick: props => e => {
		props.getPokemonList(props.offset + 20, props.loadedOffsets)
	},
	handlePrevClick: props => e => {
		props.getPokemonList(props.offset - 20, props.loadedOffsets)
	},
})

const PaginationComponent = enhance(
    ({offset, handleNextClick, handlePrevClick}) =>
	<div>
		{offset > 0 && <button className="ui button blue" onClick={handlePrevClick}>Prev page</button>}
		<button className="ui button blue" onClick={handleNextClick}>Next page</button>
	</div>
)

PaginationComponent.displayName = 'PaginationComponent'

PaginationComponent.propTypes = {
	offset: PropTypes.number.isRequired,
	handleNextClick: PropTypes.func,
	handlePrevClick: PropTypes.func,
}

export default PaginationComponent
