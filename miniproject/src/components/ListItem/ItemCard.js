import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Star from './Stars';

export default class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            original_title: '',
            vote_average: '',
            poster_path: ''
        };
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Card>
                        <Card.Img variant="top" style={{ height: '20vw', width: '20vw', objectFit: 'cover' }} className="text-center" src="http://via.placeholder.com/250x150" />
                        <Card.Body>
                            {/* <Card.Title>{this.props.product.title}</Card.Title> */}
                            <Card.Title>Contoh tittle</Card.Title>
                            {/* <Star rate={this.props.product.rate} /> */}
                            <Star />
                            <Card.Text>
                                {/* {this.props.product.description} */}
                                test
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <h4 className="text-left">
                                {/* {this.props.product.price} */}
                                150000
                            </h4>
                            <Button className="text-right" variant="dark">Detail</Button>
                        </Card.Footer>
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}
