import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Link from 'react-router-dom/Link';

export default function Tuit({ data }) {
  return (
    <Container style={{ outline: '0.01px solid lightgrey', padding: '1rem' }}>
      <Row>
        <Col xs={2}>
          <Row >
            <img src={data.owner.img} className='' style={{ width: '4rem', borderRadius: '50%', margin: '1rem auto' }} alt={data.owner.name} />
          </Row>
        </Col>
        <Col xs={10}>
          <Row>
            <div>
              <Link to={'/' + data.owner.name} style={{color: 'Black'}}><b>{data.owner.name}</b>
              <span className='text-muted'> @{data.owner.id}</span></Link> · <Link to={"/post/" + data.id }><span className='text-muted'> {moment(data.time).fromNow()}</span></Link>
            </div>
          </Row>
          <Row>
            <Col xs={0}></Col>
            <Col xs={10} style={{paddingLeft: 0}}>
              <div style={{padding: '1rem 0rem 1rem 0rem'}}>{data.content}</div>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to={"/comment/" + data.id }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='grey'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-message-circle'>
                <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
              </svg>
              </Link>
              {' ' + data.comments.length}
            </Col>
            <Col>
            <Link to={"/retuit/" + data.id }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='grey'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-repeat'>
                <polyline points='17 1 21 5 17 9'></polyline>
                <path d='M3 11V9a4 4 0 0 1 4-4h14'></path>
                <polyline points='7 23 3 19 7 15'></polyline>
                <path d='M21 13v2a4 4 0 0 1-4 4H3'></path>
              </svg>
              </Link>
              {' ' + data.retuits}
            </Col>
            <Col>
            <Link to={"/like/" + data.id }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='grey'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-heart'>
                <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
              </svg>
              </Link>
              {' ' + data.likes}
            </Col>
            <Col>
            <Link to={"/share/" + data.id }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='grey'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-upload'>
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                <polyline points='17 8 12 3 7 8'></polyline>
                <line x1='12' y1='3' x2='12' y2='15'></line>
              </svg>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
