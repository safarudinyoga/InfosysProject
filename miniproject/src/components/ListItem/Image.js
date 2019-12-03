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
        const { base_url } = this.props.image
        // console.log(`${base_url}w500${this.props.poster_path}`)
        return (
            <div>
                <Card.Img variant="top" style={{ height: '20vw', width: '20vw', objectFit: 'cover' }} className="text-center" src={`${base_url}w500${this.props.poster_path}`} />
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
