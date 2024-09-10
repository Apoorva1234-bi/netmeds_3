import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CancerBattle() {
  const navigate=useNavigate();
    const handleSuppliment=()=>{
        console.log('render the Beauty page ')
        navigate('/home')
    }

    const hanleBookTest=()=>{
        console.log('render the lab test page')
        navigate('/home')
    }

    const handleBookMedicine=()=>{
        console.log('render the all medicine Cancer Oncology page')
        navigate('/home')

    }


  return (
    <Container>
      <Row>
        <Col><h2 style={{ fontSize: '40px' }}>Fighting Cancer is a battle, but accessing quality care shouldn't be...</h2></Col>
      </Row>
      <Row>
        <Col> <Col> <p style={{ fontSize: '20px' }}>Netmeds promises to stand by your side throughout your journey</p></Col></Col>
      </Row>

       <Row className='allaboutcancer_image2'>
        <Col> <img src="src\assets\Images\AAC-Supplements-for-Cancer.jpg" alt="image loading"  onClick={handleSuppliment}/></Col>
        <Col> <img src="src\assets\Images\AAC-Mobile_Book-Cancer-Screening-Test.jpg" alt="image loading" onClick={hanleBookTest}/></Col>
        <Col> <img src="src\assets\Images\AAC-Widest-Assortment (2).jpg" alt="image loading" onClick={handleBookMedicine} /></Col>
       </Row>
    </Container>
  )
}
