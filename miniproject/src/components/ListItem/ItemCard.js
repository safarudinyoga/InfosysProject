import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Star from './Stars';
import { connect } from 'react-redux';
import { loadDetail, loadRecommendation } from '../../actions/index';
import { withTranslation } from 'react-i18next';
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
			buy: '',
			watchlist: props.watchlist
		};
	}

	handleMouseEnter = () => {
		this.setState({
			hover: true
		});
	};

	handleMouseLeave = () => {
		this.setState({
			hover: false
		});
	};

	getDetail = () => {
		const { loadDetail, loadRecommendation, data } = this.props;
		loadDetail(data.id);
		loadRecommendation(data.id);
	};

	render() {
		// console.log('itemCard', this.props.data && this.props.data.id);
		// const { poster_path, original_title, vote_average, vote_count } = this.props.data;
		const { hover } = this.state;
		// console.log('watchlist', this.state.watchlist);
		return (
			<div className="my-3 mx-4 col d-flex justify-content-center">
				<React.Fragment>
					<Card
						onClick={this.getDetail}
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
						style={{
							maxWidth: '350px',
							borderRadius: '10px',
							transition: '0.5s ease',
							cursor: 'pointer',
							...(hover && { boxShadow: '5px 10px 40px rgba(0,0,0,0.5)' })
						}}
					>
						<Image poster_path={this.props.data && this.props.data.poster_path} />
						<Card.Body>
							<Card.Title style={{ wordBreak: 'break-word', fontSize: '3vh' }}>
								{this.props.data && this.props.data.original_title}
							</Card.Title>
							<Star rate={this.props.data && this.props.data.vote_average} />
							<Card.Text>{`${this.props.data && this.props.data.vote_count} Votes`}</Card.Text>
						</Card.Body>
						<Card.Footer className="d-flex justify-content-between">
							<Price rate={this.props.data && this.props.data.vote_average} />
							{this.state.watchlist ? (
								<Button className="text-right mx-2" onClick={this.getDetail} variant="dark">
									{this.props.t(`DETAIL.${'Selengkapnya'}`)}
								</Button>
							) : (
								<Button className="text-right mx-2" variant="dark">
									{this.props.t(`DETAIL.${'Watchlist'}`)}
								</Button>
							)}
						</Card.Footer>
					</Card>
				</React.Fragment>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	loadDetail: (id) => dispatch(loadDetail(id)),
	loadRecommendation: (id) => dispatch(loadRecommendation(id))
});

export default connect(null, mapDispatchToProps)(withTranslation('common')(ItemCard));
