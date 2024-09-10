import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarAOC from '../navbar/NavbarAOC';
import CancerBattle from '../../pages/CancerBattle';
import TypeOfCancers from '../../pages/TypeOfCancers';
import CancerEducationVedio from '../../pages/CancerEducationVedio';

export default function AllAbouCancerHome() {
    const handleClickImage = () => {
        window.location.href = 'https://www.youtube.com/shorts/80ZBbjHCy_g';
    }
    return (
        <>
            <Container fluid style={{ backgroundColor: 'rgba(208, 214, 214, 0.432)' }}>
                <Container fluid>
                    <Row>
                        <Col> <NavbarAOC /> </Col>
                    </Row>

                    <Row className='allaboutcancer_image1'>
                        <Col>
                            <img src="src\assets\Images\AAC-webbanner_final.jpg" alt="banner image"
                                onClick={handleClickImage} />
                        </Col>
                    </Row>

                    <Row style={{ marginBottom: '5%' }}>
                        <Col>
                            <CancerBattle />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '5%' }}>
                        <Col>
                            <TypeOfCancers />
                        </Col>
                    </Row>
                </Container>
                <Container fluid >
                    <Row>
                        <Col ><img style={{ width: '100%' }} src="src/assets/Images/AAC-Mobile_cancer-in-india.jpg" alt="image loading" /></Col>
                    </Row>
                </Container>
                <Container style={{margin:'5%'}}>
                    <Row>
                        <Col><CancerEducationVedio /></Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
     

        </>
    )
}
