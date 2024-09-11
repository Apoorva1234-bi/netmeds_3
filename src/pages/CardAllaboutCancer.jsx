import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function CardAllaboutCancer() {
    const navigate = useNavigate();
    const handleGif = () => {
        navigate('/membership')
    }
    const handleLocation = () => {
        navigate('/store-near-by')
    }
    return (

        <Container fluid >
            <Row  style={{  margin: '5%', justifyContent: 'space-between'}}>
                <Col>
                    <Col  style={{display:'flex', marginRight:'2%',borderRight: ' 2px dashed black'}} >
                    <img  style={{ width:'25%',cursor:'pointer' }} src="src/assets/Images/AAC-nfm_premium_gold.gif" alt=""  onClick={handleGif} />
                    <div style={{textAlign:'center'}}>
                    <h4 style={{ color: 'red', fontSize: '30px' }} >Netmeds First Membership  </h4>
                    <p style={{ fontSize: '28px' }}><b>Additional 2% </b>Wallet Cash on all orders. 
                    <b>Extra 10% </b>off on Diagnostic</p>
                    </div>
                    </Col>
                </Col>


                <Col>
                    <Col  style={{display:'flex'}} >
                    <img  style={{ width:'15%',height:'20%',cursor:'pointer' }} src="src/assets/Images/AAC-Netmeds-Pharmacy.png" alt=""   onClick={handleLocation} />
                    <div style={{textAlign:'center',marginLeft:'5%',marginTop:'5%'}}>
                    <h4 style={{ color: 'red', fontSize: '30px' }} >Netmeds Pharmacy </h4>
                    <p style={{ fontSize: '28px' }}> To locate store,<b>call: 1800 891 0001</b></p>
                    </div>
                    </Col>
                </Col>
            </Row>
        </Container>

    )
}
