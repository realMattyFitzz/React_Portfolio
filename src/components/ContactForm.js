import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BSForm extends Component {
    render () {
    return (
        <div>
            <Form style= {{ marginRight: '20%', marginLeft: '20%', marginBottom: '10%' }}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{ color: 'skyblue' }}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{ color: 'skyblue' }}>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>
  <Form.Group>
      <Form.Label style={{ color: 'skyblue' }}>Message</Form.Label>
      <Form.Control as="textarea" rows="5" />
  </Form.Group>

  <Button className="button" type="submit">
    Submit
  </Button>
</Form>
        </div>
    ) 
}
}
export default BSForm 