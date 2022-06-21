import React, { useEffect, useState } from 'react';
import img1 from '../../images/coronavirus.jpg';
import img5 from '../../images/stathoscope.jpg';
import img6 from '../../images/heart.jpg';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import Service from './Service/Service';
import useServices from '../../hooks/useServices';
import ServiceLoading from './ServiceLoading/ServiceLoading';






const Services = () => {

    const [services] = useServices();
    // console.log(services.length);

    // const lId = 0;

    return (
        <section className='searvices bg-gray-100'>
            <div className="container mx-auto py-32 text-center">
                <h1 className='text-3xl text-rose-600'>Our Services</h1>
                <h1 className='text-3xl font-bold py-2'>Special High-quality Services</h1>
                <p className='text-base text-gray-400'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>


                {
                    services.length === 0 ?
                        <div className="loading">
                            <ServiceLoading></ServiceLoading>
                        </div>

                        :
                        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-4 pt-14">
                            {services.map(service => <Service key={service.id} services={service}></Service>)}
                        </div>
                }


            </div>
        </section>
    );
};

export default Services;