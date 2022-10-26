import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <Form className='w-50'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Form.Text className="text-danger d-block">
                We'll never share your email with anyone else.
            </Form.Text>
            <div className='text-center'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            <div className='text-center'>
                <p>or</p>
                <Button className='me-3' variant="outline-primary">Sign in with Google </Button>
                <Button variant="outline-primary">Sign in with Github </Button>
            </div>
        </Form>
    );
};

export default Login;