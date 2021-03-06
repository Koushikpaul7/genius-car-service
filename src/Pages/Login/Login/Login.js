import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate= useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password= passwordRef.current.value;
        console.log(email,password);
    }
    const navigateRegister=event=>{
        navigate('/register');
    }

    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary mt-5 text-center'>Log in</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New To Genius car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please register</Link> </p>
        </div>
    );
};

export default Login;