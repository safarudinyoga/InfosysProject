import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Star from './Stars';
import { connect } from 'react-redux';
import { loadDetail, loadRecommendation } from '../../actions/index';
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
            poster_path: '',
            hover: false,
            buy: props.buy
        };
    }

    handleMouseEnter = () => {
        this.setState({
            hover: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            hover: false
        })
    }

    getDetail = () => {
        this.props.loadDetail(this.props.data.id)
        this.props.loadRecommendation(this.props.data.id)
    }

    render() {
        // console.log('data item', this.props.data);
        const { poster_path, original_title, vote_average, vote_count } = this.props.data
        const { hover } = this.state
        return (
            <div className='my-3' style={{ display: 'flex', alignContent: 'center' }}>
                <React.Fragment>
                    <Card onClick={this.getDetail} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{ maxWidth: '350px', borderRadius: '10px', transition: '0.5s ease', cursor: 'pointer', ...(hover && { boxShadow: '5px 5px 20px rgba(0,0,0,0.4)' }) }}>
                        <Image poster_path={poster_path} />
                        <Card.Body>
                            <Card.Title style={{ wordBreak: 'break-word', fontSize: '3vh' }}>{original_title}</Card.Title>
                            <Star rate={vote_average} />
                            <Card.Text>
                                {`${vote_count} Votes`}
                            </Card.Text>
                            <Card.Text>
                                {this.state.buy ? <i class="fas fa-check"></i> : <i className="fas fa-plus"></i>}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <Price rate={vote_average} />
                            <Button className="text-right mx-2" onClick={this.getDetail} variant="dark" >Detail</Button>
                        </Card.Footer>
                    </Card>
                </React.Fragment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadDetail: (id) => dispatch(loadDetail(id)),
    loadRecommendation: (id) => dispatch(loadRecommendation(id))
})

export default connect(
    null,
    mapDispatchToProps
)(ItemCard)