import React from 'react';
import { useState,useEffect } from 'react';
import Tuit from './Tuit';
import moment from 'moment';
import axios from 'axios';

export default function TuitList() {
  const [data, setData] = useState([
    {
      id: 1,
      owner: { name: 'Diego', id: 'diegodieh', img: 'https://pbs.twimg.com/profile_images/1212423177193893890/ObiF_CDC_400x400.jpg' },
      time: moment("19951203", "YYYYMMDD"),
      content: 'Nací',
      likes: Math.ceil(Math.random()*100),
      retuits: Math.ceil(Math.random()*100),
      comments: []
    },
    {
        id: 2,
        owner: { name: 'Diego', id: 'diegodieh', img: 'https://pbs.twimg.com/profile_images/1212423177193893890/ObiF_CDC_400x400.jpg' },
        time: Date.now(),
        content: 'Jejeje',
        likes: Math.ceil(Math.random()*100),
        retuits: Math.ceil(Math.random()*100),
        comments: []
      }
  ]);
  useEffect(() => {
    axios.post('/api/tuits', {
      params: {
        userId: 0,
        type: 'feed'
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
    <ul style={{padding: 0}}>
      {data.map(tuit => (
        <Tuit data={tuit} />
      ))}
    </ul>
  );
}
