import { Container, Row, Col, Tab } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { ProjectCards } from "./ProjectCards"
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/organize.png"
import projImg2 from "../assets/img/zhare.png"
import projImg3 from "../assets/img/texty.png"
import projImg4 from "../assets/img/videogo.png"
import projImg5 from "../assets/img/socialy.png"




export const Projects = () =>{

    const projects = [
        {
            title: "Organize",
            description: "A simple yet elegant TO-DO mobile application",
            imgUrl: projImg1
        },
        {
            title: "Zhare",
            description: "A mobile application made for sharing notes from teachers to students",
            imgUrl: projImg2
        },
        {
            title: "VideoGo",
            description: "A safe Video Conferencing mobile application using Jitsi API",
            imgUrl: projImg4

        }
        
    ]

    const projectsTab2 = [
        {
            title: "Socialy",
            description: "A MongoDB partial blockchain based application to detect Intrusion detection ",
            imgUrl: projImg5
        },
        {
            title: "Texty",
            description: "A private text messaging application for Mobile",
            imgUrl: projImg3
        }
        
    ]

    



    return (
        <section className="project" id = "projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of the projects that I have been working and have completed. Have a look ;)</p>
                    <Tab.Container id = "projects-tab" defaultActiveKey = "first">
                    <Nav variant="pills" className = "nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Project Section 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Project Section 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey = "first">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCards key = {index}{
                                            ...project} />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey = "second">
                            <Row>
                            {
                                projectsTab2.map((project, index) =>{
                                    return(
                                        <ProjectCards key = {index}{
                                            ...project} />
                                    )
                                })
                            }
                        </Row></Tab.Pane>
                        
                    </Tab.Content>

                    </Tab.Container>
                    </Col>
                    
                </Row>
            </Container>
            <img className="background-image-right" src = {colorSharp2} alt="back"/>
        </section>

    )
}