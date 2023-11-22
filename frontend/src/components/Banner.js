import { useState, useEffect, delta, tick } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Mobile Application Developer", "FullStack Developer", "Software Engineer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();

        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }


        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } 



    }

    return(
        <section className='banner' id = "home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs = {12} md = {6} xl = {7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className = {isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Raghul dhakshin`}</h1><span className='wrap' style = {{fontSize: "28px"}}>{text}</span>
                                <p style={{color: "white", fontSize: "14px"}}>
                                <br></br>
Greetings! I'm thrilled to share my journey as an Associate Software Engineer at Accenture, where I've been contributing my skills and dedication for the past 10 months. My expertise spans a range of technologies, including Java, JavaScript, MongoDB, MySQL, Android development, and more.<br></br>
<br></br><br></br>
🚀 Technical Proficiencies:<br></br>
<br></br>
Java | JavaScript | MongoDB | MySQL<br></br>
Android Development | Mobile App Development<br></br>
Web Development | Front-End | Back-End<br></br>
REST API Design and Implementation<br></br>
<br></br>

🛠️ Driving Innovation:<br></br>
In my role, I'm actively engaged in designing and developing cutting-edge solutions that bridge technology with real-world needs. Whether it's creating seamless mobile experiences or architecting robust backend systems, I thrive on the challenges that come with turning ideas into reality.
<br></br><br></br>
🤝 Collaborative Approach:<br></br>
Collaboration lies at the core of my work philosophy. I believe in the power of teamwork and the value of diverse perspectives. Working alongside talented professionals, I've consistently contributed to projects that demand excellence and creativity.
<br></br><br></br>
🌟 Continuous Learning:<br></br>
Technology evolves at a rapid pace, and I'm committed to staying ahead of the curve. I have an unquenchable thirst for learning, which empowers me to explore new technologies and methodologies that enhance the solutions I deliver.
<br></br><br></br>
🌐 Balancing Front-End and Back-End Magic:<br></br>
My proficiency extends beyond specific languages or frameworks; I relish the challenge of crafting both stunning front-end interfaces and robust back-end functionality. This holistic approach ensures the applications I work on are not only visually appealing but also performant and reliable.
<br></br><br></br>
I'm excited to connect with professionals who share a passion for technology, innovation, and the drive to make a difference. Whether it's discussing the latest trends in software development or exploring potential collaborations, I welcome the opportunity to connect and learn from each other's experiences.<br></br></p>
                                <button onClick={() => console.log('connect')}>Let's Connect</button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                        <img src = {headerImg} alt = "Header img"></img>
                    </Col>
                </Row>
            </Container>

        </section>
        
    )
}