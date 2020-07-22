import React from "react";
import "./repo.css"
import { Carousel, Container, Col } from "react-bootstrap"
import {parkplannerimg, parkplannerimg2, parkplannerimg3, wordgame, wordgame2, wordgame3} from "../../images"

function RepoComp() {
    return (
        <div>
            <Container className="carousel-container">
        <div>
            <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="carousel-font">Park Planner</h2>
                        {/* <p>Words</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="carousel-font">Park Planner</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={parkplannerimg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="carousel-font">Park Planner</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
                <Col>
                <a href="https://yenghv.github.io/Park-planner/">Park Planner</a>
                </Col>
        </div>
        <div>
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Word Game</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wordgame3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
        <Col>
        <a href="https://lit-ravine-77685.herokuapp.com/wordgame#">Word Game</a>
                </Col>    
    </div>
    <div>
        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573__340.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>React Portfolio Generator</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820__340.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2014/08/21/09/28/brown-bear-423202__340.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
        <Col>
    <p>Delpoy link</p>
                </Col>  
    </div>
    </Container>
          
    </div>
    )
}

export default RepoComp;