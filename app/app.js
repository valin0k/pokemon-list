import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from 'app/store';
import ReactTestApp from 'app/reactTest/reactTestApp';
import PokemonListContainer from 'app/reactTest/containers/PokemonListContainer';


class AppWatch {
	constructor() {
		this.appElement = document.querySelector('.app');

		if (this.appElement) {
			this.render();
		}
	}

	render() {
		ReactDOM.render(
			<Provider store={Store}>
				<Router history={browserHistory}>
					<Route path="/" component={ReactTestApp}>
						<IndexRoute component={PokemonListContainer} />
					</Route>
				</Router>
			</Provider>,
			this.appElement,
		);
	}
}

window.app = new AppWatch();
export default window.app;
