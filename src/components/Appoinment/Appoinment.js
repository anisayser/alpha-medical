import React from 'react';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebaseInit';
import useServices from '../../hooks/useServices';
import ShortBanner from '../ShortBanner/ShortBanner';

const Appoinment = () => {

    const {serviceName} = useParams();

    const [services] = useServices();

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const appoinmentSubmit = (e)=>{
        e.preventDefault();

        const service = e.target.service.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const phone = e.target.phone.value;
        const msg = e.target.message.value;


        navigate(`/yourappoinment/${service}/${date}/${time}/${phone}/${msg}`);
    }


    return (
        <div>
            <ShortBanner></ShortBanner>
            <section className='appoinment my-14'>
                <div className="container mx-auto">
                    <div>
                        <div className='bg-rose-600 py-2 px-5 rounded-t-lg'>
                            <h1 className='text-2xl text-white'>Book an Appoinment</h1>
                        </div>
                        <div className='bg-slate-50 p-10'>
                            <form onSubmit={appoinmentSubmit}>
                                <div className='grid grid-cols-6 gap-4'>
                                    <input className='col-span-3 border border-gray-300 py-2 px-3' value={user.displayName ? user.displayName : ""} type="text" name="" id="" placeholder='Name' />
                                    <input className='col-span-3 border border-gray-300 py-2 px-3' value={user.email ? user.email : ""} type="email" name="" id="" placeholder='Email' />
                                    <input className='col-span-3 border border-gray-300 py-2 px-3' type="text" name="phone" id="" placeholder='Phone' />
                                    <input className='col-span-3 border border-gray-300 py-2 px-3' type="date" name="date" id="" placeholder='Date' />
                                    <input className='col-span-3 border border-gray-300 py-2 px-3' type="time" name="time" id="" />
                                    <select className='col-span-3 border border-gray-300 py-2 px-3' name="service" id="">
                                        <option value="">Select Service</option>
                                        {
                                            serviceName && <option selected value={serviceName}> {serviceName} </option>
                                        }
                                        {
                                            services.map(service => <option value={service.name}>{service.name}</option>)
                                        }
                                    </select>
                                    <textarea className='col-span-6 border border-gray-300 py-2 px-3' name="message" id="" rows="5" placeholder='Say Something if you want..'></textarea>
                                </div>
                                    <button className='bg-rose-600 hover:bg-rose-800 flex items-center text-white py-1 pl-6 pr-1 mt-5 rounded-full text-xl transition ease-in duration-300'>SUBMIT <FontAwesomeIcon className='bg-rose-200 hover:bg-rose-500 text-rose-600 hover:text-white text-xs p-4 ml-3 rounded-full transition ease-in duration-300' icon={faAngleDoubleRight}/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appoinment;