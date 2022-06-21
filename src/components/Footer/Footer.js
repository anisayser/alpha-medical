import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faEnvelope, faLocationDot, faPaperPlane, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';
import footerLogo from '../../images/logo5.png';
import postImg1 from '../../images/post-img1.jpg';
import postImg2 from '../../images/post-img2.jpg';
import postImg3 from '../../images/post-img3.jpg';
import postImg4 from '../../images/post-img4.jpg';
import './Footer.css';


library.add(fab, faTwitter, faFacebookSquare, faLinkedin, faGithub, faInstagram);



const Footer = () => {
    return (
        <section className='footer'>
            <div className="container mx-auto text-white pt-24 pb-8">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 pl-10 md:pl-0 lg:pl-0">
                    <div className='footer-one'>
                        <img className='pb-10 w-52' src={footerLogo} alt="" />
                        <div className='pb-5 flex items-center space-x-3'>
                            <div className='flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div>
                                <p className='text-base'>ADDRESS</p>
                                <p className='font-normal text-sm'>121 Waldeck Street NY, USA</p>
                            </div>
                        </div>
                        <div className='pb-5 flex items-center space-x-3'>
                            <div className='flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faPhoneFlip} />
                            </div>
                            <div>
                                <p className='text-base'>PHONE</p>
                                <p className='font-normal text-sm'>0800-123456, 0800-123489</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center justify-center text-base'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p className='text-base'>EMAIL</p>
                                <p className='font-normal text-sm'>info@alphamedic.com</p>
                            </div>
                        </div>

                        {/* FOOTER SOCIAL ICONS */}
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
                            <a href="">
                            <div className='transition-all ease duration-300 w-10 h-10 rounded-full border-2 hover:border-rose-600 hover:bg-rose-600 flex items-center justify-center'>
                                <FontAwesomeIcon className='text-base' icon={faLinkedin} />
                            </div>
                            </a>
                            <a href="">
                            <div className='transition-all ease duration-300 w-10 h-10 rounded-full border-2 hover:border-rose-600 hover:bg-rose-600 flex items-center justify-center'>
                                <FontAwesomeIcon className='text-base' icon={faInstagram} />
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="footer-two">
                        <h1 className='text-3xl mb-3 sm:mb-10'>Useful Links</h1>
                        <div className='flex md:flex-col md:space-y-4'>
                            <Link to='/home'><FontAwesomeIcon icon={faAngleRight} /> Home</Link>
                            <Link to='/about'><FontAwesomeIcon icon={faAngleRight} /> About</Link>
                            <Link to='/services'><FontAwesomeIcon icon={faAngleRight} /> Service</Link>
                            <Link to='/appoinment'><FontAwesomeIcon icon={faAngleRight} /> Appointment</Link>
                            <Link to='/blogs'><FontAwesomeIcon icon={faAngleRight} /> Blog</Link>
                        </div>
                    </div>

                    <div className="footer-three">
                        <h1 className='text-3xl mb-3 sm:mb-10'>Recent Posts</h1>
                        <div className='recent-posts'>
                            <div className='post pb-3 flex items-center space-x-3'>
                                <img className='h-16' src={postImg1} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Post Title</h4>
                                    <p className='text-sm'>Post short description here</p>
                                </div>
                            </div>
                            <div className='post pb-3 flex items-center space-x-3'>
                                <img className='h-16' src={postImg2} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Post Title</h4>
                                    <p className='text-sm'>Post short description here</p>
                                </div>
                            </div>
                            <div className='post pb-3 flex items-center space-x-3'>
                                <img className='h-16' src={postImg3} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Post Title</h4>
                                    <p className='text-sm'>Post short description here</p>
                                </div>
                            </div>
                            <div className='post flex items-center space-x-3'>
                                <img className='h-16' src={postImg4} alt="" />
                                <div>
                                    <h4 className='text-2xl'>Post Title</h4>
                                    <p className='text-sm'>Post short description here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-four">
                        <table className='w-full text-center'>
                            <thead>
                                <tr>
                                    <th className='text-3xl pb-3 sm:pb-10'>Days</th>
                                    <th className='text-3xl pb-3 sm:pb-10'>Opening Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Thrusday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>08.00 - 10.00</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="subscribe-field pt-10 text-center">
                            <h1 className='text-xl mb-2'>Sign Up for Newsletter</h1>
                            <form>
                                <input className='bg-slate-700 px-3 py-2' type="email" name="email" id="" placeholder='Email' />
                                <button className='py-2 px-4 bg-rose-600'><FontAwesomeIcon icon={faPaperPlane}/></button>
                            </form>
                        </div>
                    </div>

                </div>
                {/* GRID ENDS HERE */}

                <hr className='mt-14 mb-8' />

                <div className='flex flex-wrap justify-center sm:justify-between'>
                    <div>
                        <p>© Copyright 2022 - Alpha Medical | All Rights Reserved.</p>
                    </div>
                    <div>
                        <p>Private Policy | Terms and Conditions.</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Footer;