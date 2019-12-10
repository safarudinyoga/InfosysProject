import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './configuration';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './translation/index';
import Movie from './components/Movie';
import Detail from './components/Detail/Detail';

i18next.init(i18nextConfig);

const routing = (
	<Provider store={store}>
		<I18nextProvider i18n={i18next}>
			<ConnectedRouter history={history}>
				<Router history={history}>
					<Route exact path="/" component={Movie} />
					<Route path="/detail" component={Detail} />
				</Router>
			</ConnectedRouter>
		</I18nextProvider>
	</Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
