import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './post.css';
import ImageLight from './Lightbox/ImageLight';
    
const Post = () => {

    return (

        <Container>
            
            <br></br>
            <div className="parallax"></div>
            <br></br>
            <br></br>
            
                <Row>
                    <Col xs={12} md={12}>
                        <div>
                            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <div className="parallax"></div>
                <hr></hr>
                <br></br>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="bodyImage">
                            <img className="midImage" src="http://gobi.mn/storage/products/July2018/IPt5OPWTg85lFBb8vLax.jpg" alt="" />
                            <div className="middle">
                                <div className="midDesc">
                                    <h5>Title</h5>
                                    <p>Дэлгэрэнгүй</p>
                              
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>    
                        <div className="bodyImage">
                            <img src="http://gobi.mn/storage/products/July2018/IPt5OPWTg85lFBb8vLax.jpg" alt="" />
                                <a href="#">
                                    <p className="details">Дэлгэрэнгүй</p>
                                </a>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="bodyImage">
                            <img className="imageOverlaySide" src="http://gobi.mn/storage/products/July2018/IPt5OPWTg85lFBb8vLax.jpg" alt="" />
                            <div className="overlayBottomSide">
                                <div className="text3Img">
                                    <h5>Title</h5>
                                    <p>Lorem</p>
                                    <button type="button" className="button3Img"><span><ImageLight /></span></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <div className="parallax"></div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="mainImg">
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="bodyImage">
                                <img className="imageOverlaySide" src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
                                <div className="overlayLeftSide">
                                    <div className="textSide">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <button type="button" className="button"><span>Шинэ коллекц</span></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="bodyImage">
                                <img className="imageOverlaySide" src="http://gobi.mn/storage/products/July2018/sFsfxR5KtKXU81Qpujng.jpg" alt="" />
                                <div className="overlayRightSide">
                                    <div className="textSide">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <button type="button" className="button"><span>Шинэ коллекц</span></button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br></br>
                <div className="parallax"></div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="slide">
                    <Row>
                        <Col xs={12} md={3} className="padd">
                            <div className="hoverImg">
                                <img className="imageHover" src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                <div className="hoverDesc">
                                    <h5><strong>Lorem</strong></h5>
                                    <p>Test</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="padd">
                            <div className="hoverImg">
                                <img className="imageHover" src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                <div className="hoverDesc">
                                    <h5><strong>Lorem</strong></h5>
                                    <p>Test</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="padd">
                            <div className="hoverImg">
                                <img className="imageHover" src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                <div className="hoverDesc">
                                    <h5><strong>Lorem</strong></h5>
                                    <p>Test</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3} className="padd">
                            <div className="hoverImg">
                                <img className="imageHover" src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                <div className="hoverDesc">
                                    <h5><strong>Lorem</strong></h5>
                                    <p>Test</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br></br>
                <div className="parallax"></div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="product">
                    <Carousel auto>
                        <Carousel.Item>
                            <div>
                                <Row>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/u9ZT8d1MyuAwzHAoighs.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p className="imgDesc">Lorem</p>
                                            <p className="imgPrice"><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/u9ZT8d1MyuAwzHAoighs.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p className="imgDesc">Lorem</p>
                                            <p className="imgPrice"><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/u9ZT8d1MyuAwzHAoighs.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p className="imgDesc">Lorem</p>
                                            <p className="imgPrice"><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/u9ZT8d1MyuAwzHAoighs.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p className="imgDesc">Lorem</p>
                                            <p className="imgPrice"><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div>
                                <Row>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p>Lorem</p>
                                            <p><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p>Lorem</p>
                                            <p><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p>Lorem</p>
                                            <p><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3} className="padd">
                                        <div className="productImg">
                                            <img src="http://gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt="" />
                                            <h5>Title</h5>
                                            <p>Lorem</p>
                                            <p><strong>45.00$</strong></p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br></br>
                <div className="parallax"></div>
                <br></br>
                <hr></hr>
                <br></br>
            
        </Container>
    );
};

export default Post;