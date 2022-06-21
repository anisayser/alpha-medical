import { faAngleDoubleRight, faArrowCircleDown, faArrowCircleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import formImg from '../../images/form-img.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import formLogo from '../../images/logo6.png';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebaseInit';


const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth)

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleUserDetails = (e) => {
        setUserDetails(e.target.value)
    }


    const handleAuthentication = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userDetails })
        sendEmailVerification();
        
    }

    if (user) {
        // toast('Account Created Sucessfuly. Verification link sent to your Email.');
        navigate('/home', {replace: true})
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
                        <img className='absolute bottom-0 -right-28' style={imgSize} src={formImg} alt="Form Img" />
                    </div>
                    <div className='bg-white w-full h-screen flex justify-center items-center'>
                        <div className='w-96'>
                            <Link className='text-rose-600 mb-10' to="/home"><FontAwesomeIcon icon={faArrowLeft} /> Home</Link>
                            <h1 className='text-4xl font-bold'>Register Now</h1>
                            <p className='text-gray-400 pb-8'>Register by entering the information below</p>
                            <form onSubmit={handleAuthentication} className='mb-5'>
                                <input onBlur={handleUserDetails} className='p-3 bg-slate-100 w-full mb-5' type="text" name="name" id="name" placeholder='Name*' /><br />
                                <input onBlur={handleEmailChange} className='p-3 bg-slate-100 w-full' type="email" name="email" id="email" placeholder='Email*' required /><br />
                                <input onBlur={handlePasswordChange} className='p-3 bg-slate-100 w-full my-5' type="password" name="password" id="password" placeholder='Password*' required /><br />

                                {
                                    error ? <p className='bg-rose-100 text-gray-400 p-2 mb-5'>{error.message}</p> : ''
                                }

                                <button type='submit' className='bg-rose-600 hover:bg-rose-800 inline-flex items-center text-white py-1 pl-6 pr-1 rounded-full text-xl transition ease-in duration-300'>Register<FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-3 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight} /></button><br />


                            </form>
                            <span>Already have an Account. <FontAwesomeIcon icon={faArrowCircleRight} /></span> <Link className='text-rose-600' to="/login">Login Now</Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;