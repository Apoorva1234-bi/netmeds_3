import React from 'react'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PDF_Breast_Cancer_Url = 'src/assets/allaboutcancer-Images/Netmeds-Breast-Cancer-E-book.pdf';

export default function DownloadButton() {
  const handleDownloadNow = (url) => {
    // console.log('Download now clicked')
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <Container>
      <Row onClick={() => { handleDownloadNow(PDF_Breast_Cancer_Url) }}>
        <Col className='AAC_downloadbutton'>
          <Button> Download Now </Button>
        </Col>
      </Row>
    </Container>
  )
}
