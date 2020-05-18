import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './zoomHover.css';

const ZoomHover = () => {
return (
<Container>
    <div>
        <Row>
            <Col xs={12} md={4}>
            <div className="magnify border">
                <img className="zoomMagnify"
                    src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
                <div className="overlayLeftSide">
                    
                </div>
            </div>
            </Col>
            <Col>
                <div className="magnifyText">
                    <p>Lorem</p>
                </div>
            </Col>
            <Col xs={12} md={7}>
            <div className="magnify">
                <img className="zoomMagnify"
                    src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
                <div className="overlayLeftSide">
                    
                </div>
            </div>
            </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row>
            <Col xs={12} md={6}>
            <div className="zoom">
                <img className="zoomHover"
                    src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
                
            </div>
            </Col>
            <Col xs={12} md={6}>
            <div className="zoom">
                <img className="zoomHover"
                           src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
            </div>
            </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
</Container>
);
};

export default ZoomHover;