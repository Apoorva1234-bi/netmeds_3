import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Error404() {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/')
    }
    return (
        <div >
            <Container fluid className='AOC_Error404'>
                <Row>
                    <Col>
                        <h1>Something wrong.....!!</h1>
                        <h4>please try again</h4>     
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="warning" onClick={handleClick}>Go to main page</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
