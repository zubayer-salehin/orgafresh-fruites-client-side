import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./EmailVerfication.css"

const EmailVerificatoin = () => {

    let [user] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const resendEmail = async () => {
        await sendEmailVerification();
        alert("Email has been sent");
    }

    return (
        <div className='d-flex justify-content-center align-items-center emailverfication-container'>
            <div className='w-50 h-75 shadow-effect text-center rounded'>
                <div className="open-email">
                    <FontAwesomeIcon className='email-icon' icon={faEnvelopeOpen}></FontAwesomeIcon>
                </div>
                <h3 className='mb-3 text-gray'>Please verify your email</h3>
                <div className='mb-3'>
                    <p className='text-gray mb-0'>You are almost there! we sent an email to</p><b>{user.email}</b>
                </div>
                <p className='text-gray'>Just click on the link in that email to complete our singup. <br /> If you don't see it, you may need to check your spam folder</p>
                <p className='text-gray'>Still can't find the email?</p>
                <button onClick={resendEmail} className='py-2 px-4 border-0 bg-green text-white rounded'>Resend Email</button>
            </div>
        </div>
    );
};

export default EmailVerificatoin;