import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading) {
        return <Loading loadingStatus="true"></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (agree) {
            const displayName = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName })
        } else {
            toast.warn("Accepet our term and condition")
        }
    }

    if (user) {
        navigate("/home");
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='register-width px-5 py-4 register-margin form-shadow'>
                    <h3 className='title mb-4 text-center'>Register</h3>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className='position-relative input rounded'>
                            <input className='ps-2' type="text" name="name" id="name" placeholder='Name' required /><span className='icon-position-set'><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon></span><br />
                        </div>
                        <div className='position-relative input rounded'>
                            <input className='ps-2' type="email" name="email" id="email" placeholder='Email' required /><span className='icon-position-set'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span><br />
                        </div>
                        <div className='position-relative input rounded'>
                            <input className='ps-2' type="password" name="password" id="password" placeholder='Password' required /><span className='icon-position-set'><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span><br />
                        </div>
                        <div className='mt-3 mb-4'>
                            <label htmlFor="checkbox">
                                <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="checkbox" />
                                <span className='ms-2 redirect-page-link'>Accept our terms and condition</span>
                            </label>
                        </div>
                        {errorElement}
                        <input className='w-100 border-0 btn-padding bg-green text-light rounded' type="submit" value="Register" />
                    </form>
                    <div className='orStyle d-flex align-items-center redirect-page-link my-3'>
                        <div ></div>
                        <p className='mx-2 mb-0'>Or continue with</p>
                        <div></div>
                    </div>
                    <Social></Social>
                    <p className='redirect-page-link mt-3 text-center mb-1'>Already have an account ? <Link to="/login" className='green hover-stop'>Login here</Link></p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;