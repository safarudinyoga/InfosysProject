import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadData } from '../../actions';

class BoxFilm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			price: '',
			original_title: '',
			vote_average: '',
			vote_count: '',
			poster_path: '',
			jam: '',
			menit: ''
		};
	}

	componentDidMount() {
		this.props.loadData();
	}

	render() {
		// console.log('data box', this.props.data);
		return (
			<div className="container-fluid ">
				<div className="card card-responsive-width" style={{ padding: '5vh' }}>
					<CardDeck>
						{Object.values(this.props.data).map((item, index) => {
							return <ItemCard key={index} data={item} />;
						})}
					</CardDeck>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.movie
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	loadData: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxFilm);
