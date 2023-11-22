import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import java_logo from '../assets/img/java-logo.png'
import android_logo from '../assets/img/android_logo.png'
import javascript_logo from '../assets/img/javascript_logo.png'
import heroku_logo from '../assets/img/heroku_logo.png'
import firebase_logo from '../assets/img/firebase_logo.png'
import rest_logo from '../assets/img/rest_logo.png'
import xml_logo from '../assets/img/xml_logo.png'
import mongodb_logo from '../assets/img/mongodb_logo.png'
import htmlcss_logo from '../assets/img/html_css_logo.png'
import react_logo from '../assets/img/react_logo.png'
import sql_logo from '../assets/img/sql_logo.png'
import php_logo from '../assets/img/php_logo.png'
import nodejs_logo from '../assets/img/nodejs_logo.png'
import git_logo from '../assets/img/git_logo.svg'
import postman_logo from '../assets/img/postman_logo.png'



export const Skills = () =>{
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        
        <section className="skills" id = "skills">
            <Container>
                <Row>
                    <Col>
                    <div className = "skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <br></br>
                        <Carousel responsive = {responsive} infinite = {true} className = "skill-slider">
                            <div className = "item">
                                <img className = "logos_class" src = {java_logo} alt = "logo"></img>
                                <h5>Java</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {javascript_logo}alt = "logo" ></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {android_logo} alt = "logo" ></img>
                                <h5>Android SDK</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {htmlcss_logo}alt = "logo" ></img>
                                <h5>HTML&CSS</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {mongodb_logo}alt = "logo"></img>
                                <h5>MongoDB</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {firebase_logo}alt = "logo"></img>
                                <h5>Firebase</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {nodejs_logo} alt = "logo"></img>
                                <h5>Node JS</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {react_logo} alt = "logo"></img>
                                <h5>React JS</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {sql_logo} alt = "logo"></img>
                                <h5>SQL</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class" src = {git_logo} alt = "logo"></img>
                                <h5>Git</h5>
                            </div>
                            <div className = "item">
                                <img  className = "logos_class" src = {postman_logo} alt = "logo"></img>
                                <h5>Postman API</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class"src = {heroku_logo} alt = "logo"></img>
                                <h5>Heroku</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class"src = {xml_logo} alt = "logo"></img>
                                <h5>XML</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class"src = {rest_logo} alt = "logo"></img>
                                <h5>REST API</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class"src = {php_logo} alt = "logo"></img>
                                <h5>PHP</h5>
                            </div>
                            <div className = "item">
                                <img className = "logos_class"src = {java_logo} alt = "logo"></img>
                                <h5>jQuery</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}

