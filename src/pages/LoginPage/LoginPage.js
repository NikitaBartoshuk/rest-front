import React from 'react';
import './loginpage.css';

const LoginPage = (props) => {
    return (
        props.formType === 'register' ? (
            <div className='login-page-container'>
                <div className='login-form'>
                    <h1>Registration</h1>
                    <input className='form-input' type="text" placeholder='Email' />
                    <input className='form-input' type="text" placeholder='Password' />
                    <input className='form-input' type="text" placeholder='Confirm password' />
                    <button className='btn-1'>Next</button>
                </div>
            </div>
        ) : (
            <div className='login-page-container'>
                <div className='login-form'>
                    <h1>Login</h1>
                    <input className='form-input' type="text" placeholder='Email' />
                    <input className='form-input' type="text" placeholder='Password' />
                    <button className='btn-1'>Next</button>
                </div>
            </div>
        )
    );
};

export default LoginPage;
