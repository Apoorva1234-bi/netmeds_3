import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DownloadButton from '../common/button/DownloadButton';

export default function AllAboutCancerSection_2() {
  return (
  <Container>
    <Row>
      <Col><img src="src/assets/Images/AAC-E-book-alert.png" alt="loading image" />
      </Col>
      <Col style={{textAlign:'center',marginTop:'90px',fontSize:'50px'}}>
      <h1 style={{color:'red',textDecoration:'underline'}}>E-book alert</h1>
      <p style={{color:'purple'}}>Your complete guide to <b> Breast Cancer is here</b></p>
      <DownloadButton/>
      </Col>
    </Row>
  </Container>
 


  )
}
