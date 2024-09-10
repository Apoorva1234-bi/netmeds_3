import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CancerEducationVedio() {
    const navigate = useNavigate();
    const handleEducationvedio1 = () => {
        console.log('handleEducationvedio1')
        navigate('/educationvedio1')
    }
    const handleEducationvedio2 = () => {
        console.log('handleEducationvedio2')
        navigate('/educationvedio2')
    }
    const handleEducationvedio3 = () => {
        console.log('handleEducationvedio3')
        navigate('/educationvedio3')
    }
    return (
        <Container className='educationvediocard'>
            <Row>
                <Col><h2 style={{ fontSize: '40px' }}>Stay informed with our latest Cancer education videos</h2></Col>
            </Row>
            <br />
            <Row >
                <Col><img src="src/assets/Images/AAC-Cancer-education-videos.jpg" alt="loading image" onClick={handleEducationvedio1} /></Col>
                <Col><img src="src/assets/Images/AAC-Cancer-education-videos_02.jpg" alt="loading image" onClick={handleEducationvedio2} /></Col>
                <Col><img src="src/assets/Images/AAC-Cancer-education-videos (2).jpg" alt="loading image" onClick={handleEducationvedio3} /></Col>
            </Row>
            
        </Container>
    )
}
