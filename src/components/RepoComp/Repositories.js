import React from "react";
import "./repo.css"
import { Carousel, Container, Col } from "react-bootstrap"

function RepoComp() {
    return (
        <div>
            <Container>
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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <p>Text describing Repo Projects</p>
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p>Text describing Repo Projects</p>
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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
    </div>
    </Container>
    <Col>
        <p>Text describing Repo Projects</p>
                </Col>        
    </div>
    )
}

export default RepoComp;