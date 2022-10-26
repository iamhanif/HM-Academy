import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideNave from '../Pages/Shared/SideNav/SideNave';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md='2' lg='3' className='d-none d-lg-block'>
                        <SideNave />
                    </Col>

                    <Col md='10' lg='9'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;