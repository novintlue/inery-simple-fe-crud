import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DataForm = (props) => {
  const [form, setData] = useState({
    to: props.form ? props.form.to : '',
    quantity: props.form ? props.form.quantity : '',
    memo: props.form ? props.form.memo : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { to, quantity, memo } = form;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [to, quantity, memo];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const form = {
        to,
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
        <Form.Group controlId="to">
          <Form.Label>To</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="to"
            value={to}
            placeholder="Enter user to issue"
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