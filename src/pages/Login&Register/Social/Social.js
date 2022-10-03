import React from 'react';
import "./Social.css";
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='social-icon text-center'>
            <button onClick={() => signInWithGoogle()} className='google'> <img src={google} alt="" />Google</button>
            <button onClick={() => signInWithGithub()} className='github'> <img src={github} alt="" />Github</button>
        </div>
    );
};

export default Social;