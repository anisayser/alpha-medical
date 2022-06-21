import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import './Achievement.css';

const Achievement = () => {
    return (
        <section className='achievement pt-20 pb-16'>
            <div className="container mx-auto text-white text-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 gap-y-8">
                    <div className='ach'>
                        <div className='ach-icon mb-5 rounded-full h-24 w-24 flex items-center justify-center border-4 border-rose-200 mx-auto'>
                            <FontAwesomeIcon className='icon text-4xl text-rose-600' icon={faHospitalUser} />
                        </div>
                        <CountUp className='text-5xl' end={4500} duration={5.75}></CountUp>
                        <p>Happy Patients</p>
                    </div>
                    <div className='ach'>
                        <div className='ach-icon mb-5 rounded-full h-24 w-24 flex items-center justify-center border-4 border-rose-200 mx-auto'>
                            <FontAwesomeIcon className='icon text-4xl text-rose-600' icon={faHospitalUser} />
                        </div>
                        {/* <h1 className='text-5xl'>4500</h1> */}
                        <CountUp className='text-5xl' end={3210} duration={5.75}></CountUp>
                        <p>Happy Patients</p>
                    </div>
                    <div className='ach'>
                        <div className='ach-icon mb-5 rounded-full h-24 w-24 flex items-center justify-center border-4 border-rose-200 mx-auto'>
                            <FontAwesomeIcon className='icon text-4xl text-rose-600' icon={faHospitalUser} />
                        </div>
                        <CountUp className='text-5xl' end={2150} duration={5.75}></CountUp>
                        <p>Happy Patients</p>
                    </div>
                    <div className='ach'>
                        <div className='ach-icon mb-5 rounded-full h-24 w-24 flex items-center justify-center border-4 border-rose-200 mx-auto'>
                            <FontAwesomeIcon className='icon text-4xl text-rose-600' icon={faHospitalUser} />
                        </div>
                        <CountUp className='text-5xl' end={1640} duration={5.75}></CountUp>
                        <p>Happy Patients</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Achievement;