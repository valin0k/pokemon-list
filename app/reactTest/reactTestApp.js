import React from 'react';
import {NotificationStack} from 'react-notification';

import 'app/reactTest/style/site.styl';

const ReactTestApp = (props) => (
	<div className="react-test-app">
		<div className="app-container">
			{props.children}
		</div>
	</div>
);

ReactTestApp.displayName = 'ReactTestApp';

export default ReactTestApp;
