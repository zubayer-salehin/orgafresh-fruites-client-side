import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import "./Login.css"

const Login = () => {

    const emailRef = useRef("");
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let location = useLocation();  

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast.success("Sent Mail Successfully");
        }else{
            toast.warn("please enter your email");
        }
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='form-login px-5 py-4 mt-3 mb-4 form-shadow'>
                <h3 className='title mb-4 text-center'>Log in</h3>
                <form onSubmit={handleLogInSubmit}>
                    <div className='position-relative input rounded'>
                        <input className='ps-2' ref={emailRef} type="email" name="" id="email" placeholder='Email' required /><span className='icon-position-set'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span><br />
                    </div>
                    <div className='position-relative input rounded'>
                        <input className='ps-2' type="password" name="" id="password" placeholder='Password' required /><span className='icon-position-set'><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span><br />
                    </div>
                    <p className='redirect-page-link mb-4'>Forget Password ?<span onClick={handleResetPassword} className='green ms-1 pointer'> Reset Password</span></p>
                    {errorElement}
                    <input className='w-100 border-0 btn-padding bg-green text-light rounded' type="submit" value="Log In" />
                </form>
                <div className='orStyle d-flex align-items-center redirect-page-link my-3'>
                    <div ></div>
                    <p className='mx-2 mb-0'>Or sing in with</p>
                    <div></div>
                </div>
                <Social></Social>
                <p className='redirect-page-link text-center mt-3 mb-1'>Create account ? <Link to="/register" className='green hover-stop'>Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;