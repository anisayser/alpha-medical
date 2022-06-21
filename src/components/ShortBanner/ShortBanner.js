import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './ShortBanner.css';
const ShortBanner = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <section className='short-banner py-0 md:py-1'>
            <div className='flex justify-center items-center my-0 md:my-32 bg-rose-600 text-white opacity-80'>
                {
                    breadcrumbs.map(({ match, breadcrumb }) => <div key={match.pathname}><h1 className='text-xl md:text-2xl'>{breadcrumb}/</h1></div>)
                }
            </div>
        </section>
    );
};

export default ShortBanner;