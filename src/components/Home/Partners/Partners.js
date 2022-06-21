import React from 'react';
import partner1 from '../../../images/p-logos1.png';
import partner2 from '../../../images/p-logos2.png';
import partner3 from '../../../images/p-logos3.png';
import partner4 from '../../../images/p-logos4.png';
import partner5 from '../../../images/p-logos5.png';
import './Partners.css';
const Partners = () => {
    return (
        <section className='partners'>
            <div className="container mx-auto py-20">
                <div className='flex justify-around flex-wrap'>
                    <img className='pt-5' src={partner1} alt="Partner" />
                    <img className='pt-5' src={partner2} alt="Partner" />
                    <img className='pt-5' src={partner3} alt="Partner" />
                    <img className='pt-5' src={partner4} alt="Partner" />
                    <img className='pt-5' src={partner5} alt="Partner" />
                </div>
            </div>
        </section>
    );
};

export default Partners;