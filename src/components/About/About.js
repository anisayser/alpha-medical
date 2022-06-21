import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImg from '../../images/about-img.jpg';
import aboutIcon from '../../images/fav-icon.png';
import './About.css';

const About = () => {
    return (
        <section className='about-us py-24'>
            <div className="container mx-auto">
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='about-contained mx-auto md:mx-0'>
                        <div className='w-72 relative'>
                            <img src={aboutImg} alt="" />
                            <div className='bg-rose-600 text-white rounded-2xl absolute top-40 right-0 sm:-right-20 p-5 pl-10'>
                                <div className='absolute bg-white p-2 rounded-full -top-8 right-0 sm:-right-8 drop-shadow-2xl'>
                                    <img src={aboutIcon} alt="" />
                                </div>
                                <h4 className='text-2xl pb-4'>Open Hours</h4>
                                <table className='table-auto w-56'>
                                    <tbody>
                                        <tr>
                                            <td>Monday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Wednesday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Tuesday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Thursday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Friday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Saturday : </td>
                                            <td>08.00 - 10.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='md:mt-0 mt-10 px-2'>
                        <h1 className='text-4xl text-rose-600'>About Us</h1>
                        <h1 className='text-3xl py-5'>Professional Health and Medical Care in Full Measure</h1>
                        <p className='text-gray-400 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p className='text-gray-400 pb-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <button className='bg-rose-600 hover:bg-rose-700 flex items-center text-white py-1 pl-6 pr-1 rounded-full text-base transition ease-in duration-300'>READ MORE <FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-3 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight} /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;