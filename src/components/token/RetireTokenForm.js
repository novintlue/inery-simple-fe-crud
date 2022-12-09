import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DataForm = (props) => {
  const [form, setData] = useState({
    user: props.form ? props.form.user : '',
    quantity: props.form ? props.form.quantity : '',
    memo: props.form ? props.form.memo : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { user, quantity, memo } = form;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [user, quantity, memo];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const form = {
        user,
        quantity,
        memo
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
        <Form.Group controlId="quantity">
          <Form.Label>Quantity To Issue</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="quantity"
            value={quantity}
            placeholder="Enter quantity "
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="memo">
          <Form.Label>Quantity To Issue</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="memo"
            value={memo}
            placeholder="Enter memo "
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