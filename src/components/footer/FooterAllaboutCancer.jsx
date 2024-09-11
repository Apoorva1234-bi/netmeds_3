import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function FooterAllaboutCancer() {
  return (

    <Container style={{textAlign:'center'}}>
    <hr />
    <Row  className='header-section-link ' style={{padding:'30px'}}>
    <Col><Link style={{textDecoration:'none', color:'black'}} to='/aboutnetmeds'>About Netmeds</Link></Col>
    <Col> <Link style={{textDecoration:'none',color:'black'}} to='/privacypolicy'>Privacy Policy</Link></Col>
    <Col><Link style={{textDecoration:'none',color:'black'}} to='/termsandconditions'>Terms And Conditions</Link></Col>
    <Col><Link style={{textDecoration:'none',color:'black'}} to='/contactus'>Contact Us</Link></Col>       
    </Row>
    <hr />
    </Container>
  )
}
