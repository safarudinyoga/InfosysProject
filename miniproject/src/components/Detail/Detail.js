import React, { Component } from 'react';
import Star from '../ListItem/Stars';
import Header from '../Header';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadData } from '../../actions/index';
import ImageDetail from '../Detail/ImageDetail';
import Price from '../ListItem/Price';
import * as moment from 'moment';

class Detail extends Component {
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

    formatRuntime = (runtime) => {
        let hours = (runtime / 60)
        let rhours = Math.floor(hours)
        let minutes = (hours - rhours) * 60
        let rminutes = Math.floor(minutes)
        // this.setState({
        //     jam: rhours,
        //     minutes: rminutes
        // })
        // return hasil = 
        console.log(rhours, rminutes)
    }

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        console.log('data', this.props.data);
        console.log('state', this.state.jam, this.state.menit)
        const { poster_path, original_title, vote_count, vote_average, adult, tagline, runtime, release_date, overview } = this.props.data
        // console.log('time', moment(release_date).format('DD-MMMM-YYYY'))

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
                                                    {/* <img src='http://via.placeholder.com/250x150'
                                                        className="rounded" width="100%" height="350px" alt="..." /> */}
                                                    <ImageDetail poster_path={poster_path} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h1 className="card-title my-0 mt-4">
                                                    {original_title}
                                                </h1>

                                                <h5 className="card-title text-secondary my-1">{adult ? 'R' : 'PG13'}<span className='divider'> | </span>{tagline}<span className='divider'> | </span>{`${runtime} Minutes`}<span className='divider'> | </span>{moment(release_date).format('DD-MMMM-YYYY')}</h5>
                                                <h5 className="card-title">{overview}</h5>

                                                <h4 className="card-title text-primary">
                                                    {`${vote_average} / 10 `}
                                                    <span style={{ fontSize: "15px" }}>
                                                        ( {vote_count} Likes )
                                                        </span>
                                                </h4>

                                                <Star rate={vote_average}/>
                                                {/* <Star rate={this.props.product.rate} /> */}

                                                <h3 className="card-text my-2">
                                                    {/* {this.props.product.price} */}
                                                    <Price rate={vote_average} />
                                                </h3>

                                                {/* <label htmlFor="Quantity" >Quantity</label> */}
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

const mapStateToProps = (state) => ({
    data: state.movie
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)
