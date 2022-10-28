import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')

    const { signIn, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your email is not verified')
                }
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Text className="text-danger d-block">
                {error}
            </Form.Text>
            <div className='text-center'>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </div>
            <div>
                <Link to='/register'>Create a new account</Link>
            </div>

        </Form>
    );
};

export default Login;