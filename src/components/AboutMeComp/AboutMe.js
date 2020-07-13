import React from "react";
import JumbotronComp from "../JumbotronComp/JumbotronComp";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutme.css";

function AboutMeComp() {

    
    return (
        <div>
            <Container>
            <JumbotronComp></JumbotronComp>
            </Container>
            <Container>
            <h1>AboutMe</h1>
            <Row>
            <Col>
            <h4>How I started Web Development</h4>
            <p>In my free time, I'd like to go fishing, hunting, and camping. I was born in Saint Paul, Minnsota, and lived there my whole life. My recent postition was a Sales Consultant at AutoNation Ford White Bear lake. I've been working as a Sales Consultant for over 4 months, and in sales for almost my whole work career. In the end of Feburary, I decided to make a career change. This lead me to take a persue The University of Minnesota Continuing Education to learn Full-Stack Web Development. </p>
            </Col>
            <Col>
            <h4>
                Example Col 2
            </h4>
            <p> Skills: MERN STACK</p>
            <p>Libarys I used: Bootstrap, Google Fonts Jquery</p>
            </Col>
            </Row>
            </Container>
            
        </div>
    )
};

export default AboutMeComp;