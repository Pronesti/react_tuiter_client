import React from 'react'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function Search() {
    return (
        <Form inline style={{paddingTop: '1rem', paddingBottom: '1rem'}} action='search' method='post'>
        <FormControl type="text" placeholder="Buscar en tuiter" style={{backgroundColor: 'lightgrey', width: '100%'}} name='query' />
      </Form>
    )
}
