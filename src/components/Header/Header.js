import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faBars, faClock, faEnvelope, faLocation, faLocationDot, faMagnifyingGlass, faPhoneFlip, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebaseInit';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import mainLogo from '../../images/logo4.png';
import mainLogo2 from '../../images/logo6.png';
import './Header.css';


// FONT AWESOME ICONS FROM LIBRARY
library.add(fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram);

const Header = () => {

    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const [services] = useServices();
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');

    const getSearchText = (e) => {
        setSearchText(e.target.value);
    }



    let searchResult = services.filter(service => service.name.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(searchText, searchResult);

    if (searchText.length === 0) {
        searchResult = []
    }

    const goToService = (id) => {
        setSearchText('');
        navigate(`/service/${id}`)
    }



    return ([
        <section className='header'>
            {/* HEADER PART ONE START */}
            <div className="header-one bg-blue-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <p className='font-normal text-base'><FontAwesomeIcon icon={faEnvelope} /> Info@alpha-medic.com</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="header-social-icons">
                            <FontAwesomeIcon className='mx-2 text-base' icon={faFacebookSquare} />
                            <FontAwesomeIcon className='mx-2 text-base' icon={faTwitter} />
                            <FontAwesomeIcon className='mx-2 text-base' icon={faLinkedin} />
                            <FontAwesomeIcon className='mx-2 text-base' icon={faInstagram} />
                        </div>
                        <div className='bg-rose-800 text-white text-center py-2 px-3 font-light text-base'>
                            {!user ?
                                <div>
                                    <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                                </div>
                                :
                                <div>
                                    <Link onClick={() => signOut(auth).then(() => { })} to="/login">{user.displayName} / Logout</Link>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* HEADER PART ONE ENDS */}

            {/* HEADER PART TWO STARTS */}
            <div className="hader-two hidden lg:block md:block">
                <div className="container mx-auto py-4 flex items-center justify-between">
                    <div className="logo">
                        <img className='h-12' src={mainLogo} alt="" />
                    </div>
                    <div className="contact-info flex">
                        <div className='info flex items-center'>
                            <div className='bg-rose-100 h-8 w-8 rounded-full text-rose-700 mr-2 flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>

                            <p className='font-normal text-base'>121 Waldeck Street <br /> NY, USA</p>
                        </div>
                        <div className='info flex items-center px-3 mx-3 border-x border-gray-300'>
                            <div className='bg-rose-100 h-8 w-8 rounded-full text-rose-700 mr-2 flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faPhoneFlip} />
                            </div>
                            <p className='font-normal text-base'>Call Us 24/7<br />+80 (234) 123 567 12</p>
                        </div>
                        <div className='info flex items-center'>
                            <div className='bg-rose-100 h-8 w-8 rounded-full text-rose-700 mr-2 flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <p className='font-normal text-base'>Mon - Fri: 8:00 - 20:00<br />Sat - Sun: 9:00 - 16:00</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* HEADER PART TWO ENDS */}
        </section>,



        <section className='header sticky top-0 z-40'>
            {/* HEADER PART THREE STARTS |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/}
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <div className='stick'>
                <nav className="bg-rose-600">
                    <div className="container mx-auto px-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* <!-- Mobile menu button--> */}
                                <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    {/* <!--
                                Icon when menu is closed.

                                Heroicon name: outline/menu

                                Menu open: "hidden", Menu closed: "block"
          --> */}
                                    <FontAwesomeIcon className='text-lg font-bold text-white' icon={!open ? faBars : faXmark} />
                                    {/* <!--
                                Icon when menu is open.

                                Heroicon name: outline/x

                                Menu open: "block", Menu closed: "hidden"
          --> */}

                                </button>
                            </div>
                            <div className="ml-7 logo lg:hidden sm:hidden xs:block">
                                <img className='h-6' src={mainLogo2} alt="" />
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                                    <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/> */}
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex space-x-6">
                                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                        {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a> */}

                                        <Link to="/home" className="text-white py-2 text-xl font-medium">Home</Link>
                                        <Link to="about" className="text-white py-2 text-xl font-medium">About</Link>
                                        <Link to="/services" className="text-white py-2 text-xl font-medium">Services</Link>
                                        <Link to="/appoinment" className="text-white py-2 text-xl font-medium">Appointment</Link>
                                        <Link to="/blogs" className="text-white py-2 text-xl font-medium">Blog</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <form>
                                    <input onKeyUp={getSearchText} className='bg-rose-500 w-20 lg:w-80 sm:w-32 py-2 px-3 text-white' type="text" name="search" id="search" placeholder='Search' />
                                    <button className='bg-rose-500 py-2 px-4 text-white'><FontAwesomeIcon icon={faMagnifyingGlass} /></button><br />
                                    {searchText.length !== 0 ?
                                        <div className='absolute w-60 lg:w-[23rem] md:w-[18rem] right-0 top-14 sm:top-16 md:top-16 h-96 overflow-y-auto'>
                                            {
                                                searchResult.map(result =>

                                                    <div onClick={() => goToService(result.id)} className='bg-white cursor-pointer flex space-x-5 items-center border-b p-2'>
                                                        <img className='h-10 w-10 rounded-full' src={result.img} alt="" />
                                                        <div>
                                                            <h5>{result.name}</h5>
                                                            <p className='text-sm font-light text-slate-400'>{result.description.slice(0, 30)}</p>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )
                                            }

                                        </div>
                                        : ''
                                    }
                                </form>

                                {/* <!-- Profile dropdown --> */}
                                {/* <div className="ml-3 relative">
                                    
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pb-0 space-y-1">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <div className={!open ? 'hidden' : 'block'}>
                                <Link onClick={() => setOpen(!open)} to="/home" className="text-white pt-0 pb-1 text-sm font-medium block">Home</Link>
                                <Link onClick={() => setOpen(!open)} to="/about" className="text-white py-1 text-sm font-medium block">About</Link>
                                <Link onClick={() => setOpen(!open)} to="/services" className="text-white py-1 text-sm font-medium block">Services</Link>
                                <Link onClick={() => setOpen(!open)} to="/appoinment" className="text-white py-1 text-sm font-medium block">Appoinment</Link>
                                <Link onClick={() => setOpen(!open)} to="/blogs" className="text-white py-1 text-sm font-medium block">Blog</Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>


            {/* HEADER PART THREE ENDS */}
        </section>
    ]);
};

export default Header;