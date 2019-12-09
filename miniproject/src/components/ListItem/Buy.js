import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Buy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buy: true,
			like: true
		};
	}

	handleClickBuy = () => {
		this.setState({
			buy: !this.state.buy
		});
	};

	handleClickLike = () => {
		this.setState({
			like: !this.state.like
		});
	};

	render() {
		// console.log(this.state.buy);
		return (
			<div>
				{this.state.buy ? (
					<Button onClick={this.handleClickBuy} className="mr-2" variant="success">
						<i className="fas fa-shopping-cart " /> Buy Now
					</Button>
				) : (
					<Button onClick={this.handleClickBuy} className="mr-2" variant="danger">
						<i className="fas fa-window-close" /> Cancel Buy
					</Button>
				)}
				{this.state.like ? (
					<Button onClick={this.handleClickLike} type="button" className="btn btn-primary">
						{' '}
						<i className="far fa-thumbs-up" /> Like{' '}
					</Button>
				) : (
					<Button onClick={this.handleClickLike} type="button" className="btn btn-danger">
						{' '}
						<i className="far fa-thumbs-down" /> Dislike{' '}
					</Button>
				)}
			</div>
		);
	}
}
