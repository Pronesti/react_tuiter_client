import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

export default function Login() {
  return (
    <Container fluid={true} style={{height: '100%', padding: 0}} >
      <Row noGutters={true} style={{height: '100%'}}>
        <Col xs={12} xl={6}>
          <div style={{ backgroundColor: 'rgb(113, 201, 248)', height: '100%', width: '100%', verticalAlign: 'center'}} >
            <Row >
                <div style={{height:'33vh'}}></div>
            </Row>
            <Row >
            <ul style={{ listStyle: 'none', color: 'white', fontWeight: 600, fontSize: '2rem', zIndex: 3, margin: '0 auto', height:'33vh' }}>
              <li>
                <svg
                  viewBox='0 0 24 24'
                  width='32'
                  height='32'
                  stroke='currentColor'
                  stroke-width='2'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='css-i6dzq1'>
                  <circle cx='11' cy='11' r='8'></circle>
                  <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                </svg>
  {' '} Sigue lo que te interesa.
              </li>
              <li>
                <svg
                  viewBox='0 0 24 24'
                  width='32'
                  height='32'
                  stroke='currentColor'
                  stroke-width='2'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='css-i6dzq1'>
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
                {' '}Entérate de qué está hablando la gente.
              </li>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-message-circle'>
                  <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
                </svg>
                {' '}Únete a la conversación.
              </li>
            </ul>
           {/*  <svg
              viewBox='0 0 36 36'
              class='r-13gxpu9 r-4qtqp9 r-yyyyoo r-1n7nint r-10m99ii r-u8s1d r-1n2wx2z r-1plcrui r-1l2rav9 r-lrvibr'
              fill='dodgerblue'
              stroke='dodgerblue'
              style={{ position: 'absolute', top:0, left: 0, zIndex: 2}}>
              <g>
                <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
              </g>
            </svg> */}
          </Row>
          <Row><div style={{height:'33vh'}}></div></Row>
          </div>
        </Col>
        <Col xs={12} xl={6}>
          <div style={{ backgroundColor: 'rgb(21, 32, 43)', height: '100%', width: '100%', padding: '1rem' }}>
            <Row noGutters={true} >
              <Col xl={1}></Col>
              <Col xs={12} xl={10}>
                  <div style={{padding: '1rem'}}>
                <Form method='POST' action='/login' style={{padding: 0}}>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder='Usuario' style={{ backgroundColor: 'rgb(21, 32, 43)', color: 'white', borderColor: '#007bff'}} name='userId' />
                    </Col>
                    <Col>
                      <Form.Control type='password' placeholder='Contraseña' style={{ backgroundColor: 'rgb(21, 32, 43)', color: 'white', borderColor: '#007bff', marginBottom: '0.5rem'}} name='password' />
                    </Col>
                    <Col xs={12} xl={4}>
                      <Button variant='outline-primary' type='submit' style={{fontWeight: 'bold', padding: '0.3 rem'}} className='w-100'>
                        Iniciar sesión
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
                  </div>
              </Col>
              <Col xl={1}></Col>
            </Row>
            <Row>
                <div style={{minHeight: '20vh'}}></div>
            </Row>
            <Row noGutters={true}>
              <Col></Col>
              <Col xs={12} xl={6}>
              <br />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='white'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-twitter'>
                  <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                </svg>
                <h3>
                  <b style={{ color: 'white' }}>Mira lo que está pasando en el mundo en este momento</b>
                </h3>
                <br />
                <b style={{ color: 'white' }}>Únete a Twitter hoy mismo.</b>
                <Link to="/registerPage" className="btn btn-primary w-100" style={{ margin: '0.5rem', fontWeight: 'bold' }}>Regístrate</Link>
                <Link to="/loginPage" className="btn btn-outline-primary w-100" style={{ margin: '0.5rem', fontWeight: 'bold' }}>Iniciar sesión</Link>
              </Col>
              <Col></Col>
            </Row>
            <Row>
                <div style={{minHeight: '20vh'}}></div>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
