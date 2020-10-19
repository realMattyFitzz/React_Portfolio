import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import getstocked from '../assets/getstocked.png';
import cityInfo from '../assets/cityInfo.png';
import rapidrecipe from '../assets/rapidrecipe.png';



class BSCarousel extends Component {
    render() {

        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                    </div>
                </div>
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "350px" }} >
                            <img
                                className=" d-block w-100"
                                src= { cityInfo }
                                alt="First slide"
                            />
                            <Carousel.Caption className="cityinfo">
                                <h3 class="cinfo" > city<i class="fas fa-info"></i>nfo </h3>
                                <a href="https://realmattyfitzz.github.io/p1_location_info/"><i class="fab fa-github fa-2x" id="cigithub"></i></a>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "350px" }}>
                        <img
                                className="d-block w-100"
                                src={ getstocked }
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3> Get<i class="fas fa-dollar-sign"></i>tocked </h3>
                                <a href="https://github.com/realMattyFitzz/p2_stock_dashboard"><i class="fab fa-github fa-2x" style={{ color: 'white'}}></i></a>
                                <div>
                                    <a href="https://p2-stock-dashboard.herokuapp.com/">herokuapp</a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "350px" }}>
                        <img
                                className="d-block w-100"
                                src={rapidrecipe}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3> <i class="fas fa-stopwatch"></i>RapidRecipe </h3>
                                <div>
                                    <a href="https://github.com/realMattyFitzz/p3_recipe"><i class="fab fa-github fa-2x" style={{ color: 'white'}}></i></a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default BSCarousel  
