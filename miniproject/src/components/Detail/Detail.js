import React, { Component } from 'react';
import Star from '../ListItem/Stars';
import Header from '../Header';
import { ButtonToolbar, Card, CardDeck } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Price from '../ListItem/Price';
import * as moment from 'moment';
import ItemCard from '../ListItem/ItemCard';
import Buy from '../ListItem/Buy';

class Detail extends Component {
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

	render() {
		const {
			poster_path,
			original_title,
			vote_count,
			vote_average,
			adult,
			tagline,
			runtime,
			release_date,
			overview
		} = this.props.detail;

		return (
			<div>
				<Header />
				<React.Fragment>
					<div className="container">
						<div className="card my-5">
							<div className="card-header text-center bg-dark" />
							<div className="card-body">
								<div className="card">
									<div className="row">
										<div className="col-md-4">
											<div className="card-body">
												<div className="text-center">
													<Card.Img
														variant="top"
														style={{ height: '480px', width: '280px', objectFit: 'cover' }}
														className="text-center rounded"
														src={`https://image.tmdb.org/t/p/w500${poster_path}`}
													/>
												</div>
											</div>
										</div>

										<div className="col-md-8">
											<div className="card-body">
												<h1 className="card-title my-0 mt-4">{original_title}</h1>

												<h5 className="card-title text-secondary my-1">
													{adult ? 'R' : 'PG13'}
													<span className="divider"> | </span>
													{tagline && tagline}
													<span className="divider"> | </span>
													{`${runtime && runtime} Minutes`}
													<span className="divider"> | </span>
													{moment(release_date && release_date).format('DD-MMMM-YYYY')}
												</h5>
												<h5 className="card-title">{overview && overview}</h5>

												<h4 className="card-title text-primary">
													{`${vote_average ? vote_average : 0} / 10 `}
													<span style={{ fontSize: '15px' }}>
														( {vote_count && vote_count} Likes )
													</span>
												</h4>

												<Star rate={vote_average ? vote_average : 0} />

												<h3 className="card-text my-2">
													<Price rate={vote_average ? vote_average : 0} />
												</h3>
												<ButtonToolbar>
													<Buy />
												</ButtonToolbar>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
				<div className="container-fluid" style={{ width: '1250px' }}>
					<div className="card card-responsive-width" style={{ padding: '5vh' }}>
						<div className="card-header" style={{ fontWeight: 'bold', fontSize: '3vh' }}>
							{this.props.t(`DETAIL.${'More Like This'}`)}
						</div>
						<CardDeck>
							{Object.values(this.props.recommendation).map((item, index) => {
								return <ItemCard key={index} data={item} />;
							})}
						</CardDeck>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	detail: state.detail,
	recommendation: state.recommendation
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Detail));
