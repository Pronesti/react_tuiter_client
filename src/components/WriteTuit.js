import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function WriteTuit() {
  return (
    <div style={{outline: '0.01px solid lightgrey', padding: '1rem'}}>
      <Form style={{paddingBottom: '1rem', marginBottom: '2rem'}} action='post' method='POST'>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control as='textarea' rows='3' type='text' placeholder='¿Qué está pasando?' resize={false} name='post' />
        </Form.Group>
        <Button variant='primary' type='submit' style={{float: 'right'}}>
          Tuitear
        </Button>
      </Form>
    </div>
  );
}
