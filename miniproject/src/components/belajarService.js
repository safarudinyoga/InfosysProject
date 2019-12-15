import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Card } from 'react-bootstrap';
import { movieSelected, movieDeselected } from '../actions/index';

class belajarService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			add: false,
			itemAdded: []
		};
	}

	handleAddButton = () => {
		this.setState({
			add: !this.state.add
		});
	};

	handleItemAdded = (index) => () => {
		this.setState(({ itemAdded }) => ({
			itemAdded: itemAdded.map((item, i) => (i === index ? !item : item))
		}));
	};

	componentDidMount = () => {
		const movie = {
			angka: [ 1, 2, 3, 4, 5, 6 ]
		};
		const { service } = this.props;
		this.props.onMovieSelected(movie, () => {
			const serviceLength = Object.keys(service).length;
			this.setState({ itemAdded: [ ...Array(serviceLength) ].map(() => false) });
		});
	};

	renderItem = (isAdded = true) => {
		const { itemAdded, add } = this.state;
		const { service } = this.props;
		return Object.values(service).map((item, index) => {
			return (
				(isAdded ? itemAdded[index] : !itemAdded[index]) && (
					<div key={index}>
						<Button onClick={add ? this.handleItemAdded(index) : () => {}} className="mx-2">
							{item}
							{add &&
								(isAdded ? (
									<i className="fas fa-minus" style={{ marginLeft: '10px' }} />
								) : (
									<i className="fas fa-plus" style={{ marginLeft: '10px' }} />
								))}
						</Button>
					</div>
				)
			);
		});
	};

	render() {
		const { add } = this.state;

		if (add) {
			return (
				<div className="container">
					<Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>{this.renderItem(true)}</ButtonToolbar>
								<Button style={{ float: 'right' }} onClick={this.handleAddButton}>
									{' '}
									<i className="fas fa-times" />
								</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>{this.renderItem(false)}</ButtonToolbar>
							</Card.Body>
						</Card>
					</Card>
				</div>
			);
		} else {
			return (
				<div className="container">
					<Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>{this.renderItem(true)}</ButtonToolbar>
								<Button style={{ float: 'right' }} onClick={this.handleAddButton}>
									EDIT
								</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>{this.renderItem(false)}</ButtonToolbar>
							</Card.Body>
						</Card>
					</Card>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	service: state.service
});

const mapDispatchToProps = (dispatch) => ({
	onMovieSelected: (service, cb = () => {}) => {
		dispatch(movieSelected(service));
		cb();
	},
	onMovieDeselected: (service) => dispatch(movieDeselected(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(belajarService);
