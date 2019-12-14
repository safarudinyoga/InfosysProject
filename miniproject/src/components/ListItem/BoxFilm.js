import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { Card, CardDeck } from 'react-bootstrap';
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
			menit: '',
			watchlist: false
		};
	}

	handleWatchlist = () => {
		this.setState({
			watchlist: true
		});
	};

	handleCloseWatchlist = () => {
		this.setState({
			watchlist: false
		});
	};

	componentDidMount() {
		this.props.loadData();
	}

	// selectedMovie = (id) => {};

	render() {
		// console.log('watchlist', this.state.watchlist);
		// console.log('data box', this.props.data[0]);
		console.log(this.props.data);
		// console.log(this.onMovieSelected);
		let { data } = this.props;

		return (
			<div className="container-fluid">
				<div className="card card-responsive-width" style={{ padding: '5vh' }}>
					{/* <Card>
						<Card.Header>WatchList</Card.Header>
						{this.state.watchlist ? (
							<Button onClick={this.handleCloseWatchlist}>
								<i className="fas fa-plus" />
							</Button>
						) : (
							<Button onClick={this.handleWatchlist}>
								<i className="fas fa-times-circle" />
							</Button>
						)}
						<CardDeck>
							<ItemCard data={this.props.data[0]} />
						</CardDeck>
					</Card> */}
					<Card>
						<Card.Header>Movie Hot List</Card.Header>
						<CardDeck>
							{Object.values(data).map((item, index) => {
								return <ItemCard watchlist={this.state.watchlist} key={index} data={item} />;
							})}
						</CardDeck>
					</Card>
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
