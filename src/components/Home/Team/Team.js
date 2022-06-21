import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import team2 from '../../../images/team-3.png';
import team4 from '../../../images/doctors-image.jpg';
import './Team.css';
const Team = () => {
    return (
        <section className='full-team pt-32'>
            <div className="container mx-auto text-center pb-14">
                <h1 className='text-3xl text-rose-600'>Our Team</h1>
                <h1 className='text-3xl font-bold py-2'>Our Dedicated Doctors</h1>
                <p className='text-base text-gray-400'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 team-container pt-14">
                    <div className='team rounded-lg py-12 transition ease-linear duration-300'>
                        <div className=''>
                            <div className='relative w-40 mx-auto'>
                                <div className='bg-rose-600 w-10 h-10 rounded-full text-white flex items-center justify-center absolute right-0'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img className='mx-auto pb-5' src={team2} alt="Team Member" />
                            </div>
                            <h4 className='text-lg'>Dr. Aimee Devlin</h4>
                            <p className='text-base'>Psychiatrist</p>
                            <div className='und'></div>
                        </div>
                    </div>
                    <div className='team rounded-lg py-12 transition ease-linear duration-300'>
                        <div className=''>
                        <div className='relative w-40 mx-auto'>
                                <div className='bg-rose-600 w-10 h-10 rounded-full text-white flex items-center justify-center absolute right-0'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img className='mx-auto pb-5' src={team2} alt="Team Member" />
                            </div>
                            <h4 className='text-lg'>Dr. Aimee Devlin</h4>
                            <p className='text-base'>Psychiatrist</p>
                            <div className='und'></div>
                        </div>
                    </div>
                    <div className='team rounded-lg py-12 transition ease-linear duration-300'>
                        <div className=''>
                        <div className='relative w-40 mx-auto'>
                                <div className='bg-rose-600 w-10 h-10 rounded-full text-white flex items-center justify-center absolute right-0'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img className='mx-auto pb-5' src={team2} alt="Team Member" />
                            </div>
                            <h4 className='text-lg'>Dr. Aimee Devlin</h4>
                            <p className='text-base'>Psychiatrist</p>
                            <div className='und'></div>
                        </div>
                    </div>
                    <div className='team rounded-lg py-12 transition ease-linear duration-300'>
                        <div className=''>
                        <div className='relative w-40 mx-auto'>
                                <div className='bg-rose-600 w-10 h-10 rounded-full text-white flex items-center justify-center absolute right-0'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <img className='mx-auto pb-5' src={team2} alt="Team Member" />
                            </div>
                            <h4 className='text-lg'>Dr. Aimee Devlin</h4>
                            <p className='text-base'>Psychiatrist</p>
                            <div className='und'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-photo">
                <img className='w-full' src={team4} alt="" />
            </div>
        </section>
    );
};

export default Team;