import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DataForm = (props) => {
  const [form, setData] = useState({
    user: props.form ? props.form.user : '',
    supply: props.form ? props.form.supply : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { user, supply } = form;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [user, supply];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const form = {
        user,
        supply
      };
      props.handleOnSubmit(form);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setData((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="user">
          <Form.Label>User</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="user"
            value={user}
            placeholder="Enter user"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="supply">
          <Form.Label>Total Supply</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="supply"
            value={supply}
            placeholder="Enter supply "
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DataForm;