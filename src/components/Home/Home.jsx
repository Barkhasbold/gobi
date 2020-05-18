import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import './home.css';

const Home = props => {

  return (
<Container>
        <Row>
            <Col  xs={12} md={12} sm={12}>

                <video autoPlay="autoplay" muted loop="loop" id="myVideo">
                    <source src="http://gobi.mn/videos/gobiFW2019.mp4" type="video/mp4"></source>
                </video>
                </Col>
                <Col xs={12} md={12} sm={12}>
                    <div className="videoContent"><p className="textVideo">Lorem</p>
                <button type="button" className="button"><span>Шинэ коллекц</span></button>
                </div></Col>

        </Row>
        </Container>
  );
};

Home.propTypes = {
  posts: PropTypes.array
};

export default Home;