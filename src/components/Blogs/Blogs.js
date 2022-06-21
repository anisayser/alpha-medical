import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import blogImg1 from '../../images/blog-img1.jpg';
import blogImg2 from '../../images/blog-img2.jpg';
import blogImg3 from '../../images/blog-img3.jpg';
import './Blogs.css';
const Blogs = () => {
    return (
        <section className='blogs py-32'>
            <div className="container mx-auto">
                <div className="heading text-center">
                    <h1 className='text-3xl text-rose-600'>Our Blog</h1>
                    <h1 className='text-3xl font-bold py-2'>Our Latest News</h1>
                    <p className='text-base text-gray-400'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 pt-14">
                    <div className='blog'>
                        <div className="img-box w-full max-h-80 relative">
                            <img className='max-h-80 w-full' src={blogImg1} alt="Blog" />
                            <div className='z-30 bg-rose-600 absolute text-white text-center w-14 -bottom-2'>
                                <span className='text-sm'>08 <br /> July</span>
                            </div>
                            <div className='overlay bg-rose-600'>

                            </div>
                        </div>
                        <div className='px-2'>
                            <h1 className='py-6 hover:text-rose-600 text-2xl'>Spending More and Getting Less for Health Care</h1>
                            <div className='flex justify-between pb-6'>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faUser} />
                                    <span className='text-sm font-light hover:text-rose-600'>by John Doe</span>
                                </div>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faComment} />
                                    <span className='text-sm font-light hover:text-rose-600'>Comments 2</span>
                                </div>
                            </div>
                            <hr />
                            <p className='text-sm text-gray-400 font-light pt-6 pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a className='text-sm text-rose-600' href="#">Read More</a>
                        </div>
                    </div>
                    <div className='blog'>
                        <div className="img-box w-full max-h-80 relative">
                            <img className='max-h-80 w-full' src={blogImg1} alt="Blog" />
                            <div className='z-30 bg-rose-600 absolute text-white text-center w-14 -bottom-2'>
                                <span className='text-sm'>08 <br /> July</span>
                            </div>
                            <div className='overlay bg-rose-600'>

                            </div>
                        </div>
                        <div className='px-2'>
                            <h1 className='py-6 hover:text-rose-600 text-2xl'>Spending More and Getting Less for Health Care</h1>
                            <div className='flex justify-between pb-6'>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faUser} />
                                    <span className='text-sm font-light hover:text-rose-600'>by John Doe</span>
                                </div>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faComment} />
                                    <span className='text-sm font-light hover:text-rose-600'>Comments 2</span>
                                </div>
                            </div>
                            <hr />
                            <p className='text-sm text-gray-400 font-light pt-6 pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a className='text-sm text-rose-600' href="#">Read More</a>
                        </div>
                    </div>
                    <div className='blog'>
                        <div className="img-box w-full max-h-80 relative">
                            <img className='max-h-80 w-full' src={blogImg1} alt="Blog" />
                            <div className='z-30 bg-rose-600 absolute text-white text-center w-14 -bottom-2'>
                                <span className='text-sm'>08 <br /> July</span>
                            </div>
                            <div className='overlay bg-rose-600'>

                            </div>
                        </div>
                        <div className='px-2'>
                            <h1 className='py-6 hover:text-rose-600 text-2xl'>Spending More and Getting Less for Health Care</h1>
                            <div className='flex justify-between pb-6'>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faUser} />
                                    <span className='text-sm font-light hover:text-rose-600'>by John Doe</span>
                                </div>
                                <div className='flex space-x-3'>
                                    <FontAwesomeIcon className='text-rose-600' icon={faComment} />
                                    <span className='text-sm font-light hover:text-rose-600'>Comments 2</span>
                                </div>
                            </div>
                            <hr />
                            <p className='text-sm text-gray-400 font-light pt-6 pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <a className='text-sm text-rose-600' href="#">Read More</a>
                        </div>
                    </div>
                    
                </div>


            </div>
        </section>
    );
};

export default Blogs;