import React, { Component } from 'react';
import BoxFilm from './ListItem/BoxFilm';
import Header from './Header';
import { CardDeck } from 'react-bootstrap';

export default class Movie extends Component {
    render() {
        return (
            <div>
                <Header />
                <BoxFilm />
            </div>
        )
    }
}
