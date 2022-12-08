import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DataForm = (props) => {
  const [form, setData] = useState({
    id: props.form ? props.form.id : '',
    user: props.form ? props.form.user : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { id, user } = form;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [id, user];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const form = {
        id: id,
        user
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
      case 'id':
        if (value === '' || parseInt(value) === +value) {
          setData((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
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
        <Form.Group controlId="id">
          <Form.Label>Id</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="id"
            value={id}
            placeholder="Enter id "
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="user">
          <Form.Label>User</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="user"
            value={user}
            placeholder="Enter user "
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