import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadImage } from '../../actions/index'
import { Card } from 'react-bootstrap'

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poster_path: props.poster_path
        };
    }

    componentDidMount() {
        this.props.loadImage()
    }

    render() {
        // console.log('props', this.props.poster_path);
        // console.log('image', this.props.image)
        const { image, poster_path } = this.props
        return (
            <div>
                <Card.Img variant="top" style={{ height: '450px', width: '100%', objectFit: 'cover', borderRadius: '10px' }} className="text-center" src={`${image.base_url}w500${poster_path}`} />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    image: state.image
})

const mapDispatchToProps = (dispatch) => ({
    loadImage: () => dispatch(loadImage())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Image)
