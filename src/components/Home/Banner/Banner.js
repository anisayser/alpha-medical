import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <section className='home-banner flex items-center px-2'>
            <div className="container mx-auto banner-content">
                <h4 className='text-xl lg:text-4xl'>We Are Here For You</h4>
                <h1 className='text-4xl lg:text-7xl py-5'>Professional and <br /> Friendly <span className='text-rose-600'>Health Care</span> <br />For You</h1>
                <p className='text-sm lg:text-base pb-7'>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of using <br /> Lorem Ipsum.</p>

                <button className='bg-rose-600 hover:bg-rose-800 mx-auto lg:mx-0 md:mx-0 sm:mx-0 flex items-center text-white py-1 pl-6 pr-1 rounded-full text-xl transition ease-in duration-300'>BOOK NOW <FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-4 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight}/></button>
            </div>
        </section>
    );
};

export default Banner;