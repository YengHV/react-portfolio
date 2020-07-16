import React from "react";
import { Container } from "react-bootstrap";
import "./contact.css"
import SocialFollow from "../SocialFollow/SocialFollow"

function ContactComp() {
    return (
        <div>
            <Container>
            <h1>Contact me Here at:</h1>
            <h4>yenghuevang@gmail.com</h4>
            <h4>https://github.com/YengHV</h4>
            <h4>https://www.linkedin.com/in/yeng-vang-b510a71a3/</h4>
            <div>
                <SocialFollow></SocialFollow>
            </div>
            </Container>
        </div>
    )
}

export default ContactComp;