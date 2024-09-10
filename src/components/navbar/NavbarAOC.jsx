import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function NavbarAOC() {
  return (
    <Container fluid className='AOC_Header'>
        <Row>
            <Col> <Link style={{textDecoration:'none', color:'black'}} to='/home'>Home</Link></Col>
            <Col> <Link style={{textDecoration:'none', color:'black'}} to='/healthcorner'>Health Corner</Link></Col>
            <Col> <Link style={{textDecoration:'none', color:'black'}} to='/booktestsforcancer'>Book Tests For Cancer</Link></Col>
            <Col> <Link style={{textDecoration:'none', color:'black'}} to='/resourcesforcancerpatients'>Resources For Cancer Patients</Link></Col>
            <Col> <Link style={{textDecoration:'none',color:'black'}}to='/login'>Login</Link></Col> 
        </Row>
    </Container>
    
  )
}
