import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Card } from 'react-bootstrap';
import { editOn, movieSelected, movieDeselected } from '../actions/index';

class belajarService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			add: false,
			itemAdded: false
		};
	}

	handleAddButton = () => {
		this.setState({
			add: !this.state.add
		});
	};

	handleItemAdded = () => {
		this.setState({
			itemAdded: !this.state.itemAdded
		});
	};

	componentDidMount = () => {
		const movie = {
			angka: [ 1, 2, 3, 4, 5, 6 ]
		};
		this.props.onMovieSelected(movie);
	};

	render() {
		console.log('service', this.props.service);
		console.log(this.state.itemAdded);

		const listAngka = Object.values(this.props.service).map((item, index) => {
			return (
				<div key={index}>
					<Button onClick={this.handleItemAdded} className="mx-2">
						{item}
						{this.state.add ? <i className="fas fa-plus" style={{ marginLeft: '10px' }} /> : ''}
					</Button>
				</div>
			);
		});

		if (this.state.add) {
			return (
				<div className="container">
					<Card>
						<Card>
							<Card.Body>
								<ButtonToolbar />
								{this.state.itemAdded ? <div>{listAngka}</div> : ''}
								<Button style={{ float: 'right' }} onClick={this.handleAddButton}>
									{' '}
									<i className="fas fa-times" />
								</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>{listAngka}</ButtonToolbar>
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
								<ButtonToolbar />
								<Button style={{ float: 'right' }} onClick={this.handleAddButton}>
									EDIT
									{/* <i className="fas fa-plus" /> */}
								</Button>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<ButtonToolbar>
									{listAngka}
									{/* <Button className="mx-2">1</Button>
									<Button className="mx-2">2</Button>
									<Button className="mx-2">3</Button>
									<Button className="mx-2">4</Button>
									<Button className="mx-2">5</Button>
									<Button className="mx-2">6</Button> */}
								</ButtonToolbar>
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
	onMovieSelected: (service) => dispatch(movieSelected(service)),
	onMovieDeselected: (service) => dispatch(movieDeselected(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(belajarService);
