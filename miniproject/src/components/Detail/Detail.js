import React, { Component } from 'react';
import Star from '../ListItem/Stars';
import Header from '../Header';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Detail extends Component {
    render() {
        return (
            <div>
                <Header />
                <React.Fragment>
                    <div className="container">
                        <div className="card my-5">
                            <div className="card-header text-center bg-dark">

                            </div>
                            <div className="card-body">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img src='http://via.placeholder.com/250x150'
                                                        className="rounded" width="100%" height="350px" alt="..." />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h1 className="card-title my-0 mt-4">
                                                    {/* {this.props.product.title} */}
                                                    tes
                                                    </h1>

                                                <h4 className="card-title text-secondary">testing<span className='divider'> | </span>testing</h4>

                                                <h4 className="card-title text-primary">
                                                    {/* {this.props.product.brand} */}tes
                                                    <span style={{ fontSize: "10px" }}>
                                                        {/* ( {this.props.product.vote} Likes ) */}likes
                                                        </span>
                                                </h4>

                                                <Star />
                                                {/* <Star rate={this.props.product.rate} /> */}

                                                <h3 className="card-text">
                                                    {/* {this.props.product.price} */}
                                                    Rp. 100000
                                                </h3>

                                                <label htmlFor="Quantity" >Quantity</label>
                                                {/* <span className="row ml-1 mb-3">
                                                    <button
                                                        type="button"
                                                        className={"btn btn-outline-dark mr-2 " + (this.state.minimal > 1)}
                                                        onClick={this.minusQuantity.bind(this)}
                                                    >
                                                        <i className="fas fa-minus text-danger"></i>
                                                    </button>

                                                    <input
                                                        type="text"
                                                        className="form-control col-sm-2 col-md-2"
                                                        id="Quantity"
                                                        value={this.state.quantity}
                                                        required
                                                    />

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-dark mx-2"
                                                        onClick={this.plusQuantity.bind(this)}   >
                                                        <i className="fas fa-plus text-success"></i>
                                                    </button>
                                                </span> */}

                                                <ButtonToolbar>
                                                    <Button className="mr-2" variant="success" >
                                                        <i className="fas fa-shopping-cart "></i> Buy Now
                                                </Button>
                                                    <button type="button" className="btn btn-primary col-md-2" > <i
                                                        className="far fa-thumbs-up "></i> Like </button>

                                                    {/* <BuyModal
                                                        show={this.state.showModal}
                                                        onHide={() => this.setState({ showModal: false })}
                                                        rateMessage={this.state.rateMessage}
                                                        changeRateMessage={this.changeRateMessage.bind(this)}
                                                        rateStars={this.state.rateStars}
                                                        setStars={this.setStars.bind(this)}
                                                        itemid={this.props.product.id}
                                                    /> */}
                                                </ButtonToolbar>

                                            </div>
                                        </div>
                                    </div>

                                    {/* <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                                        <Tab eventKey="description" title="Description">
                                            <DescDetail description={this.props.product.description} />
                                        </Tab>
                                        {console.log('aduh', this.props.product)}
                                        <Tab eventKey="testimonials" title="Testimonials">
                                            {this.props.product.testimonials.map(value => {
                                                return <ItemTestimonial testimonial={value} />
                                            })}
                                        </Tab>
                                    </Tabs> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment >
            </div>
        )
    }
}
