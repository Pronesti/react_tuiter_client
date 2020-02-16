import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import TuitList from '../components/TuitList';
import WriteTuit from '../components/WriteTuit';
import Search from '../components/Search';
import Trending from '../components/Trending';
import Logo from '../components/Logo';

export default function Feed() {
  return (
    <Container>
      <Row>
        <Col xs={1} xl={1}>
          <Logo />
        </Col>
        <Col xs={11} xl={8}>
          <div style={{ width: '100%', height: '100%', padding: '1rem', outline: '0.01px solid lightgrey' }}>
            <h5>
              <b>Inicio</b>
            </h5>
          </div>
        </Col>
        <Col xs={12} xl={3}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col xs={1} xl={1}>
          <Navbar />
        </Col>
        <Col xs={11} xl={8}>
          <WriteTuit />
          <TuitList />
        </Col>
        <Col xs={12} xl={3}>
          <Trending />
        </Col>
      </Row>
    </Container>
  );
}
