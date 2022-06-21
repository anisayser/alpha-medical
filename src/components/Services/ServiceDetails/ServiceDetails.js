import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import serImg from '../../../images/blog-img2.jpg';
import ShortBanner from '../../ShortBanner/ShortBanner';
import Sidebar from '../../Sidebar/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    // console.log(serviceId);

    const [services] = useServices();

    const theService = services.find(service => service.id == serviceId);

    const navigate = useNavigate();

    const goToAppoinMent = () => {
        navigate(`/appoinmentfor/${theService.name}`)
    }

    return (
        <div>
            <ShortBanner></ShortBanner>
            <section className='serviceDetails py-24'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className='col-span-2 mr-0 md:mr-10 lg:mr-10'>


                            {!theService ?

                                <div class="rounded-md p-4 w-full">
                                    {/* LOADING EFFECT */}
                                    <div class="animate-pulse flex w-full">
                                        <div className='w-full'>
                                            <div className='w-full bg-slate-300 h-96 rounded-lg'></div>
                                            <div className='mt-10 bg-slate-50 p-5 space-y-3 text-base rounded-lg'>
                                                <p className='bg-slate-300 h-3 w-32 col-span-1'></p>
                                                <p className='bg-slate-300 h-2 col-span-4'></p>
                                                <p className='bg-slate-300 h-2 col-span-4'></p>
                                                <p className='bg-slate-300 h-2 col-span-4'></p>
                                                <p className='bg-slate-300 h-2 col-span-4'></p>
                                                <div className='pt-5'></div>
                                                <button className='bg-slate-300 flex items-center text-white w-32 h-14 rounded-full text-lg transition ease-in duration-300 '></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                :
                                <div className=''>
                                    <div className='relative'>
                                        <img className='w-full max-h-[50rem] rounded-lg' src={theService?.img} alt="Service" />
                                        <div className='bg-rose-600 opacity-80 rounded-bl-lg text-white absolute left-2 bottom-0 p-5 -skew-x-12'>
                                            <h1 className='text-2xl md:text-6xl'>{theService.name}</h1>
                                        </div>
                                    </div>

                                    <div className='mt-10 bg-slate-50 p-5 space-y-3 text-base rounded-lg'>
                                        <h1 className='text-2xl'>Service Overview</h1>
                                        <p>{theService?.description}</p>
                                        <div className='pt-5'></div>
                                        <button onClick={goToAppoinMent} className='bg-rose-600 hover:bg-rose-700 flex items-center text-white py-1 pl-6 pr-1 rounded-full text-lg transition ease-in duration-300 '>MAKE AN APPOINMENT <FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-4 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight} /></button>
                                    </div>
                                </div>
                            }

                        </div>

                        <div>
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;