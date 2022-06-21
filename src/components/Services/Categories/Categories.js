import { faStethoscope, faTruckMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Categories.css';
const Categories = () => {
    return (
        <section className='all-categories'>
            <div className="container mx-auto py-24">
                <div className="categories grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-y-8">
                    <div className='flex items-center space-x-5 mx-auto'>
                        <FontAwesomeIcon className='text-4xl text-rose-600' icon={faStethoscope}/>
                        <div className="category-name">
                            <p className='text-2xl -mb-1'>Mediacal Counseling</p>
                            <span className='text-sm'>It is a long established fact.</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5 mx-auto'>
                        <FontAwesomeIcon className='text-4xl text-rose-600' icon={faUserDoctor}/>
                        <div className="category-name">
                            <p className='text-2xl -mb-1'>Qualified Doctors</p>
                            <span className='text-sm'>It is a long established fact.</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5 mx-auto'>
                        <FontAwesomeIcon className='text-4xl text-rose-600' icon={faTruckMedical}/>
                        <div className="category-name">
                            <p className='text-2xl -mb-1'>Emergency Services</p>
                            <span className='text-sm'>It is a long established fact.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Categories;