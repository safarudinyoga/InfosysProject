import React, { Component } from 'react';
import BoxFilm from './ListItem/BoxFilm';
import Header from './Header';

export default class Movie extends Component {
	render() {
		return (
			<div>
				<Header />
				<BoxFilm />
			</div>
		);
	}
}
