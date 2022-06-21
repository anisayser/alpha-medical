import { faAngleDoubleRight, faArrowCircleDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import formImg from '../../images/form-img.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import firebaseInit from '../../firebase/firebaseInit';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import formLogo from '../../images/logo6.png';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



library.add(fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram, faGoogle);

const Login = () => {

    const [signInWithGoogle, user, loading, error2] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user2, loading2, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    const location = useLocation();
    const navigate = useNavigate();



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetPassword = async () => {
        // const theEmail = e.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Password Reset Link Set to your Email.');
            // alert('Password Reset Link Set to your Email.');
        } else {
            toast('Please enter your email address.', {
                progressClassName: 'fancy-progress-bar'
            })
            // alert('Please enter your email address.')
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const from = location.state?.from?.pathname || "/";

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password)
        navigate(from, {
            replace: true
        })
    }


    if (user) {
        navigate(from, {
            replace: true
        })
    }

    const imgSize = {
        height: '500px',
    }
    return (
        <section className='login-form'>
            <div className='bg-white h-screen w-full z-50 absolute top-0'>
                <div className='flex'>
                    <div className='hidden md:block lg:block bg-rose-500 h-screen w-2/6 relative'>
                        <Link to="/home">
                            <img className='p-10' src={formLogo} alt="" />
                        </Link>
                        <ToastContainer></ToastContainer>
                        <img className='absolute bottom-0 -right-28' style={imgSize} src={formImg} alt="Form Img" />
                    </div>
                    <div className='bg-white w-full h-screen flex justify-center items-center'>
                        <div className='w-96'>
                            <Link className='text-rose-600 mb-10' to="/home"><FontAwesomeIcon icon={faArrowLeft} /> Home</Link>
                            <h1 className='text-4xl font-bold'>Welcome Back</h1>
                            <p className='text-gray-400 pb-8'>Login by entering the information below</p>
                            <form onSubmit={handleEmailLogin}>

                                <input onBlur={handleEmailChange} className='p-3 bg-slate-100 w-full' type="email" name="email" id="" placeholder='Email*' required /><br />
                                <input onBlur={handlePasswordChange} className='p-3 bg-slate-100 w-full my-5' type="password" name="password" id="" placeholder='Password*' required /><br />

                                <button type='submit' className='bg-rose-600 hover:bg-rose-800 inline-flex items-center text-white py-1 pl-6 pr-1 rounded-full text-xl transition ease-in duration-300'>LOGIN<FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-3 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight} /></button> <Link className='text-rose-600 ml-5' to="/register">Create Account</Link>
                                <NavLink className='mt-5 block' onClick={resetPassword} to="">Forgot Password?</NavLink>

                                {
                                    error ? <p className='bg-rose-100 text-gray-400 p-2 mb-5'>{error.message}</p> : ''
                                }
                                {
                                    error2 ? <p className='bg-rose-100 text-gray-400 p-2 mb-5'>{error2.message}</p> : ''
                                }

                            </form>
                            <p className='pt-5 '>Or you can join with <FontAwesomeIcon icon={faArrowCircleDown} /></p>
                            <div className="footer-social-icons flex space-x-5 pt-5">
                                <a href="">
                                    <div className='transition-all ease duration-300 w-10 h-10 rounded-full border-2 hover:border-rose-600 hover:bg-rose-600 flex items-center justify-center'>
                                        <FontAwesomeIcon className='text-base' icon={faFacebookSquare} />
                                    </div>
                                </a>
                                <a href="">
                                    <div className='transition-all ease duration-300 w-10 h-10 rounded-full border-2 hover:border-rose-600 hover:bg-rose-600 flex items-center justify-center'>
                                        <FontAwesomeIcon className='text-base' icon={faTwitter} />
                                    </div>
                                </a>
                                <button onClick={() => signInWithGoogle()}>
                                    <div className='transition-all ease duration-300 w-10 h-10 rounded-full border-2 hover:border-rose-600 hover:bg-rose-600 flex items-center justify-center'>
                                        <FontAwesomeIcon className='text-base' icon={faGoogle} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;