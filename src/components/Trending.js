import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

export default function Trending() {
  const [data,setData] = useState([
    { name: '#Boca', number: Math.ceil(Math.random()*1000) },
    { name: '#Boca', number: Math.ceil(Math.random()*1000) },
    { name: '#Boca', number: Math.ceil(Math.random()*1000) },
    { name: '#Boca', number: Math.ceil(Math.random()*1000) }
  ]);
  useEffect(() => {
    axios.get('/api/trending', {
      params: {
        quantity: 4
      }
    })
    .then(function (response) {
      console.log(response);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  }, []);

  return (
    <div> 
      <ListGroup>
        <ListGroup.Item variant='secondary' style={{borderLeft: 'none', borderRight: 'none', borderTop:'none'}}>
          <h6>
            <b>Tendencias en Buenos Aires</b>
          </h6>
        </ListGroup.Item>
        <ListGroup.Item variant='secondary' style={{borderLeft: 'none', borderRight: 'none'}}>
          <span className='text-muted'>1 · Tendencias</span>
          <br />
          <b>{data[0].name}</b>
          <br />
          <span className='text-muted'>{data[0].number} Tuits</span>
        </ListGroup.Item>
        <ListGroup.Item variant='secondary' style={{borderLeft: 'none', borderRight: 'none'}}>
          <span className='text-muted'>2 · Tendencias</span>
          <br />
          <b>{data[1].name}</b>
          <br />
          <span className='text-muted'>{data[1].number} Tuits</span>
        </ListGroup.Item>
        <ListGroup.Item variant='secondary' style={{borderLeft: 'none', borderRight: 'none'}}>
          <span className='text-muted'>3 · Tendencias</span>
          <br />
          <b>{data[2].name}</b>
          <br />
          <span className='text-muted'>{data[2].number} Tuits</span>
        </ListGroup.Item>
        <ListGroup.Item variant='secondary' style={{borderLeft: 'none', borderRight: 'none', borderBottom: 'none'}}>
          <span className='text-muted'>4 · Tendencias</span>
          <br />
          <b>{data[3].name}</b>
          <br />
          <span className='text-muted'>{data[3].number} Tuits</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
