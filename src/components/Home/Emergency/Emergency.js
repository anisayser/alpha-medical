import { faHeadphonesSimple, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Emergency.css';
const Emergency = () => {
    return (
        <section className='emergency py-24'>
            <div className="container mx-auto">
                <div className='em-contained lg:w-[32rem] md:w-[32rem] xs:w-80'>
                    <div className='emergency-content p-10 text-white'>
                        <div className='flex items-center space-x-5 pb-10'>
                            <FontAwesomeIcon className='text-6xl' icon={faHeadphonesSimple} />
                            <h1 className='text-4xl'>Emergency <br /> Medical Care 24/7</h1>
                        </div>
                        <p className='pb-5'>With access to 24 hour emergency assistance, It’s so important you can continue to help others.</p>
                            <p className='pb-5'>
                            It is a long established fact that a reader will be distract- ed by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            <p className='pb-5'>
                            It is a long established fact that a reader will be distract- ed by the readable content of a page.</p>
                        <div className='flex space-x-5'>
                            <FontAwesomeIcon className='text-6xl' icon={faPhoneVolume}/>
                            <h1 className='text-4xl'>+88 28624 79555</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;