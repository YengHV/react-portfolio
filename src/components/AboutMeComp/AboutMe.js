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
            <h4>My Software Development Jouney</h4>
            <p>In my free time, I'd like to go fishing, hunting, and camping. I was born in Saint Paul, Minnsota, and lived there my whole life. I have been working and higly experienced in customer service for the past six to eight years, whether that is via phone or face to face interaction. My past customer service related field included working in retail sales and customer service representative; My recent postition included a Sales Consultant at AutoNation Ford White Bear lake, where I as a Sales Consultant for over 4 months, and in sales for almost my whole work career. In the end of Feburary, I decided to make a career change. This lead me to pursue and further my education with The University of Minnesota Continuing Education to learn Full-Stack Web Development. </p>
            </Col>
            <Col>
            <h4>
                Example Col 2
            </h4>
            <p> Skills: MERN STACK</p>
            <p>Libaries I used: Bootstrap, Google Fonts Jquery</p>
            </Col>
            </Row>
            </Container>
            
        </div>
    )
};

export default AboutMeComp;