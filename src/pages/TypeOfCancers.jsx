import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function TypeOfCancers() {
    const navigate = useNavigate();
    const handleBreastCancer = () => {
        console.log('Breast cancer clicked')
        navigate('/breast-cancer')
    }

    const handleThyroidCacncer = () => {
        console.log('Thyroid cancer clicked')
        navigate('/thyroid-cancer')
    }

    const handleLiverCancer = () => {
        console.log('Liver cancer clicked')
        navigate('/liver-cancer')
    }

    const handleKidneyCancer = () => {
        console.log('kidney cancer clicked')
        navigate('/kidney-cancer')
    }

    const handleColonCancer = () => {
        console.log('Colon Cancer Clicked')
        navigate('/colon-cancer')
    }

    const handleLungCancer = () => {
        console.log('Lung Cancer Clicked')
        navigate('/lung-cancer')
    }

    const handleCervicalCancer = () => {
        console.log('cervical Cancer Clicked')
        navigate('/cervical-cancer')
    }

    const handleLeukemia = () => {
        console.log('Leukemia clicked')
        navigate('/leukemia-cancer')
    }

    const handleSoftTissueCancer = () => {
        console.log('Soft tissue Cancer Clicked')
        navigate('/soft-tissue-cancer')
    }
    return (
        <Container>
            <Row>
                <Col><h2 style={{ fontSize: '40px' }}>Cancer Resource Center: Where answers and support unite!</h2></Col>
            </Row>

            <Row>
                <Col><p style={{ fontSize: '20px' }}>#What'sYourColour</p></Col>
            </Row>

            <Row className='allaboutcancer_cardimages'>
                <Col><img src="src/assets/Images/AAC-Breast-Cancer.jpg" alt="image loading" onClick={handleBreastCancer} /></Col>
                <Col><img src="src/assets/Images/AAC-Thyroid-Cancer.jpg" alt="image loading" onClick={handleThyroidCacncer} /></Col>
                <Col><img src="src/assets/Images/AAC-Liver-Cancer.jpg" alt="image loading" onClick={handleLiverCancer} /></Col>
            </Row>
            <br />
            <Row className='allaboutcancer_cardimages'>
                <Col><img src="src/assets/Images/AAC-Kidney-Cancer.jpg" alt="image loading" onClick={handleKidneyCancer} /></Col>
                <Col> <img src="src/assets/Images/AAC-Colon-Cancer.jpg" alt="image loading" onClick={handleColonCancer} /></Col>
                <Col><img src="src/assets/Images/AAC-Lung-Cancer.jpg" alt="image loading" onClick={handleLungCancer} /></Col>
            </Row>
            <br />
            <Row className='allaboutcancer_cardimages'>
                <Col> <img src="src/assets/Images/AAC-Cervical-Cancer.jpg" alt="image loading" onClick={handleCervicalCancer} /></Col>
                <Col><img src="src/assets/Images/AAC-Leukemia.jpg" alt="image loading" onClick={handleLeukemia} /></Col>
                <Col><img src="src/assets/Images/AAC-Soft-Tissue.jpg" alt="image loading" onClick={handleSoftTissueCancer} /></Col>

            </Row>

        </Container>
    )
}
