import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, updateUserProfile, providerLogin, verifyEmail } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                setError('')
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
                toast.success('Verify your email')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    const handleChecked = event => {
        setAccepted(event.target.checked)
    }

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => (console.error(error)))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .then(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleChecked} type="checkbox" label="Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <div className='text-center'>
                <p>or</p>
                <Button onClick={handleGoogleSignIn} className='me-3' variant="outline-dark"> <FaGoogle /> Sign in with Google </Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"> <FaGithub /> Sign in with Github </Button>
            </div>
        </Form>
    );
};

export default Register;