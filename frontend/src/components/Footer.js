import { Container, Row, Col } from "react-bootstrap"
import {MailchimpForm} from "./MailchimpForm"
import logo from '../assets/img/logo_main.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row className = "align-item-center">
                    <MailchimpForm />
                    <Col sm = {6}>
                        <img src = {logo} alt = "LOGO" />
                    </Col>
                    <Col m = {6} className = "text-center text-sm-end">
                        <div className="social-icon">
                            <a href = "https://www.linkedin.com/in/raghul-d-a04990122/"><img src = {navIcon1} alt = "linkedIn"></img></a>
                            <a href = "https://www.facebook.com/raghul.dhakshin/"><img src = {navIcon2} alt = "facebook"></img></a>
                            <a href = "https://www.instagram.com/raghuldhakshin/"><img src = {navIcon3} alt = "Instagram"></img></a>

                        </div>
                        <p>Copyright 2023, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}