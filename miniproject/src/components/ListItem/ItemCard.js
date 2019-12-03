import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Star from './Stars';
import { connect } from 'react-redux';
import { loadData } from '../../actions/index';
import Image from './Image';
import Price from './Price';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            original_title: '',
            vote_average: '',
            vote_count: '',
            poster_path: ''
        };
    }

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        console.log('data', this.props.data);

        const { original_title, poster_path, vote_count, vote_average } = this.props.data
        // const { base_url } = this.props.data
        return (
            <div>
                <React.Fragment>
                    <Card>
                        <Image poster_path={poster_path} />
                        <Card.Body>
                            {/* <Card.Title>{this.props.product.title}</Card.Title> */}
                            <Card.Title>{original_title}</Card.Title>
                            {/* <Star rate={this.props.product.rate} /> */}
                            <Star rate={vote_average} />
                            <Card.Text>
                                {/* {this.props.product.description} */}
                                {`${vote_count} Votes`}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            {/* <h4 className="text-left">
                                {this.props.product.price}
                            </h4> */}
                            <Price rate={vote_average} />
                            <Button className="text-right mx-2" href='/detail' type='button' variant="dark">Detail</Button>
                        </Card.Footer>
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    data: state.movie
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemCard)