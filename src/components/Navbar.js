import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <div>
      <Nav activeKey='/home' style={{textAlign: 'center'}}>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='link-1' href='/home'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-home'>
              <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
              <polyline points='9 22 9 12 15 12 15 22'></polyline>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='link-2' href='/explore'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-hash'>
              <line x1='4' y1='9' x2='20' y2='9'></line>
              <line x1='4' y1='15' x2='20' y2='15'></line>
              <line x1='10' y1='3' x2='8' y2='21'></line>
              <line x1='16' y1='3' x2='14' y2='21'></line>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item  style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled' href='/notifications'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-bell'>
              <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
              <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled' href='/messages'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-mail'>
              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
              <polyline points='22,6 12,13 2,6'></polyline>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled' href='/bookmarks'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-bookmark'>
              <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled' href='/lists'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-file-text'>
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
              <polyline points='14 2 14 8 20 8'></polyline>
              <line x1='16' y1='13' x2='8' y2='13'></line>
              <line x1='16' y1='17' x2='8' y2='17'></line>
              <polyline points='10 9 9 9 8 9'></polyline>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled' href='/username'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-user'>
              <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{marginTop: '1.5rem'}}>
          <Nav.Link eventKey='disabled'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='feather feather-more-horizontal'>
              <circle cx='12' cy='12' r='1'></circle>
              <circle cx='19' cy='12' r='1'></circle>
              <circle cx='5' cy='12' r='1'></circle>
            </svg>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
