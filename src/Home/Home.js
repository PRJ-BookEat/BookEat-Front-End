import React, { Component } from 'react'
import MainContainer from '../component/Style/MainContainer'
import Daily from './Daily';
import Feature from './Feature';
import Favorite from './Favorite';
import SearchBox from './SearchBox';
import $ from 'jquery';
// import FullscreenError from '../component/Style/FullscreenError'
import CAFE from '../Image/CAFE.jpg';
import BAR from '../Image/BAR.jpg';
import RES from '../Image/RES.jpg';
import './Home.css';


class Home extends Component {

    componentDidMount() {
        $('#myCarousel').carousel({
            pause: 'none'
        })
    }

    render() {
        return (
            <MainContainer>
                <div className="container">
                    <br />
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block" src={CAFE} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" src={BAR} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block" src={RES} alt="Third slide" />
                            </div>
                        </div>
                    </div>

                    <div className="mainText">
                        <header className="my-4">
                            <div className="col-md-12 ">
                                <h1 className="display-3">Welcome to BookEat!</h1>
                                <p>Find the best restaurants here</p>
                                     <SearchBox/>
                              
                               

                            </div>

                        </header>
                    </div>
                    {/* <header className="jumbotron my-4" id="mainHead">


                        <h1 className="display-3">Welcome to BookEat!</h1>
                        <p>Find the best restaurants here</p>
                        <div className="container">
                            <SearchBox />
                        </div>

                    </header> */}
                    <br />
                    <div className="card " >
                        <div className="card-body" >
                            <h5>Daily Pick Up Restaurant</h5>
                            <Daily />
                        </div>
                    </div>


                    <br></br>
                    <div className="card" >
                        <div className="card-body">
                            <h5>Feature Restaurant</h5>
                            <Feature />
                        </div>
                    </div>
                    <br></br>
                    <div className="card" >
                        <div className="card-body">
                            <h5>Favorite Restaurant</h5>
                            <Favorite />
                        </div>
                    </div>
                </div >
            </MainContainer >

        )
    }
}

export default Home;