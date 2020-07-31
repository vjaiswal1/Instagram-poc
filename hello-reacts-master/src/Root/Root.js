import React from 'react';
import Container from '@material-ui/core/Container'
import Header from '../header/header'
import Footer from '../footer/footer'
import {Row, Col } from 'react-grid-system';



class Root extends React.Component {
    render() {
        return (

            <Container >
                <Row>
                    <Col xs={12} md={4}>
                        <Header />
                    </Col>
                    <Col xs={12} md={4}>
                        {this.props.children}
                    </Col>
                    <Col xs={12} md={4}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Root;