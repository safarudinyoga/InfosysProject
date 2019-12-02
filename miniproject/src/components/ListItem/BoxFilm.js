import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { CardDeck } from 'react-bootstrap'

export default class BoxFilm extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="card card-responsive-width" style={{ padding: '5vh' }}>
                    <CardDeck>
                        {/* {console.log(this.props)} */}
                        {/* {this.props.products.map((value, index) => {
                            return <ItemCard key={index} product={value} />
                        })} */}
                        <ItemCard />
                    </CardDeck>
                </div>
            </div>
        )
    }
}
