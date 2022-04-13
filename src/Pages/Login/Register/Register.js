import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login')
    }

    const handleRegister=(event)=>{
        event.preventDefault();
        const name= event.target.name.value
        const email = event.target.email.value
        const password= event.target.password.value
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" />
            
                <input type="email" name="email" id="" />
              
                <input type="password" name="password" id="" />
            
                <input type="submit" value="Register" />
            </form>
            <p>Registered with Genius car? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Log in</Link> </p>
        </div>
    );
};

export default Register;